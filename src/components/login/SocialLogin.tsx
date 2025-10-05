import { FaGoogle, FaFacebook } from 'react-icons/fa';
import './Login.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const SocialLogin = () => {
  const handleGoogleLogin = () => {
    // Redirigir al endpoint de autenticación de Google en tu backend
    const redirectTo = encodeURIComponent(window.location.origin);
    window.location.href = `${API_URL}/auth/google?redirect_uri=${redirectTo}`;
  };

  const handleFacebookLogin = () => {
    // Redirigir al endpoint de autenticación de Facebook
    const redirectTo = encodeURIComponent(window.location.origin);
    window.location.href = `${API_URL}/auth/facebook?redirect_uri=${redirectTo}`;
  };

  return (
    <div className="social-login">
      <div className="divider">
        <span>O inicia sesión con</span>
      </div>

      <div className="social-buttons">
        <button 
          onClick={handleGoogleLogin}
          className="social-button google"
        >
          <FaGoogle className="social-icon" />
          Continuar con Google
        </button>

        <button 
          onClick={handleFacebookLogin}
          className="social-button facebook"
        >
          <FaFacebook className="social-icon" />
          Continuar con Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
