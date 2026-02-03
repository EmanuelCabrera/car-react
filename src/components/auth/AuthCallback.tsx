import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

// Función para extraer parámetros de la URL
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const AuthCallback = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    // Verificar si estamos en la raíz o en /auth/callback
    const isRoot = pathname === '/';
    
    // Obtener el token de la URL
    const token = query.get('token');
    const error = query.get('error');

    if (error) {
      console.error('Error de autenticación:', error);
      toast.error('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      navigate('/login');
      return;
    }

    if (token) {
      try {
        // Guardar el token en localStorage
        localStorage.setItem('authToken', token);
        
        // Limpiar la URL del token para mayor seguridad
        window.history.replaceState({}, document.title, '/' + (isRoot ? '' : 'auth/callback'));
        
        // Redirigir al dashboard o a la página de inicio
        const redirectTo = query.get('redirectTo') || '/';
        navigate(redirectTo);
        
        // Mostrar mensaje de éxito
        toast.success('¡Inicio de sesión exitoso!');
      } catch (err) {
        console.error('Error al procesar la autenticación:', err);
        toast.error('Error al procesar la autenticación');
        navigate('/login');
      }
    } else {
      // Si no hay token, redirigir al login
      navigate('/login');
    }
  }, [navigate, query, pathname]);

  return (
    <div className="auth-callback">
      <div className="loading-spinner">
        Procesando autenticación...
      </div>
    </div>
  );
};

export default AuthCallback;
