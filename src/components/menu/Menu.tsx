import { Link, useNavigate } from 'react-router-dom';
import { 
  MdHome, 
  MdDirectionsCar, 
  MdSportsMotorsports, 
  MdPerson, 
  MdExitToApp,
  MdFavorite,
  MdAddCircleOutline
} from 'react-icons/md';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import logo from '../../assets/logoBlanco.png';
import './Menu.css';

const Menu = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuActive(false);
  };

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'is-scrolled' : ''}`} role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={logo} alt="Logo" style={{ maxHeight: '2.75rem' }} />
        </Link>

        <button
          className={`navbar-burger ${isMenuActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded={isMenuActive}
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasic" className={`navbar-menu ${isMenuActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link to="/" className="navbar-item" onClick={closeMenu}>
            <span className="icon">
              <MdHome />
            </span>
            <span>Inicio</span>
          </Link>

          <Link to="/vehiculos" className="navbar-item" onClick={closeMenu}>
            <span className="icon">
              <MdDirectionsCar />
            </span>
            <span>Vehículos</span>
          </Link>

          {isAuthenticated && (
            <Link to="/mis-vehiculos" className="navbar-item" onClick={closeMenu}>
              <span className="icon">
                <MdSportsMotorsports />
              </span>
              <span>Mis Vehículos</span>
            </Link>
          )}
        </div>

        <div className="navbar-end">
          {isAuthenticated ? (
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link">
                  {user?.picture ? (
                    <figure className="image is-24x24 mr-2" style={{ display: 'inline-block' }}>
                      <img
                        className="is-rounded"
                        src={user.picture}
                        alt={user.name}
                        style={{ width: '24px', height: '24px', objectFit: 'cover' }}
                      />
                    </figure>
                  ) : (
                    <span className="icon">
                      <MdPerson />
                    </span>
                  )}
                  <span className="ml-2">{user?.name || 'Usuario'}</span>
                </div>

                <div className="navbar-dropdown is-right">
                  <Link to="/perfil" className="navbar-item" onClick={closeMenu}>
                    <span className="icon-text">
                      <span className="icon">
                        <MdPerson />
                      </span>
                      <span>Mi Perfil</span>
                    </span>
                  </Link>
                  <Link to="/favoritos" className="navbar-item" onClick={closeMenu}>
                    <span className="icon-text">
                      <span className="icon">
                        <MdFavorite />
                      </span>
                      <span>Favoritos</span>
                    </span>
                  </Link>
                  <Link to="/publicar" className="navbar-item" onClick={closeMenu}>
                    <span className="icon-text">
                      <span className="icon">
                        <MdAddCircleOutline />
                      </span>
                      <span>Publicar vehículo</span>
                    </span>
                  </Link>
                  <hr className="navbar-divider" />
                  <a className="navbar-item" onClick={handleLogout}>
                    <span className="icon-text has-text-danger">
                      <span className="icon">
                        <MdExitToApp />
                      </span>
                      <span>Cerrar sesión</span>
                    </span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/register" className="button is-primary" onClick={closeMenu}>
                    <strong>Registrarse</strong>
                  </Link>
                  <Link to="/login" className="button is-light" onClick={closeMenu}>
                    Iniciar sesión
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    );
  };
  
  export default Menu;