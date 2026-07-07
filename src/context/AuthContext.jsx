// CONTEXTO DE AUTENTICACIÓN - Maneja usuarios, login, registro y datos


import { createContext, useContext, useState, useEffect } from 'react';

// Crea el contexto para compartir datos de autenticación en toda la app
const AuthContext = createContext(null);

// AUTH PROVIDER - Componente que envuelve la app y provee los datos
export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  // EFECTO INICIAL - Verifica si hay sesión guardada en localStorage
  useEffect(() => {
  const guardado = localStorage.getItem('usuario_actual');
    if (guardado) setUsuario(JSON.parse(guardado));
    setLoading(false); // ← AGREGAR ESTO
  }, []);

   // LOGIN - Inicia sesión (admin fijo o usuario registrado)
  function login(email, password) {
  // Admin fijo — no está en localStorage
  if (email === 'admin@appestudios.cl' && password === 'admin2026') {
    const adminUser = {
      id: 'admin',
      nombre: 'Administrador',
      email: 'admin@appestudios.cl',
      rol: 'admin',
      favoritas: [],
      historial: [],
    };
    localStorage.setItem('usuario_actual', JSON.stringify(adminUser));
    setUsuario(adminUser);
    return { ok: true };
  }

  // Login normal: busca en la lista de usuarios registrados
  const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
  const encontrado = usuarios.find(u => u.email === email && u.password === password);
  if (!encontrado) return { ok: false, error: 'Email o contraseña incorrectos' };
  localStorage.setItem('usuario_actual', JSON.stringify(encontrado));
  setUsuario(encontrado);
  return { ok: true };
}

  // REGISTRO - Crea un nuevo usuario y lo loguea automáticamente
  function registro(nombre, email, password, rol = 'estudiante') {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    // Verifica si el email ya está registrado
    if (usuarios.find(u => u.email === email)) 
      return { ok: false, error: 'Este email ya está registrado' };
    const nuevo = {
      id: Date.now().toString(),
      nombre,
      email,
      password,
      rol,
      favoritas: [],
      historial: [],
      fechaRegistro: new Date().toISOString(),
    };
    usuarios.push(nuevo);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('usuario_actual', JSON.stringify(nuevo));
    setUsuario(nuevo);
    return { ok: true };
  }

  // LOGOUT - Cierra sesión y elimina los datos del localStorage
  function logout() {
    localStorage.removeItem('usuario_actual');
    setUsuario(null);
  }

  // ACTUALIZAR USUARIO - Modifica los datos del usuario logueado
  function actualizarUsuario(datos) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const idx = usuarios.findIndex(u => u.id === usuario.id);
    if (idx === -1) return;
    const actualizado = { ...usuarios[idx], ...datos };
    usuarios[idx] = actualizado;
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('usuario_actual', JSON.stringify(actualizado));
    setUsuario(actualizado);
  }

  // FAVORITOS - Agrega o quita un elemento de la lista de favoritos
  function toggleFavorita(key) {
    const favoritas = usuario?.favoritas || [];
    const nuevas = favoritas.includes(key)
      ? favoritas.filter(k => k !== key)
      : [...favoritas, key];

    // Actualizamos el objeto local del usuario
    const usuarioActualizado = { ...usuario, favoritas: nuevas };
    
    // Guardamos en localStorage
    localStorage.setItem('usuario_actual', JSON.stringify(usuarioActualizado));
    
    // Forzamos el cambio de estado para que React redibuje el botón
    setUsuario(usuarioActualizado);
  }

  // GUARDAR RESULTADO - Agrega un resultado al historial del usuario
  function guardarResultado(resultado) {
    const historial = usuario?.historial || [];
    actualizarUsuario({ historial: [...historial, resultado] });
  }

  // PROVIDER - Expone todos los datos y funciones a los hijos
  return (
    <AuthContext.Provider value={{ 
      usuario, 
      loading, 
      login, 
      logout, 
      registro, 
      toggleFavorita, 
      guardarResultado, 
      actualizarUsuario 
    }}>
      {children}
    </AuthContext.Provider>
  );
}
// HOOK PERSONALIZADO - Para usar el contexto fácilmente en cualquier componente

export function useAuth() {
  return useContext(AuthContext);
}