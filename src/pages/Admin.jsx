// ADMIN Panel de administración para gestionar preguntas, asignaturas y reportes

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
// Importa las funciones de API para CRUD de preguntas y asignaturas
import {
  getAsignaturas, getPreguntas,
  crearPregunta, editarPregunta, eliminarPregunta,
  crearAsignatura, eliminarAsignatura,
  LISTA_ASIGNATURAS_ADMIN, getAsignaturasDesactivadas, toggleAsignaturaActiva,
  getReportes, eliminarReporte
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
const EMPTY_P = { pregunta: '', opciones: ['', '', '', ''], respuestaCorrecta: 0, dificultad: 'easy', unidad: '', asignaturaId: '', explicacion: '' };
const EMPTY_A = { nombre: '', color: '#7c6dfa', descripcion: '' };

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
  const [reportes, setReportes] = useState([]);       // Lista de reportes de errores
  const [desactivadas, setDesactivadas] = useState([]); // Keys de cuestionarios desactivados

  // FUNCIONES AUXILIARES
  // Muestra un mensaje temporal (2.5 segundos)
  function flash(txt) { setMsg(txt); setTimeout(() => setMsg(''), 2500); }

  // CARGA DE DATOS Obtiene preguntas, asignaturas y reportes
  function cargar() {
  return Promise.all([
    getPreguntas(),
    getAsignaturas(),
    getReportes() // ahora viene de Local Storage, ya no depende de json-server
  ])
    .then(([p, a, r]) => { setPreguntas(p); setAsignaturas(a); setReportes(r); })
    .finally(() => setLoading(false));
}

  // ACTIVAR/DESACTIVAR Cambia el estado de una asignatura y refresca la lista
  function manejarToggleAsignatura(key) {
    toggleAsignaturaActiva(key);
    setDesactivadas(getAsignaturasDesactivadas());
  }


  // EFECTO INICIAL Carga los datos al montar el componente
  useEffect(() => { cargar(); setDesactivadas(getAsignaturasDesactivadas()); }, []);

  // CRUD DE PREGUNTAS Guardar, editar y eliminar
  async function guardarPregunta() {
    // Validaciones de pregunta y asignatura obligatorias, opciones completas
    const preguntaLimpia = form.pregunta.trim();
    if (!preguntaLimpia || !form.asignaturaId) return flash('Completa pregunta y asignatura.');
    if (form.opciones.some(o => !o.trim())) return flash('Completa todas las opciones.');
    // Validación de longitud máxima (evita textos desproporcionados)
    if (preguntaLimpia.length > MAX_PREGUNTA) return flash(`La pregunta no puede superar los ${MAX_PREGUNTA} caracteres.`);
    if (form.opciones.some(o => o.length > MAX_OPCION)) return flash(`Cada opción no puede superar los ${MAX_OPCION} caracteres.`);
    if (form.explicacion.length > MAX_EXPLICACION) return flash(`La explicación no puede superar los ${MAX_EXPLICACION} caracteres.`);
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
      } else {
        await crearPregunta(payload);
        flash('Pregunta creada ✓');
      }
      setForm(EMPTY_P);
      setEditId(null);
      cargar();
    } catch (error) {
      flash('Error al guardar la pregunta');
    }
  }

  // Carga los datos de una pregunta en el formulario para editarla
  function editarP(p) {
    setForm({
      pregunta: p.pregunta,
      opciones: p.opciones,
      respuestaCorrecta: p.respuestaCorrecta,
      dificultad: p.dificultad,
      unidad: p.unidad || '',
      asignaturaId: p.asignaturaId,
      explicacion: p.explicacion || ''
    });
    setEditId(p._id || p.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Elimina una pregunta previa confirmación
  async function borrarP(id) {
    if (!confirm('¿Eliminar esta pregunta?')) return;
    await eliminarPregunta(id);
    flash('Eliminada ✓');
    cargar();
  }

  // CRUD DE ASIGNATURAS Guardar y eliminar
  async function guardarAsignatura() {
    const nombreLimpio = formA.nombre.trim();
    if (!nombreLimpio) return flash('Escribe el nombre.');
    if (nombreLimpio.length > MAX_NOMBRE_ASIG) return flash(`El nombre no puede superar los ${MAX_NOMBRE_ASIG} caracteres.`);
    if (formA.descripcion.length > MAX_DESC_ASIG) return flash(`La descripción no puede superar los ${MAX_DESC_ASIG} caracteres.`);
    const payload = { ...formA, nombre: nombreLimpio, key: nombreLimpio.toLowerCase().replace(/\s+/g, '_') };
    await crearAsignatura(payload);
    flash('Asignatura creada ✓');
    setFormA(EMPTY_A);
    cargar();
  }

  // Elimina una asignatura previa confirmación
  async function borrarA(id) {
    if (!confirm('¿Eliminar esta asignatura?')) return;
    await eliminarAsignatura(id);
    flash('Eliminada ✓');
    cargar();
  }

  // FILTRADO Filtra preguntas por asignatura seleccionada
  const pregsFiltradas = filtroAsig
    ? preguntas.filter(p => p.asignaturaId === filtroAsig || p.asignatura === filtroAsig)
    : preguntas;

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
                  <label className="input-label">Asignatura</label>
                  <select className="input" value={form.asignaturaId} onChange={e => setForm(f => ({ ...f, asignaturaId: e.target.value }))}>
                    <option value="">Selecciona</option>
                    {asignaturas.map(a => (
                      <option key={a.key || a._id} value={a.key || a._id}>{a.nombre}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="input-label">Dificultad</label>
                  <select className="input" value={form.dificultad} onChange={e => setForm(f => ({ ...f, dificultad: e.target.value }))}>
                    {DIFFS.map(d => <option key={d} value={d}>{d}</option>)}
                  </select>
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="input-label">Unidad</label>
                  <input className="input" value={form.unidad} onChange={e => setForm(f => ({ ...f, unidad: e.target.value }))} placeholder="Ej: Unidad 1" maxLength={MAX_UNIDAD} />
                </div>
              </div>

              <div className="form-group">
                <label className="input-label">Pregunta</label>
                <textarea className="input" rows={2} value={form.pregunta} onChange={e => setForm(f => ({ ...f, pregunta: e.target.value }))} placeholder="Escribe la pregunta…" maxLength={MAX_PREGUNTA} />
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{form.pregunta.length}/{MAX_PREGUNTA}</span>
              </div>

              {form.opciones.map((op, i) => (
                <div className="form-group" key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <input type="radio" name="correcta" checked={form.respuestaCorrecta === i} onChange={() => setForm(f => ({ ...f, respuestaCorrecta: i }))} />
                  <input className="input" value={op} onChange={e => { const opts = [...form.opciones]; opts[i] = e.target.value; setForm(f => ({ ...f, opciones: opts })); }} placeholder={`Opción ${String.fromCharCode(65 + i)}`} maxLength={MAX_OPCION} />
                </div>
              ))}

              <div className="form-group">
                <label className="input-label">Explicación</label>
                <textarea className="input" rows={2} value={form.explicacion} onChange={e => setForm(f => ({ ...f, explicacion: e.target.value }))} placeholder="Explicación de la respuesta correcta…" maxLength={MAX_EXPLICACION} />
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{form.explicacion.length}/{MAX_EXPLICACION}</span>
              </div>

              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <button className="btn btn-primary" onClick={guardarPregunta}>{editId ? 'Actualizar' : 'Crear pregunta'}</button>
                {editId && <button className="btn btn-ghost" onClick={() => { setForm(EMPTY_P); setEditId(null); }}>Cancelar</button>}
              </div>
            </div>

            {/* Listado de preguntas */}
            <div className="admin-list-header">
              <h3>Banco ({pregsFiltradas.length})</h3>
              <select className="input" style={{ width: 'auto' }} value={filtroAsig} onChange={e => setFiltroAsig(e.target.value)}>
                <option value="">Todas</option>
                {asignaturas.map(a => (
                  <option key={a.key || a._id} value={a.key || a._id}>{a.nombre}</option>
                ))}
              </select>
            </div>

            <div className="preguntas-lista">
              {pregsFiltradas.map(p => (
                <div key={p._id || p.id} className="preg-item">
                  <div className="preg-info">
                    <span className={`badge badge-${p.dificultad}`}>{p.dificultad}</span>
                    <span className="preg-asig">
                      {asignaturas.find(a => a.key === p.asignaturaId || a._id === p.asignaturaId)?.nombre ?? p.asignaturaId}
                    </span>
                  </div>
                  <p className="preg-texto">{p.pregunta}</p>
                  <div className="preg-actions">
                    <button className="btn btn-ghost btn-sm" onClick={() => editarP(p)}>Editar</button>
                    <button className="btn btn-danger btn-sm" onClick={() => borrarP(p._id || p.id)}>Eliminar</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB ASIGNATURAS */}
        {tab === 'asignaturas' && (
          <div>
            <div className="admin-form card">
              <h3>Nueva asignatura</h3>
              <div className="form-row">
                <div className="form-group" style={{ flex: 3 }}>
                  <label className="input-label">Nombre</label>
                  <input className="input" value={formA.nombre} onChange={e => setFormA(f => ({ ...f, nombre: e.target.value }))} placeholder="Ej: Base de Datos" maxLength={MAX_NOMBRE_ASIG} />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="input-label">Color</label>
                  <input type="color" className="input" value={formA.color} onChange={e => setFormA(f => ({ ...f, color: e.target.value }))} style={{ height: '42px', padding: '2px' }} />
                </div>
              </div>
              <div className="form-group">
                <label className="input-label">Descripción</label>
                <input className="input" value={formA.descripcion} onChange={e => setFormA(f => ({ ...f, descripcion: e.target.value }))} placeholder="Descripción breve…" maxLength={MAX_DESC_ASIG} />
              </div>
              <button className="btn btn-primary" onClick={guardarAsignatura}>Crear asignatura</button>
            </div>

            <div className="asig-lista">
              {asignaturas.map(a => (
                <div key={a.key || a._id} className="asig-item card">
                  <div style={{ flex: 1 }}>
                    <p className="asig-nombre">{a.nombre}</p>
                    <p className="asig-desc">{a.descripcion}</p>
                  </div>
                  <button className="btn btn-danger btn-sm" onClick={() => borrarA(a._id || a.key)}>Eliminar</button>
                </div>
              ))}
            </div>
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
            {LISTA_ASIGNATURAS_ADMIN.map(a => {
              const activa = !desactivadas.includes(a.key);
              return (
                <div key={a.key} className="asig-item card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1 }}>
                    <p className="asig-nombre">{a.nombre}</p>
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