// ADMIN Panel de administración para gestionar preguntas, asignaturas y reportes

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
// Importa las funciones de API para CRUD de preguntas y asignaturas
import {
  getAsignaturas, getPreguntas,
  crearPregunta, editarPregunta, eliminarPregunta,
  crearAsignatura, eliminarAsignatura,
  getAsignaturasDesactivadas, toggleAsignaturaActiva,
  getReportes, eliminarReporte, registrarActividad
} from '../services/api';

// CONFIGURACIÓN INICIAL Valores por defecto para formularios
const DIFFS = ['easy', 'medium', 'hard'];
// LÍMITES DE CARACTERES Evita entradas desproporcionadas en los formularios
const MAX_PREGUNTA = 300;
const MAX_OPCION = 120;
const MAX_EXPLICACION = 500;
const MAX_UNIDAD = 40;
const MAX_NOMBRE_ASIG = 60;
const MAX_DESC_ASIG = 150;
const MAX_EXTRA = 4000;
const MAX_CASO = 800;
const MIN_OPCIONES = 2;
const MAX_OPCIONES = 6;

// Plantillas listas para pegar y editar en el campo "Contenido extra".
// Reutilizan las mismas clases CSS que ya usan las preguntas del banco
// estático (ver Quiz.css: .terminal-box y .subnet-table), así que se
// ven igual de bien sin tener que escribir el HTML/CSS desde cero.
const PLANTILLA_TABLA = `<table class="subnet-table">
  <tr><th>Columna 1</th><th>Columna 2</th></tr>
  <tr><td>Dato A</td><td>Dato B</td></tr>
  <tr><td>Dato C</td><td>Dato D</td></tr>
</table>`;

const PLANTILLA_CONSOLA = `<div class="terminal-box">
$ comando de ejemplo
salida simulada de la consola...
</div>`;
// esDelProfesor: null = todavía no elegido (obligatorio elegir true o false)
const EMPTY_P = { pregunta: '', caso: '', opciones: ['', '', '', ''], respuestaCorrecta: 0, dificultad: 'easy', unidad: '', asignaturaId: '', explicacion: '', extra: '', esDelProfesor: null };
const EMPTY_A = { nombre: '', color: '#7c6dfa', descripcion: '', icono: '' };

// Pequeño mensaje de advertencia que se muestra debajo de un campo
// cuando ese campo específico tiene un error de validación.
function CampoError({ mensaje }) {
  if (!mensaje) return null;
  return (
    <span style={{ display: 'block', fontSize: '0.78rem', color: 'var(--danger, #ff4f6a)', marginTop: '0.25rem' }}>
       {mensaje}
    </span>
  );
}

// ESTADOS DEL COMPONENTE
export default function Admin() {
  const [tab, setTab] = useState('preguntas');        // Pestaña activa: preguntas, asignaturas, reportes
  const [preguntas, setPreguntas] = useState([]);     // Lista de preguntas
  const [asignaturas, setAsignaturas] = useState([]); // Lista de asignaturas
  const [loading, setLoading] = useState(true);       // Estado de carga
  const [form, setForm] = useState(EMPTY_P);          // Formulario de pregunta (nueva/edición)
  const [editId, setEditId] = useState(null);         // ID de la pregunta que se está editando
  const [filtroAsig, setFiltroAsig] = useState('');   // Filtro por asignatura
  const [formA, setFormA] = useState(EMPTY_A);        // Formulario de asignatura
  const [msg, setMsg] = useState('');                 // Mensajes de feedback
  const [errores, setErrores] = useState({});         // Errores por campo del formulario de pregunta (para mostrar debajo de cada uno)
  const [reportes, setReportes] = useState([]);       // Lista de reportes de errores
  const [desactivadas, setDesactivadas] = useState([]); // Keys de cuestionarios desactivados
  const [ordenPreguntas, setOrdenPreguntas] = useState('fecha'); // 'fecha' o 'nombre'
  const [ordenAsignaturas, setOrdenAsignaturas] = useState('fecha'); // 'fecha' o 'nombre'
  const [asigDetalle, setAsigDetalle] = useState(null); // Asignatura cuyo detalle (preguntas) se está viendo, o null

  // FUNCIONES AUXILIARES
  // Muestra un mensaje temporal (2.5 segundos)
  function flash(txt) { setMsg(txt); setTimeout(() => setMsg(''), 3200); }

  // CARGA DE DATOS Obtiene preguntas, asignaturas y reportes
  function cargar() {
  return Promise.all([
    getPreguntas(),
    getAsignaturas(),
    getReportes() // viene de Local Storage, no depende de json-server
  ])
    .then(([p, a, r]) => { setPreguntas(p); setAsignaturas(a); setReportes(r); })
    .finally(() => setLoading(false));
}

  // ACTIVAR/DESACTIVAR Cambia el estado de una asignatura y refresca la lista
  function manejarToggleAsignatura(key) {
    toggleAsignaturaActiva(key);
    setDesactivadas(getAsignaturasDesactivadas());
    registrarActividad(`Cambió el estado (activo/inactivo) de la asignatura "${key}"`);
  }


  // EFECTO INICIAL Carga los datos al montar el componente
  useEffect(() => { cargar(); setDesactivadas(getAsignaturasDesactivadas()); }, []);

  // CRUD DE PREGUNTAS Guardar, editar y eliminar
  async function guardarPregunta() {
    const preguntaLimpia = form.pregunta.trim();

    // Reunimos TODOS los errores por campo en un objeto, para poder
    // mostrar la advertencia específica debajo de cada campo (en vez
    // de un solo mensaje genérico que obliga a adivinar cuál falta).
    const nuevosErrores = {};
    if (!form.asignaturaId) nuevosErrores.asignaturaId = 'Selecciona una asignatura.';
    if (!preguntaLimpia) nuevosErrores.pregunta = 'Escribe la pregunta.';
    else if (preguntaLimpia.length > MAX_PREGUNTA) nuevosErrores.pregunta = `La pregunta no puede superar los ${MAX_PREGUNTA} caracteres.`;

    // Una entrada por cada opción vacía o demasiado larga, indexada por posición
    const opcionesErr = {};
    form.opciones.forEach((o, i) => {
      if (!o.trim()) opcionesErr[i] = 'Completa esta opción.';
      else if (o.length > MAX_OPCION) opcionesErr[i] = `Máximo ${MAX_OPCION} caracteres.`;
    });
    if (Object.keys(opcionesErr).length) nuevosErrores.opciones = opcionesErr;

    if (!form.explicacion.trim()) nuevosErrores.explicacion = 'Escribe la explicación de la respuesta correcta.';
    else if (form.explicacion.length > MAX_EXPLICACION) nuevosErrores.explicacion = `La explicación no puede superar los ${MAX_EXPLICACION} caracteres.`;

    if (form.esDelProfesor === null) nuevosErrores.esDelProfesor = 'Indica si es de una prueba del profesor o inventada.';

    if (form.extra.length > MAX_EXTRA) nuevosErrores.extra = `El contenido extra no puede superar los ${MAX_EXTRA} caracteres.`;
    if (form.caso.length > MAX_CASO) nuevosErrores.caso = `El caso no puede superar los ${MAX_CASO} caracteres.`;

    setErrores(nuevosErrores);
    if (Object.keys(nuevosErrores).length) return flash('Revisa los campos marcados en rojo.');

    try {
      const asig = asignaturas.find(a => a.key === form.asignaturaId || a._id === form.asignaturaId);
      if (!asig) return flash('Asignatura no encontrada.');
      const payload = {
        ...form,
        pregunta: preguntaLimpia,
        asignatura: asig.key || asig.nombre,
        asignaturaId: asig.key || asig._id,
        respuestaCorrecta: parseInt(form.respuestaCorrecta) || 0
      };
      if (editId) {
        await editarPregunta(editId, payload);
        flash('Pregunta actualizada ✓');
        registrarActividad(`Editó la pregunta "${preguntaLimpia.slice(0, 60)}"`);
      } else {
        await crearPregunta(payload);
        flash('Pregunta creada ✓');
        registrarActividad(`Creó la pregunta "${preguntaLimpia.slice(0, 60)}"`);
      }
      setForm(EMPTY_P);
      setEditId(null);
      setErrores({});
      cargar();
    } catch (error) {
      flash('Error al guardar la pregunta');
    }
  }

  // Agrega una opción de respuesta más (hasta MAX_OPCIONES)
  function agregarOpcion() {
    if (form.opciones.length >= MAX_OPCIONES) return flash(`Máximo ${MAX_OPCIONES} opciones.`);
    setForm(f => ({ ...f, opciones: [...f.opciones, ''] }));
  }

  // Quita la última opción de respuesta (hasta MIN_OPCIONES)
  function quitarOpcion() {
    if (form.opciones.length <= MIN_OPCIONES) return flash(`Mínimo ${MIN_OPCIONES} opciones.`);
    setForm(f => {
      const opciones = f.opciones.slice(0, -1);
      // Si la respuesta correcta apuntaba a la opción que quitamos, la reseteamos a la primera
      const respuestaCorrecta = f.respuestaCorrecta >= opciones.length ? 0 : f.respuestaCorrecta;
      return { ...f, opciones, respuestaCorrecta };
    });
  }

  // Carga los datos de una pregunta en el formulario para editarla
  function editarP(p) {
    setForm({
      pregunta: p.pregunta,
      caso: p.caso || '',
      opciones: p.opciones,
      respuestaCorrecta: p.respuestaCorrecta,
      dificultad: p.dificultad,
      unidad: p.unidad || '',
      asignaturaId: p.asignaturaId,
      explicacion: p.explicacion || '',
      extra: p.extra || '',
      esDelProfesor: typeof p.esDelProfesor === 'boolean' ? p.esDelProfesor : null
    });
    setEditId(p._id || p.id);
    setErrores({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Elimina una pregunta previa confirmación
  async function borrarP(id) {
    if (!confirm('¿Eliminar esta pregunta?')) return;
    await eliminarPregunta(id);
    flash('Eliminada ✓');
    registrarActividad('Eliminó una pregunta del banco');
    cargar();
  }

  // CRUD DE ASIGNATURAS Guardar y eliminar
  async function guardarAsignatura() {
    const nombreLimpio = formA.nombre.trim();
    const faltantes = [];
    if (!nombreLimpio) faltantes.push('Nombre');
    if (faltantes.length) return flash(`Faltan campos obligatorios: ${faltantes.join(', ')}.`);
    if (nombreLimpio.length > MAX_NOMBRE_ASIG) return flash(`El nombre no puede superar los ${MAX_NOMBRE_ASIG} caracteres.`);
    if (formA.descripcion.length > MAX_DESC_ASIG) return flash(`La descripción no puede superar los ${MAX_DESC_ASIG} caracteres.`);
    const payload = { ...formA, nombre: nombreLimpio, key: nombreLimpio.toLowerCase().replace(/\s+/g, '_') };
    await crearAsignatura(payload);
    flash('Asignatura creada ✓');
    registrarActividad(`Creó la asignatura "${nombreLimpio}"`);
    setFormA(EMPTY_A);
    cargar();
  }

  // Elimina una asignatura previa confirmación
  async function borrarA(id) {
    if (!confirm('¿Eliminar esta asignatura?')) return;
    await eliminarAsignatura(id);
    flash('Eliminada ✓');
    registrarActividad('Eliminó una asignatura');
    cargar();
  }

  // FILTRADO Filtra preguntas por asignatura seleccionada
  const pregsFiltradas = (filtroAsig
    ? preguntas.filter(p => p.asignaturaId === filtroAsig || p.asignatura === filtroAsig)
    : preguntas
  ).slice().sort((a, b) => {
    if (ordenPreguntas === 'nombre') return (a.pregunta || '').localeCompare(b.pregunta || '');
    // Por fecha: más nuevas primero. Las preguntas del banco estático no
    // tienen createdAt, así que quedan al final (se tratan como fecha 0).
    return (b.createdAt || 0) - (a.createdAt || 0);
  });

  // Asignaturas ordenadas por fecha (más nuevas primero) o por nombre
  const asignaturasOrdenadas = asignaturas.slice().sort((a, b) => {
    if (ordenAsignaturas === 'nombre') return (a.nombre || '').localeCompare(b.nombre || '');
    return (b.createdAt || 0) - (a.createdAt || 0);
  });

  // PANTALLA DE CARGA
  if (loading) return <><Navbar /><div className="loading">Cargando…</div></>;

  // RENDER Interface del panel de administración
  return (
    <>
      <Navbar />
      <main className="page admin-page">

        <div className="admin-header" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img
            src="/img/app001admin.jpg"
            alt="administrador"
            style={{ width: '80px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <div>
            <h1>Panel de administración</h1>
            <p className="admin-sub">Gestiona asignaturas y preguntas</p>
          </div>
        </div>

        {msg && <div className="admin-flash">{msg}</div>}

        <div className="admin-tabs">
          <button className={`tab ${tab === 'preguntas' ? 'tab-active' : ''}`} onClick={() => setTab('preguntas')}>
            Preguntas <span className="tab-count">{preguntas.length}</span>
          </button>
          <button className={`tab ${tab === 'asignaturas' ? 'tab-active' : ''}`} onClick={() => setTab('asignaturas')}>
            Asignaturas <span className="tab-count">{asignaturas.length}</span>
          </button>
          <button className={`tab ${tab === 'reportes' ? 'tab-active' : ''}`} onClick={() => setTab('reportes')}>
            Reportes <span className="tab-count">{reportes.length}</span>
          </button>
          <button className={`tab ${tab === 'estado' ? 'tab-active' : ''}`} onClick={() => setTab('estado')}>
            Estado <span className="tab-count">{desactivadas.length}</span>
          </button>
        </div>

        {/* TAB PREGUNTAS */}
        {tab === 'preguntas' && (
          <div>
            {/* Formulario nueva/editar pregunta */}
            <div className="admin-form card">
              <h3>{editId ? 'Editar pregunta' : 'Nueva pregunta'}</h3>
              <div className="form-row">
                <div className="form-group" style={{ flex: 2 }}>
                  <label htmlFor="asignaturaId" className="input-label">Asignatura *</label>
                  <select id="asignaturaId" className="input" value={form.asignaturaId} onChange={e => { setForm(f => ({ ...f, asignaturaId: e.target.value })); setErrores(er => ({ ...er, asignaturaId: null })); }}>
                    <option value="">Selecciona</option>
                    {asignaturas.map(a => (
                      <option key={a.key || a._id} value={a.key || a._id}>{a.nombre}</option>
                    ))}
                  </select>
                  <CampoError mensaje={errores.asignaturaId} />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label htmlFor="dificultad" className="input-label">Dificultad</label>
                  <select id="dificultad" className="input" value={form.dificultad} onChange={e => setForm(f => ({ ...f, dificultad: e.target.value }))}>
                    {DIFFS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label htmlFor="unidad" className="input-label">Unidad</label>
                  <input id="unidad" className="input" value={form.unidad} onChange={e => setForm(f => ({ ...f, unidad: e.target.value }))} placeholder="Ej: Unidad 1" maxLength={MAX_UNIDAD} />
                </div>
              </div>

              {/* Caso: contexto/escenario opcional que se muestra antes de
                  la pregunta (ej: un caso de estudio para leer primero) */}
              <div className="form-group">
                <label htmlFor="caso" className="input-label">Caso (opcional)</label>
                <textarea id="caso" className="input" rows={2} value={form.caso} onChange={e => { setForm(f => ({ ...f, caso: e.target.value })); setErrores(er => ({ ...er, caso: null })); }} placeholder="Contexto o escenario que se muestra antes de la pregunta…" maxLength={MAX_CASO} />
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{form.caso.length}/{MAX_CASO}</span>
                <CampoError mensaje={errores.caso} />
              </div>

              <div className="form-group">
                <label htmlFor="pregunta" className="input-label">Pregunta *</label>
                <textarea id="pregunta" className="input" rows={2} value={form.pregunta} onChange={e => { setForm(f => ({ ...f, pregunta: e.target.value })); setErrores(er => ({ ...er, pregunta: null })); }} placeholder="Escribe la pregunta…" maxLength={MAX_PREGUNTA} />
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{form.pregunta.length}/{MAX_PREGUNTA}</span>
                <CampoError mensaje={errores.pregunta} />
              </div>

              <label htmlFor="opciones" className="input-label">Opciones de respuesta * ({form.opciones.length})</label>
              {form.opciones.map((op, i) => (
                <div className="form-group" key={i}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <input type="radio" name="correcta" checked={form.respuestaCorrecta === i} onChange={() => setForm(f => ({ ...f, respuestaCorrecta: i }))} />
                    <input
                    id={`opcion`}
                      className="input"
                      value={op}
                      onChange={e => {
                        const opts = [...form.opciones];
                        opts[i] = e.target.value;
                        setForm(f => ({ ...f, opciones: opts }));
                        setErrores(er => {
                          if (!er.opciones) return er;
                          const opcionesErr = { ...er.opciones };
                          delete opcionesErr[i];
                          const resto = { ...er };
                          if (Object.keys(opcionesErr).length) resto.opciones = opcionesErr; else delete resto.opciones;
                          return resto;
                        });
                      }}
                      placeholder={`Opción ${String.fromCharCode(65 + i)}`}
                      maxLength={MAX_OPCION}
                    />
                  </div>
                  <CampoError mensaje={errores.opciones?.[i]} />
                </div>
              ))}
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.8rem' }}>
                <button type="button" className="btn btn-ghost btn-sm" onClick={agregarOpcion}>+ Agregar opción</button>
                <button type="button" className="btn btn-ghost btn-sm" onClick={quitarOpcion}>- Quitar opción</button>
              </div>

              <div className="form-group">
                <label htmlFor="explicacion" className="input-label">Explicación *</label>
                <textarea id="explicacion" className="input" rows={2} value={form.explicacion} onChange={e => { setForm(f => ({ ...f, explicacion: e.target.value })); setErrores(er => ({ ...er, explicacion: null })); }} placeholder="Explicación de la respuesta correcta…" maxLength={MAX_EXPLICACION} />
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{form.explicacion.length}/{MAX_EXPLICACION}</span>
                <CampoError mensaje={errores.explicacion} />
              </div>

              {/* Contenido extra: para preguntas que necesitan mostrar una
                  tabla (ej: subnetting) o una simulación de consola.
                  Se guarda como HTML y se muestra tal cual en el cuestionario. */}
              <div className="form-group">
                <label htmlFor="extra" className="input-label">Contenido extra (tabla o consola, opcional)</label>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm"
                    onClick={() => setForm(f => ({ ...f, extra: (f.extra ? f.extra + '\n' : '') + PLANTILLA_TABLA }))}
                  >
                    + Insertar tabla
                  </button>
                  <button
                    type="button"
                    className="btn btn-ghost btn-sm"
                    onClick={() => setForm(f => ({ ...f, extra: (f.extra ? f.extra + '\n' : '') + PLANTILLA_CONSOLA }))}
                  >
                    + Insertar consola
                  </button>
                </div>
                <textarea
                id="extra"
                  className="input"
                  rows={4}
                  value={form.extra}
                  onChange={e => { setForm(f => ({ ...f, extra: e.target.value })); setErrores(er => ({ ...er, extra: null })); }}
                  placeholder="Usa los botones de arriba para insertar una plantilla, o pega tu propio HTML…"
                  maxLength={MAX_EXTRA}
                  style={{ fontFamily: 'monospace', fontSize: '0.8rem' }}
                />
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{form.extra.length}/{MAX_EXTRA}</span>
                <CampoError mensaje={errores.extra} />

                {/* Vista previa: así se va a ver dentro del cuestionario */}
                {form.extra && (
                  <div style={{ marginTop: '0.6rem' }}>
                    <span className="input-label" style={{ marginBottom: '0.3rem' }}>Vista previa</span>
                    <div className="quiz-extra" dangerouslySetInnerHTML={{ __html: form.extra }} />
                  </div>
                )}
              </div>

              {/* Origen de la pregunta: obligatorio elegir explícitamente,
                  para distinguir preguntas de una prueba/archivo real del
                  profesor vs. preguntas inventadas para estudiar. */}
              <div className="form-group">
                <label htmlFor="esDelProfesor" className="input-label">¿Es de una prueba o archivo del profesor? *</label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}>
                    <input id="esDelProfesor" type="radio" name="esDelProfesor" checked={form.esDelProfesor === true} onChange={() => { setForm(f => ({ ...f, esDelProfesor: true })); setErrores(er => ({ ...er, esDelProfesor: null })); }} />
                    Sí, viene de una prueba/archivo real
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem' }}>
                    <input id="esDelProfesorNo" type="radio" name="esDelProfesor" checked={form.esDelProfesor === false} onChange={() => { setForm(f => ({ ...f, esDelProfesor: false })); setErrores(er => ({ ...er, esDelProfesor: null })); }} />
                    No, es inventada para estudiar
                  </label>
                </div>
                <CampoError mensaje={errores.esDelProfesor} />
              </div>

              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <button className="btn btn-primary" onClick={guardarPregunta}>{editId ? 'Actualizar' : 'Crear pregunta'}</button>
                {editId && <button className="btn btn-ghost" onClick={() => { setForm(EMPTY_P); setEditId(null); setErrores({}); }}>Cancelar</button>}
              </div>
            </div>

            {/* Entra a la asignatura
                correspondiente desde la pestaña "Asignaturas". Así este
                formulario queda solo para crear, sin preguntas de fondo. */}
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', textAlign: 'center', padding: '0.5rem' }}>
              ¿Buscas revisar, editar o eliminar preguntas ya creadas? Entra a la pestaña{' '}
              <button type="button" className="btn btn-ghost btn-sm" onClick={() => setTab('asignaturas')}>Asignaturas</button>{' '}
              y selecciona la asignatura correspondiente.
            </p>
          </div>
        )}

        {/* TAB ASIGNATURAS */}
        {tab === 'asignaturas' && (
          <div>
            {asigDetalle ? (
              // ── DETALLE: preguntas de UNA asignatura, con editar/eliminar ──
              <div>
                <button className="btn btn-ghost btn-sm" style={{ marginBottom: '1rem' }} onClick={() => { setAsigDetalle(null); setFiltroAsig(''); }}>
                  ← Volver a Asignaturas
                </button>

                <div className="admin-list-header">
                  <h3>{asigDetalle.icono ? `${asigDetalle.icono} ` : ''}{asigDetalle.nombre} ({pregsFiltradas.length})</h3>
                  <div className="select-compact-wrap">
                    <span className="select-compact-label">Ordenar:</span>
                    <select className="select-compact" value={ordenPreguntas} onChange={e => setOrdenPreguntas(e.target.value)}>
                      <option value="fecha">Recientes</option>
                      <option value="nombre">Alfabético</option>
                    </select>
                  </div>
                </div>

                {pregsFiltradas.length === 0 ? (
                  <p style={{ color: 'var(--muted)', padding: '2rem', textAlign: 'center' }}>Esta asignatura todavía no tiene preguntas.</p>
                ) : (
                  <div className="preguntas-lista">
                    {pregsFiltradas.map(p => (
                      <div key={p._id || p.id} className="preg-item">
                        <div className="preg-info">
                          <span className={`badge badge-${p.dificultad}`}>{p.dificultad}</span>
                          {typeof p.esDelProfesor === 'boolean' && (
                            <span className="badge" style={{ background: p.esDelProfesor ? '#e8f0fe' : '#f4f0fa', color: p.esDelProfesor ? '#3a5aa0' : '#7a6a9a' }}>
                              {p.esDelProfesor ? '📄 Del profesor' : '✏️ Inventada'}
                            </span>
                          )}
                        </div>
                        {p.caso && <p style={{ fontSize: '0.78rem', color: 'var(--muted)', fontStyle: 'italic' }}>Caso: {p.caso.slice(0, 80)}{p.caso.length > 80 ? '…' : ''}</p>}
                        <p className="preg-texto">{p.pregunta}</p>
                        <div className="preg-actions">
                          <button className="btn btn-ghost btn-sm" onClick={() => { editarP(p); setTab('preguntas'); }}>Editar</button>
                          <button className="btn btn-danger btn-sm" onClick={() => borrarP(p._id || p.id)}>Eliminar</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // ── LISTA: todas las asignaturas (clic entra al detalle) ──
              <div>
                <div className="admin-form card">
                  <h3>Nueva asignatura</h3>
                  <div className="form-row">
                    <div className="form-group" style={{ flex: 3 }}>
                      <label className="input-label">Nombre *</label>
                      <input className="input" value={formA.nombre} onChange={e => setFormA(f => ({ ...f, nombre: e.target.value }))} placeholder="Ej: Base de Datos" maxLength={MAX_NOMBRE_ASIG} />
                    </div>
                    <div className="form-group" style={{ flex: 1 }}>
                      <label className="input-label">Color</label>
                      <input type="color" className="input" value={formA.color} onChange={e => setFormA(f => ({ ...f, color: e.target.value }))} style={{ height: '42px', padding: '2px' }} />
                    </div>
                    <div className="form-group" style={{ flex: 1 }}>
                      <label className="input-label">Ícono (emoji, opcional)</label>
                      <input className="input" value={formA.icono} onChange={e => setFormA(f => ({ ...f, icono: e.target.value.slice(0, 4) }))} placeholder="📚" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="input-label">Descripción</label>
                    <input className="input" value={formA.descripcion} onChange={e => setFormA(f => ({ ...f, descripcion: e.target.value }))} placeholder="Descripción breve…" maxLength={MAX_DESC_ASIG} />
                  </div>
                  <button className="btn btn-primary" onClick={guardarAsignatura}>Crear asignatura</button>
                </div>

                <div className="admin-list-header">
                  <h3>Asignaturas ({asignaturasOrdenadas.length})</h3>
                  <div className="select-compact-wrap">
                    <span className="select-compact-label">Ordenar:</span>
                    <select className="select-compact" value={ordenAsignaturas} onChange={e => setOrdenAsignaturas(e.target.value)}>
                      <option value="fecha">Recientes</option>
                      <option value="nombre">Alfabético</option>
                    </select>
                  </div>
                </div>

                <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '-0.5rem', marginBottom: '0.8rem' }}>
                  Haz clic en una asignatura para ver, editar o eliminar sus preguntas.
                </p>

                <div className="asig-lista">
                  {asignaturasOrdenadas.map(a => (
                    <div
                      key={a.key || a._id}
                      className="asig-item card"
                      style={{ cursor: 'pointer' }}
                      onClick={() => { setAsigDetalle(a); setFiltroAsig(a.key || a._id); }}
                    >
                      <div style={{ flex: 1 }}>
                        <p className="asig-nombre">{a.icono ? `${a.icono} ` : ''}{a.nombre}</p>
                        <p className="asig-desc">{a.descripcion}</p>
                      </div>
                      <button className="btn btn-danger btn-sm" onClick={(e) => { e.stopPropagation(); borrarA(a._id || a.key); }}>Eliminar</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      {tab === 'reportes' && (
          <div>
            {reportes.length === 0 ? (
              <p style={{ color: 'var(--muted)', padding: '2rem', textAlign: 'center' }}>No hay reportes pendientes.</p>
            ) : (
              <div className="preguntas-lista">
                {reportes.map(r => (
                  <div key={r.id} className="preg-item">
                    <div className="preg-info">
                      <span className="badge badge-medium">{r.motivo}</span>
                      <span className="preg-asig">{r.asignatura}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--muted)', marginLeft: 'auto' }}>
                        {new Date(r.fecha).toLocaleDateString('es-CL')}
                      </span>
                    </div>
                    <p className="preg-texto">{r.pregunta}</p>

                    {/* ACCIONES DEL REPORTE: ir a pregunta, eliminar pregunta, descartar reporte */}
                    <div className="preg-actions">
                      <button className="btn btn-ghost btn-sm" onClick={() => {
                        const preg = preguntas.find(p => p.pregunta === r.pregunta);
                        if (preg) { editarP(preg); setTab('preguntas'); }
                        else flash('Pregunta no encontrada en el banco.');
                      }}>
                        ✏️ Ir a la pregunta
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={async () => {
                        const preg = preguntas.find(p => p.pregunta === r.pregunta);
                        if (preg && confirm('¿Eliminar la pregunta reportada?')) {
                          await eliminarPregunta(preg._id || preg.id);
                          flash('Pregunta eliminada ✓');
                        }
                        await eliminarReporte(r.id);
                        cargar();
                      }}>
                        🗑️ Eliminar pregunta
                      </button>
                      <button className="btn btn-ghost btn-sm" onClick={async () => {
                        await eliminarReporte(r.id);
                        cargar();
                      }}>
                        Descartar reporte
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      {/* TAB ESTADO - Activar/desactivar cuestionarios */}
      {tab === 'estado' && (
        <div>
          <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
            Desactiva temporalmente un cuestionario para ocultarlo de la página de Cuestionarios,
            sin perder sus preguntas. Puedes reactivarlo cuando quieras.
          </p>
          <div className="asig-lista">
            {asignaturas.map(a => {
              const activa = !desactivadas.includes(a.key);
              return (
                <div key={a.key} className="asig-item card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1 }}>
                    <p className="asig-nombre">{a.icono ? `${a.icono} ` : ''}{a.nombre}</p>
                    <p className="asig-desc" style={{ color: activa ? 'var(--accent2, #00d4a0)' : 'var(--danger, #ff4f6a)' }}>
                      {activa ? '🟢 Activo (visible para estudiantes)' : '🔴 Desactivado (oculto)'}
                    </p>
                  </div>
                  <button
                    className={`btn btn-sm ${activa ? 'btn-danger' : 'btn-primary'}`}
                    onClick={() => manejarToggleAsignatura(a.key)}
                  >
                    {activa ? 'Desactivar' : 'Activar'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      </main>
    </>
  );
}