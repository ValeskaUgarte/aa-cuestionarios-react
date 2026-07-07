//Import de los componentes de react y 
// el hook  personalizado de autenticacion para  acceder al usuario y fuinciones de auth

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

//Navbar barra de navegación con autenticación y rutas según rol
export default function Navbar() {
  const { pathname } = useLocation();        // Ruta actual para enlaces activos
  const { usuario, logout } = useAuth();     // Datos del usuario y logout
  const navigate = useNavigate();            // Redirigir después de logout

   // Cierra sesión y va al inicio
  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <nav className="navbar">
      {/* Logo de la app - siempre visible, link al inicio */}
      <Link to="/" className="navbar-brand">
        <span></span>
      </Link>

      <div className="navbar-links">
        {/* Enlaces públicos - los ve cualquier usuario */}
        <Link to="/" className={pathname === '/' ? 'active' : ''}>Inicio</Link>
        <Link to="/cuestionarios" className={pathname === '/cuestionarios' ? 'active' : ''}>Cuestionarios</Link>

        {/* Admin - solo visible si el usuario es administrador */}
        {usuario?.rol === 'admin' && (
          <Link to="/admin" className={pathname === '/admin' ? 'active' : ''}>Admin</Link>
        )}

        {/* Panel - solo visible si es colaborador o moderador */}
        {(usuario?.rol === 'colaborador' || usuario?.rol === 'moderador') && (
          <Link to="/colaborador" className={pathname === '/colaborador' ? 'active' : ''}>Panel</Link>
        )}
        
        {/* Si el usuario está logueado: muestra su nombre y botón Salir */}
        {usuario ? (
          <>
            <Link to="/perfil" className={pathname === '/perfil' ? 'active' : ''}>👤 {usuario.nombre}</Link>
            <button className="btn btn-sm btn-ghost" onClick={handleLogout}>Salir</button>
          </>
        ) : (
          /* Si no está logueado: muestra Iniciar sesión y Registrarse */
          <>
            <Link to="/login" className={pathname === '/login' ? 'active' : ''}>Iniciar sesión</Link>
            <Link to="/registro" className={`${pathname === '/registro' ? 'active' : ''} btn btn-sm btn-primary`}>Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
}