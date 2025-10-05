import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaArrowRight } from 'react-icons/fa';
import SocialLogin from './SocialLogin';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validación básica
    if (!email || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }
    // Aquí iría la lógica de autenticación
    console.log('Iniciando sesión con:', { email, password });
    // Redirigir al dashboard después del login exitoso
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h2>Iniciar Sesión</h2>
          <p>Ingresa tus credenciales para acceder a tu cuenta</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <div className="input-group">
              <span className="input-icon"><FaUser /></span>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-group">
            <div className="input-group">
              <span className="input-icon"><FaLock /></span>
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Recordarme
            </label>
            <Link to="/forgot-password" className="forgot-password">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
          
          <button type="submit" className="login-button">
            Ingresar <FaArrowRight className="button-icon" />
          </button>
          
          <div className="register-link">
            ¿No tienes una cuenta?{' '}
            <Link to="/register">Regístrate aquí</Link>
          </div>
          
          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default Login;
