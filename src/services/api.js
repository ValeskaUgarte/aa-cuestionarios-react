// src/services/api.js
import preguntas_seguridad_examen from '../data/preguntas/seguridad_examen.js';
import preguntas_seguridad_informacion from '../data/preguntas/seguridad_informacion.js';
import preguntas_sistemas_operativos from '../data/preguntas/sistemas_operativos.js';
import preguntas_frontend from '../data/preguntas/frontend.js'
import preguntas_bd_estructurados from '../data/preguntas/bd_estructurados.js';
import preguntas_linux from '../data/preguntas/linux.js';
import preguntas_hardware_software from '../data/preguntas/hardware_software.js';
import preguntas_ingles_basico from '../data/preguntas/ingles_basico.js';
import preguntas_ingles_intermedio from '../data/preguntas/ingles_intermedio.js';
import preguntas_ingles_avanzado from '../data/preguntas/ingles_avanzado.js';
import preguntas_prog_html from '../data/preguntas/prog_html.js';
import preguntas_japones from '../data/preguntas/japones.js';
import preguntas_chino from '../data/preguntas/chino.js';
import preguntas_coreano from '../data/preguntas/coreano.js';
import preguntas_metodologia_agil from '../data/preguntas/metodologia.agil.js';
import preguntas_algebra from '../data/preguntas/algebra.js';


// Agrega aquí los demás imports según los archivos que tengas en /data/preguntas/

export const KEYS_IDIOMAS = [
  'japones', 'coreano', 'chino', 
  'ingles_inicial', 'ingles_intermedio', 'ingles_avanzado'
];

const ASIGNATURAS = [
  {
    key: 'seguridad_informacion',
    nombre: 'Seguridad de la Información',
    meta: 'Prueba 1 · Solo las 32 primeras preguntas son de la prueba',
    badge: 'Material - 140 Preguntas',
    preguntas: preguntas_seguridad_informacion,
  },
  {
    key: 'sistemas_operativos',
    nombre: 'Sistemas Operativos',
    meta: 'Prueba 1 · Subnetting, Las primeras 38 preguntas son los cuestionarios del profesor',
    badge: 'Material de Clases - 131 Preguntas',
    preguntas: preguntas_sistemas_operativos,
  },
  {
    key: 'seguridad-examen',
    nombre: 'Fundamentos de Seguridad de la Información',
    meta: 'Cuestionario Examen Final otorgado por el profesor',
    badge: 'Cuestionario Examen - 55 Preguntas',
    preguntas: preguntas_seguridad_examen,
  },

   {
    key: 'linux',
    nombre: 'Linux',
    meta: 'Estudio de comandos en Lix RedHat',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_linux,
  },
  
  { 
    key: 'algebra', 
    nombre: 'Resolución de Problemas de Álgebra', 
    meta: 'Pendiente: agregar preguntas', 
    badge: 'Material - Aun sin preguntas', 
    preguntas: preguntas_algebra, 
  },
  { key: 'funciones_matrices', nombre: 'Funciones y Matrices', icon: '📐', meta: 'Pendiente: agregar preguntas', badge: 'Material - Aun sin preguntas', preguntas: [] },
  { 
    key: 'metodologia_agil', 
    nombre: 'Metodología de Desarrollo Ágil', 
    meta: 'Pendiente: agregar preguntas', 
    badge: 'Material - Aun en desarrollo', 
    preguntas: preguntas_metodologia_agil, 
  },
  { 
    key: 'frontend', 
    nombre: 'Programación Front End', 
    meta: 'Pendiente: agregar preguntas', 
    badge: 'Material - Aun sin preguntas', 
    preguntas: preguntas_frontend
  },

  { key: 'backend', nombre: 'Programación Back End', icon: '⚙️', meta: 'Pendiente: agregar preguntas', badge: 'Material - Aun sin preguntas', preguntas: [] },
  
  { key: 'bd_estructurados', 
    nombre: 'Base de Datos Estructuradas', 
    meta: 'Pendiente: agregar preguntas', 
    badge: 'Material - En desarrollo', 
    preguntas: preguntas_bd_estructurados, 
  },

  { key: 'bd_no_estructurados', nombre: 'Base de Datos No Estructurados', icon: '🍃', meta: 'Pendiente: agregar preguntas', badge: 'Material - Aun sin preguntas', preguntas: [] },
   
  {
    key: 'hardware_software',
    nombre: 'Fundamentos de Hardware y Software',
    meta: 'Estudio',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_hardware_software,
  },
  {
    key: 'prog_html',
    nombre: 'Programación HTML',
    meta: 'Estudio',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_prog_html,
  },
  {
    key: 'ingles_basico',
    nombre: 'Ingles Básico',
    meta: 'Estudio de Ingles',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_ingles_basico,
  },
  {
    key: 'ingles_intermedio',
    nombre: 'Ingles Intermedio',
    meta: 'Estudio de Inglés',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_ingles_intermedio,
  },
  {
    key: 'ingles_avanzado',
    nombre: 'Inglés Avanzado',
    meta: 'Estudio de Inglés',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_ingles_avanzado,
  },
  {
    key: 'japones',
    nombre: 'Japones',
    meta: 'Estudio de Hiragana Katakana Kanji',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_japones,
  },
  {
    key: 'chino',
    nombre: 'Chino',
    meta: 'Estudio de Chino mandarín',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_chino,
  },
  {
    key: 'coreano',
    nombre: 'Coreano',
    meta: 'Estudio ',
    badge: 'Material aun en desarrollo',
    preguntas: preguntas_coreano,
  },
];

// Normaliza el formato {q, opts, ans, exp} → {pregunta, opciones, respuestaCorrecta, explicacion}
function normalizar(p) {
  return {
    pregunta: p.q ?? p.pregunta,
    opciones: p.opts ?? p.opciones,
    respuestaCorrecta: p.ans ?? p.respuestaCorrecta,
    explicacion: p.exp ?? p.explicacion,
    dificultad: p.diff ?? p.dificultad ?? 'medium',
    unidad: p.unit ?? p.unidad ?? '',
    profe: p.profe ?? false,
    case: p.case ?? '',
    extra: p.extra ?? '',
    intermedio: p.intermedio ?? false,
    avanzado: p.avanzado ?? false,
    experto: p.experto ?? false,
  };
}

// ── LOCALSTORAGE PREGUNTAS ──
const LS_KEY = 'preguntas_admin';

function getPreguntasLS() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]'); } 
  catch { return []; }
}

function setPreguntasLS(preguntas) {
  localStorage.setItem(LS_KEY, JSON.stringify(preguntas));
}

export const crearPregunta = (data) => {
  const preguntas = getPreguntasLS();
  const nueva = { ...data, _id: Date.now().toString() };
  setPreguntasLS([...preguntas, nueva]);
  return Promise.resolve(nueva);
};

export const editarPregunta = (id, data) => {
  const preguntas = getPreguntasLS();
  const actualizadas = preguntas.map(p => p._id === id ? { ...data, _id: id } : p);
  setPreguntasLS(actualizadas);
  return Promise.resolve({ ...data, _id: id });
};

export const eliminarPregunta = (id) => {
  const preguntas = getPreguntasLS();
  setPreguntasLS(preguntas.filter(p => p._id !== id));
  return Promise.resolve({ deleted: id });
};

export const getPreguntas = () => {
  const delAdmin = getPreguntasLS();
  const delArchivo = ASIGNATURAS.flatMap(a =>
  a.preguntas.map((p, index) => ({
    ...normalizar(p),
    _id: `archivo_${a.key}_${index}`, // ← ID estable
    asignatura: a.key,
    asignaturaId: a.key,
  }))
);
  return Promise.resolve([...delArchivo, ...delAdmin]);
};

// ── LOCALSTORAGE ASIGNATURAS ──
const LS_KEY_ASIG = 'asignaturas_admin';

function getAsignaturasLS() {
  try { return JSON.parse(localStorage.getItem(LS_KEY_ASIG) || '[]'); }
  catch { return []; }
}

function setAsignaturasLS(asigs) {
  localStorage.setItem(LS_KEY_ASIG, JSON.stringify(asigs));
}

export const crearAsignatura = (data) => {
  const asigs = getAsignaturasLS();
  const nueva = { ...data, _id: Date.now().toString() };
  setAsignaturasLS([...asigs, nueva]);
  return Promise.resolve(nueva);
};

export const editarAsignatura = (id, data) => {
  const asigs = getAsignaturasLS();
  const actualizadas = asigs.map(a => a._id === id ? { ...data, _id: id } : a);
  setAsignaturasLS(actualizadas);
  return Promise.resolve({ ...data, _id: id });
};

export const eliminarAsignatura = (id) => {
  const asigs = getAsignaturasLS();
  setAsignaturasLS(asigs.filter(a => a._id !== id));
  return Promise.resolve({ deleted: id });
};

// ⭐ UNICA DECLARACIÓN DE getAsignaturas - eliminé la duplicada
export function getAsignaturas() {
  return fetch('http://localhost:3001/asignaturas')
    .then(r => r.json())
    .catch(() => {
      const delAdmin = getAsignaturasLS();
      const delArchivo = ASIGNATURAS.map(({ preguntas, ...rest }) => ({
        ...rest,
        totalPreguntas: preguntas.length,
      }));
      return [...delArchivo, ...delAdmin];
    });
}

// ⭐ UNICA DECLARACIÓN DE getPreguntasPorAsignatura
export function getPreguntasPorAsignatura(key) {
  const asig = ASIGNATURAS.find(a => a.key === key);
  const delArchivo = asig ? asig.preguntas.map(normalizar) : [];
  const delAdmin = getPreguntasLS()
    .filter(p => p.asignatura === key || p.asignaturaId === key)
    .map(p => ({
      pregunta: p.pregunta,
      opciones: p.opciones,
      respuestaCorrecta: p.respuestaCorrecta,
      explicacion: p.explicacion ?? '',
      dificultad: p.dificultad ?? 'medium',
      unidad: p.unidad ?? '',
      profe: p.profe ?? false,
      case: '',
      extra: '',
      intermedio: false,
      avanzado: false,
      experto: false,
    }));
  return Promise.resolve([...delArchivo, ...delAdmin]);
}

export const getPreguntasByKey = (key) => getPreguntasPorAsignatura(key);