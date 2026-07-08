// COLABORADOR.JSX Panel para colaboradores y moderadores

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import './Colaborador.css';
import { getAsignaturas, crearPregunta } from '../services/api';

// LÍMITES DE CARACTERES Evita entradas desproporcionadas en el formulario manual
const MAX_PREGUNTA = 300;
const MAX_OPCION = 120;
const MAX_EXPLICACION = 500;
const MAX_UNIDAD = 40;
const MAX_EXTRA = 4000;
const MAX_CASO = 800;
const MIN_OPCIONES = 2;
const MAX_OPCIONES = 6;

// Mismas plantillas que en Admin.jsx (ver comentario allá), para que
// un colaborador también pueda agregar tablas o consolas simuladas.
const PLANTILLA_TABLA = `<table class="subnet-table">
  <tr><th>Columna 1</th><th>Columna 2</th></tr>
  <tr><td>Dato A</td><td>Dato B</td></tr>
  <tr><td>Dato C</td><td>Dato D</td></tr>
</table>`;

const PLANTILLA_CONSOLA = `<div class="terminal-box">
$ comando de ejemplo
salida simulada de la consola...
</div>`;

// Pequeño mensaje de advertencia que se muestra debajo de un campo
// cuando ese campo específico tiene un error de validación.
function CampoError({ mensaje }) {
  if (!mensaje) return null;
  return (
    <span style={{ display: 'block', fontSize: '0.78rem', color: '#ff4f6a', marginTop: '0.25rem' }}>
       {mensaje}
    </span>
  );
}

//HOOKS Autenticación y navegación
export default function Colaborador() {
  const { usuario } = useAuth();
  const navigate = useNavigate();

  // Estado del formulario 
  const [asignatura, setAsignatura] = useState('');
  const [material, setMaterial] = useState('');
  const [cantidad, setCantidad] = useState(10);
  const [dificultad, setDificultad] = useState('mixed');
  const [generando, setGenerando] = useState(false);
  const [preguntasGeneradas, setPreguntasGeneradas] = useState([]);
  const [error, setError] = useState('');
  const [enviado, setEnviado] = useState(false);
  // Estados de tabs y asignaturas
  const [tab, setTab] = useState('manual'); 
  const [asignaturas, setAsignaturas] = useState([]);
  const [loading, setLoading] = useState(true);
  // Estados de ingreso manual
  const [formP, setFormP] = useState({ 
    pregunta: '', 
    caso: '',
    opciones: ['', '', '', ''], 
    respuestaCorrecta: -1, 
    dificultad: 'easy', 
    unidad: '', 
    asignaturaId: '', 
    explicacion: '',
    extra: '',
    esDelProfesor: null
  });
  const [msgManual, setMsgManual] = useState('');
  const [erroresP, setErroresP] = useState({}); // Errores por campo del formulario manual (para mostrar debajo de cada uno)

  // EFECTO INICIAL - Carga asignaturas al montar el componente
  useEffect(() => {
    const cargarAsignaturas = async () => {
      try {
        setLoading(true);
        const data = await getAsignaturas();
        console.log('Asignaturas cargadas:', data); // Debug
        setAsignaturas(data);
      } catch (error) {
        console.error('Error cargando asignaturas:', error);
        setAsignaturas([]);
      } finally {
        setLoading(false);
      }
    };
    cargarAsignaturas();
  }, []);

  // VERIFICACIÓN DE ACCESO Usuario autenticado y con rol válido
  if (!usuario) {
    return (
      <>
        <Navbar />
        <main className="page">
          <div className="colab-error">
            <h2>Acceso restringido</h2>
            <p>Debes iniciar sesión para acceder a esta página.</p>
            <button className="btn btn-primary" onClick={() => navigate('/login')}>Iniciar sesión</button>
          </div>
        </main>
      </>
    );
  }

  if (usuario.rol !== 'colaborador' && usuario.rol !== 'moderador') {
    return (
      <>
        <Navbar />
        <main className="page">
          <div className="colab-error">
            <h2>Acceso restringido</h2>
            <p>Solo colaboradores y moderadores pueden acceder a esta página.</p>
            <button className="btn btn-primary" onClick={() => navigate('/')}>Volver al inicio</button>
          </div>
        </main>
      </>
    );
  }

  // FUNCIÓN GENERAR PREGUNTAS Llama a la API de Claude (IA)
  async function generarPreguntas() {
    setError('');
    
    if (!asignatura.trim()) {
      setError('Escribe el nombre de la asignatura.');
      return;
    }
    
    if (!material.trim() || material.trim().length < 50) {
      setError('El material debe tener al menos 50 caracteres.');
      return;
    }

    setGenerando(true);
    setPreguntasGeneradas([]);

    try {
      const response = await fetch('/api/anthropic/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 4000,
          messages: [{
            role: 'user',
            content: `Eres un generador de preguntas de estudio. A partir del siguiente material, genera exactamente ${cantidad} preguntas de opción múltiple.

ASIGNATURA: ${asignatura}
DIFICULTAD: ${dificultad === 'mixed' ? 'mezcla de easy, medium y hard' : dificultad}

MATERIAL:
${material}

FORMATO DE RESPUESTA — responde SOLO con un array JSON válido, sin texto adicional, sin markdown, sin bloques de código:
[
  {
    "q": "texto de la pregunta",
    "opts": ["opción A", "opción B", "opción C", "opción D"],
    "ans": 0,
    "exp": "explicación de por qué es correcta",
    "diff": "easy|medium|hard",
    "unit": "tema o unidad del material"
  }
]

REGLAS:
- "ans" es el índice (0-3) de la opción correcta en "opts"
- Las opciones deben ser plausibles y no obvias
- La explicación debe ser educativa y clara
- Basa las preguntas SOLO en el material proporcionado
- Genera exactamente ${cantidad} preguntas`
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`Error en la API: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.content || !data.content[0] || !data.content[0].text) {
        throw new Error('Respuesta inválida de la API');
      }
      
      // Extraemos el texto de la respuesta
      const texto = data.content[0].text.trim();
      
      // Parseamos el JSON - limpiar posibles markdown
      let cleanText = texto;
      // Remover bloques de código markdown
      cleanText = cleanText.replace(/```json\s*/g, '');
      cleanText = cleanText.replace(/```\s*/g, '');
      cleanText = cleanText.trim();
      
      const preguntas = JSON.parse(cleanText);
      
      if (!Array.isArray(preguntas) || preguntas.length === 0) {
        throw new Error('No se generaron preguntas válidas');
      }
      
      setPreguntasGeneradas(preguntas);
      setError('');

    // Procesa la respuesta y extrae las preguntas
    } catch (err) {
      console.error('Error al generar preguntas:', err);
      setError('Error al generar preguntas. Intenta de nuevo. ' + err.message);
    } finally {
      setGenerando(false);
    }
  }

  // FUNCIÓN ENVIAR A REVISIÓN Guarda preguntas como pendientes a revisión del moderador
  function enviarARevision() {
    if (preguntasGeneradas.length === 0) {
      setError('No hay preguntas para enviar.');
      return;
    }

    // Guardamos en localStorage como "pendientes"
    const pendientes = JSON.parse(localStorage.getItem('preguntas_pendientes') || '[]');
    
    const nuevasSolicitud = {
      id: Date.now().toString(),
      colaborador: usuario.nombre || usuario.email || 'Anónimo',
      colaboradorId: usuario.id || usuario._id,
      asignatura: asignatura,
      fecha: new Date().toISOString(),
      estado: 'pendiente',
      preguntas: preguntasGeneradas
    };

    pendientes.push(nuevasSolicitud);
    localStorage.setItem('preguntas_pendientes', JSON.stringify(pendientes));
    
    setEnviado(true);
    setPreguntasGeneradas([]);
    setMaterial('');
    setAsignatura('');
    
    setTimeout(() => setEnviado(false), 5000);
  }

  // FUNCIÓN GUARDAR PREGUNTA MANUAL Guarda pregunta creada por el usuario
  async function guardarPreguntaManual() {
    setMsgManual('');
    
    const preguntaLimpia = formP.pregunta.trim();

    // Reunimos TODOS los errores por campo en un objeto, para poder
    // mostrar la advertencia específica debajo de cada campo (en vez
    // de un solo mensaje genérico que obliga a adivinar cuál falta).
    const nuevosErrores = {};
    if (!formP.asignaturaId) nuevosErrores.asignaturaId = 'Selecciona una asignatura.';
    if (!preguntaLimpia) nuevosErrores.pregunta = 'Escribe la pregunta.';
    else if (preguntaLimpia.length > MAX_PREGUNTA) nuevosErrores.pregunta = `La pregunta no puede superar los ${MAX_PREGUNTA} caracteres.`;

    const opcionesErr = {};
    formP.opciones.forEach((o, i) => {
      if (!o.trim()) opcionesErr[i] = 'Completa esta opción.';
      else if (o.length > MAX_OPCION) opcionesErr[i] = `Máximo ${MAX_OPCION} caracteres.`;
    });
    if (Object.keys(opcionesErr).length) nuevosErrores.opciones = opcionesErr;

    if (!formP.explicacion.trim()) nuevosErrores.explicacion = 'Escribe la explicación de la respuesta correcta.';
    else if (formP.explicacion.length > MAX_EXPLICACION) nuevosErrores.explicacion = `La explicación no puede superar los ${MAX_EXPLICACION} caracteres.`;

    if (formP.esDelProfesor === null) nuevosErrores.esDelProfesor = 'Indica si es de una prueba del profesor o inventada.';

    if (formP.extra.length > MAX_EXTRA) nuevosErrores.extra = `El contenido extra no puede superar los ${MAX_EXTRA} caracteres.`;
    if (formP.caso.length > MAX_CASO) nuevosErrores.caso = `El caso no puede superar los ${MAX_CASO} caracteres.`;

    setErroresP(nuevosErrores);
    if (Object.keys(nuevosErrores).length) {
      setMsgManual('Revisa los campos marcados en rojo.');
      return;
    }

    try {
      // Buscar la asignatura seleccionada
      const asig = asignaturas.find(a => a.key === formP.asignaturaId || String(a.id) === formP.asignaturaId);
      
      if (!asig) {
        setMsgManual('Asignatura no encontrada.');
        return;
      }

      // Preparar datos para guardar
      const preguntaData = {
        ...formP,
        pregunta: preguntaLimpia,
        asignatura: asig.key || asig.nombre,
        asignaturaId: asig.key || asig._id,
        // Asegurar que la respuesta correcta sea un número
        respuestaCorrecta: parseInt(formP.respuestaCorrecta) || 0
      };

      console.log('Guardando pregunta:', preguntaData); // Debug
      
      await crearPregunta(preguntaData);
      
      setMsgManual('✅ Pregunta guardada exitosamente');
      
      // Resetear formulario
      setFormP({ 
        pregunta: '', 
        caso: '',
        opciones: ['', '', '', ''], 
        respuestaCorrecta: 0, 
        dificultad: 'easy', 
        unidad: '', 
        asignaturaId: '', 
        explicacion: '',
        extra: '',
        esDelProfesor: null
      });
      setErroresP({});
      
      setTimeout(() => setMsgManual(''), 3000);
    } catch (error) {
      console.error('Error guardando pregunta:', error);
      setMsgManual('Error al guardar la pregunta: ' + error.message);
    }
  }

  // FUNCIÓN AUXILIAR Cambia el valor de una opción
  const handleOpcionChange = (index, value) => {
    const nuevasOpciones = [...formP.opciones];
    nuevasOpciones[index] = value;
    setFormP({ ...formP, opciones: nuevasOpciones });
  };

  // Agrega una opción de respuesta más (hasta MAX_OPCIONES)
  function agregarOpcion() {
    if (formP.opciones.length >= MAX_OPCIONES) {
      setMsgManual(`Máximo ${MAX_OPCIONES} opciones.`);
      return;
    }
    setFormP(f => ({ ...f, opciones: [...f.opciones, ''] }));
  }

  // Quita la última opción de respuesta (hasta MIN_OPCIONES)
  function quitarOpcion() {
    if (formP.opciones.length <= MIN_OPCIONES) {
      setMsgManual(`Mínimo ${MIN_OPCIONES} opciones.`);
      return;
    }
    setFormP(f => {
      const opciones = f.opciones.slice(0, -1);
      const respuestaCorrecta = f.respuestaCorrecta >= opciones.length ? 0 : f.respuestaCorrecta;
      return { ...f, opciones, respuestaCorrecta };
    });
  }

  // RENDER Interfaz del panel
  return (
    <>
      <Navbar />
      <main className="page">
        <div className="colab-header">
          <h1>📝 Panel del Colaborador</h1>
          <p>Genera o ingresa preguntas de estudio para las asignaturas</p>
        </div>

        <div className="admin-tabs">
          <button 
            className={`tab ${tab === 'ia' ? 'tab-active' : ''}`} 
            onClick={() => setTab('ia')}
          >
            🤖 Generar con IA
          </button>
          <button 
            className={`tab ${tab === 'manual' ? 'tab-active' : ''}`} 
            onClick={() => setTab('manual')}
          >
            ✏️ Ingresar manual
          </button>
        </div>

        {tab === 'ia' && (
          <div className="colab-ia-section">
            {enviado && (
              <div className="colab-flash success">
                ✅ Preguntas enviadas a revisión exitosamente.
              </div>
            )}
            
            {error && (
              <div className="colab-error-msg error">
                ❌ {error}
              </div>
            )}

            <div className="colab-form card">
              <h3>Generar preguntas con IA</h3>
              
              <div className="form-group">
                <label className="input-label">Asignatura</label>
                <input 
                  className="input" 
                  placeholder="Ej: Fundamentos de Seguridad" 
                  value={asignatura} 
                  onChange={e => setAsignatura(e.target.value)} 
                />
              </div>
              
              <div className="form-group">
                <label className="input-label">Cantidad de preguntas</label>
                <div className="count-btns">
                  {[5, 10, 15, 20, 30].map(n => (
                    <button 
                      key={n} 
                      className={`count-btn${cantidad === n ? ' selected' : ''}`} 
                      onClick={() => setCantidad(n)}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label className="input-label">Dificultad</label>
                <select 
                  className="input" 
                  value={dificultad} 
                  onChange={e => setDificultad(e.target.value)}
                >
                  <option value="mixed">Mixta</option>
                  <option value="easy">Fácil</option>
                  <option value="medium">Media</option>
                  <option value="hard">Difícil</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="input-label">Material de estudio</label>
                <textarea 
                  className="input" 
                  rows={10} 
                  placeholder="Pega aquí el texto del material..." 
                  value={material} 
                  onChange={e => setMaterial(e.target.value)} 
                />
                <span className="colab-chars">{material.length} caracteres</span>
              </div>
              
              <button 
                className="btn btn-primary" 
                onClick={generarPreguntas} 
                disabled={generando}
              >
                {generando ? '⏳ Generando...' : '🚀 Generar preguntas con IA'}
              </button>
            </div>

            {preguntasGeneradas.length > 0 && (
              <div className="colab-preview card">
                <div className="colab-preview-header">
                  <h3>📋 Vista previa — {preguntasGeneradas.length} preguntas</h3>
                  <button className="btn btn-success" onClick={enviarARevision}>
                    📤 Enviar a revisión
                  </button>
                </div>
                
                {preguntasGeneradas.map((p, i) => (
                  <div key={i} className="colab-pregunta">
                    <div className="colab-pregunta-header">
                      <span className={`badge badge-${p.diff || 'medium'}`}>
                        {p.diff || 'medium'}
                      </span>
                      <span className="colab-unidad">{p.unit || 'Sin unidad'}</span>
                      <span className="colab-num">#{i + 1}</span>
                    </div>
                    <p className="colab-q">{p.q}</p>
                    <div className="colab-opts">
                      {p.opts && p.opts.map((op, j) => (
                        <div 
                          key={j} 
                          className={`colab-opt ${j === p.ans ? 'colab-opt-correcta' : ''}`}
                        >
                          <span className="colab-letra">{String.fromCharCode(65 + j)}</span>
                          <span>{op}</span>
                          {j === p.ans && <span className="check-mark">✓</span>}
                        </div>
                      ))}
                    </div>
                    <p className="colab-exp">💡 {p.exp}</p>
                  </div>
                ))}
                
                <button className="btn btn-success" onClick={enviarARevision}>
                  📤 Enviar a revisión
                </button>
              </div>
            )}
          </div>
        )}

        {tab === 'manual' && (
          <div className="admin-form card">
            <h3>✏️ Ingresar pregunta manualmente</h3>
            
            {msgManual && (
              <div className={`admin-flash ${msgManual.includes('✅') ? 'success' : 'error'}`}>
                {msgManual}
              </div>
            )}
            
            <div className="form-row">
              <div className="form-group" style={{ flex: 2 }}>
                <label className="input-label">📚 Asignatura</label>
                <select 
                  className="input" 
                  value={formP.asignaturaId} 
                  onChange={e => { setFormP(f => ({ ...f, asignaturaId: e.target.value })); setErroresP(er => ({ ...er, asignaturaId: null })); }}
                >
                  <option value="">Selecciona una asignatura</option>
                  {loading ? (
                    <option value="">Cargando asignaturas...</option>
                  ) : (
                    asignaturas && asignaturas.map(a => (
                      <option key={a.key ?? a._id} value={a.key ?? a._id}>
                        {a.nombre} {a.totalPreguntas !== undefined ? `(${a.totalPreguntas} preguntas)` : ''}
                      </option>
                    ))
                  )}
                </select>
                <CampoError mensaje={erroresP.asignaturaId} />
              </div>
              
              <div className="form-group" style={{ flex: 1 }}>
                <label className="input-label">📊 Dificultad</label>
                <select 
                  className="input" 
                  value={formP.dificultad} 
                  onChange={e => setFormP(f => ({ ...f, dificultad: e.target.value }))}
                >
                  <option value="easy">🟢 Fácil</option>
                  <option value="medium">🟡 Media</option>
                  <option value="hard">🔴 Difícil</option>
                </select>
              </div>
              
              <div className="form-group" style={{ flex: 1 }}>
                <label className="input-label">📂 Unidad</label>
                <input 
                  className="input" 
                  value={formP.unidad} 
                  onChange={e => setFormP(f => ({ ...f, unidad: e.target.value }))} 
                  placeholder="Ej: Unidad 1" 
                  maxLength={MAX_UNIDAD}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="input-label">📝 Caso (opcional)</label>
              <textarea
                className="input"
                rows={2}
                value={formP.caso}
                onChange={e => { setFormP(f => ({ ...f, caso: e.target.value })); setErroresP(er => ({ ...er, caso: null })); }}
                placeholder="Contexto o escenario que se muestra antes de la pregunta…"
                maxLength={MAX_CASO}
              />
              <span style={{ fontSize: '0.75rem', color: '#8a7e9a' }}>{formP.caso.length}/{MAX_CASO}</span>
              <CampoError mensaje={erroresP.caso} />
            </div>

            <div className="form-group">
              <label className="input-label">❓ Pregunta *</label>
              <textarea 
                className="input" 
                rows={2} 
                value={formP.pregunta} 
                onChange={e => { setFormP(f => ({ ...f, pregunta: e.target.value })); setErroresP(er => ({ ...er, pregunta: null })); }} 
                placeholder="Escribe la pregunta…" 
                maxLength={MAX_PREGUNTA}
              />
              <span style={{ fontSize: '0.75rem', color: '#8a7e9a' }}>{formP.pregunta.length}/{MAX_PREGUNTA}</span>
              <CampoError mensaje={erroresP.pregunta} />
            </div>
            
            <div className="form-group">
              <label className="input-label">Opciones de respuesta * ({formP.opciones.length})</label>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>
                👆 Selecciona el radio button de la opción correcta
              </p>
              {formP.opciones.map((op, i) => (
                <div key={i} style={{ marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <input 
                      type="radio" 
                      name="correcta" 
                      checked={formP.respuestaCorrecta === i} 
                      onChange={() => setFormP(f => ({ ...f, respuestaCorrecta: i }))} 
                    />
                    <input 
                      className="input" 
                      value={op} 
                      onChange={e => {
                        const nuevasOpciones = [...formP.opciones];
                        nuevasOpciones[i] = e.target.value;
                        setFormP({ ...formP, opciones: nuevasOpciones });
                        setErroresP(er => {
                          if (!er.opciones) return er;
                          const opcionesErr = { ...er.opciones };
                          delete opcionesErr[i];
                          const resto = { ...er };
                          if (Object.keys(opcionesErr).length) resto.opciones = opcionesErr; else delete resto.opciones;
                          return resto;
                        });
                      }} 
                      placeholder={`Opción ${String.fromCharCode(65 + i)}`} 
                      style={{ flex: 1 }}
                      maxLength={MAX_OPCION}
                    />
                    {formP.respuestaCorrecta === i && <span style={{ color: 'green', fontWeight: 'bold' }}>✓ Correcta</span>}
                  </div>
                  <CampoError mensaje={erroresP.opciones?.[i]} />
                </div>
              ))}
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.4rem' }}>
                <button type="button" className="btn btn-ghost btn-sm" onClick={agregarOpcion}>+ Agregar opción</button>
                <button type="button" className="btn btn-ghost btn-sm" onClick={quitarOpcion}>- Quitar opción</button>
              </div>
            </div>

            <div className="form-group">
              <label className="input-label">💡 Explicación</label>
              <textarea 
                className="input" 
                rows={2} 
                value={formP.explicacion} 
                onChange={e => { setFormP(f => ({ ...f, explicacion: e.target.value })); setErroresP(er => ({ ...er, explicacion: null })); }} 
                placeholder="Explicación de por qué la respuesta es correcta…" 
                maxLength={MAX_EXPLICACION}
              />
              <span style={{ fontSize: '0.75rem', color: '#8a7e9a' }}>{formP.explicacion.length}/{MAX_EXPLICACION}</span>
              <CampoError mensaje={erroresP.explicacion} />
            </div>

            {/* Contenido extra: tabla o consola simulada (opcional) */}
            <div className="form-group">
              <label className="input-label">🖥️ Contenido extra (tabla o consola, opcional)</label>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={() => setFormP(f => ({ ...f, extra: (f.extra ? f.extra + '\n' : '') + PLANTILLA_TABLA }))}
                >
                  + Insertar tabla
                </button>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={() => setFormP(f => ({ ...f, extra: (f.extra ? f.extra + '\n' : '') + PLANTILLA_CONSOLA }))}
                >
                  + Insertar consola
                </button>
              </div>
              <textarea
                className="input"
                rows={4}
                value={formP.extra}
                onChange={e => { setFormP(f => ({ ...f, extra: e.target.value })); setErroresP(er => ({ ...er, extra: null })); }}
                placeholder="Usa los botones de arriba para insertar una plantilla, o pega tu propio HTML…"
                maxLength={MAX_EXTRA}
                style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}
              />
              <span style={{ fontSize: '0.75rem', color: '#8a7e9a' }}>{formP.extra.length}/{MAX_EXTRA}</span>
              <CampoError mensaje={erroresP.extra} />
              {formP.extra && (
                <div style={{ marginTop: '0.6rem' }}>
                  <span className="input-label" style={{ marginBottom: '0.3rem' }}>Vista previa</span>
                  <div className="quiz-extra" dangerouslySetInnerHTML={{ __html: formP.extra }} />
                </div>
              )}
            </div>
            
            {/* Origen obligatorio: prueba/archivo real del profesor, o inventada */}
            <div className="form-group">
              <label className="input-label">¿Es de una prueba o archivo del profesor? *</label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}>
                  <input type="radio" name="esDelProfesor" checked={formP.esDelProfesor === true} onChange={() => { setFormP(f => ({ ...f, esDelProfesor: true })); setErroresP(er => ({ ...er, esDelProfesor: null })); }} />
                  Sí, viene de una prueba/archivo real
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}>
                  <input type="radio" name="esDelProfesor" checked={formP.esDelProfesor === false} onChange={() => { setFormP(f => ({ ...f, esDelProfesor: false })); setErroresP(er => ({ ...er, esDelProfesor: null })); }} />
                  No, es inventada para estudiar
                </label>
              </div>
              <CampoError mensaje={erroresP.esDelProfesor} />
            </div>
            
            <button className="btn btn-primary" onClick={guardarPreguntaManual}>
              💾 Guardar pregunta
            </button>
          </div>
        )}
      </main>
    </>
  );
}