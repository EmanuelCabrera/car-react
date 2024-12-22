import { Link } from 'react-router-dom';
import { MdHome, MdDirectionsCar, MdSportsMotorsports } from 'react-icons/md';
import logo from '../../assets/logoBlanco.png';
import './Menu.css';
export const Menu = () => {
   return (
       <nav className="navbar" role="navigation" aria-label="main navigation">
           <div className="navbar-brand">
               <Link to="/" className="navbar-item">
                   <img src={logo} alt="Logo" />
                   {/* <strong style={{color: 'white'}}>Motorgo</strong> */}
               </Link>
                <a role="button" 
                  className="navbar-burger"
                  aria-label="menu" 
                  aria-expanded="false">
                   <span aria-hidden="true"></span>
                   <span aria-hidden="true"></span>
                   <span aria-hidden="true"></span>
               </a>
           </div>
            <div className="navbar-menu">
               <div className="navbar-start">
                   <Link to="/" className="navbar-item">
                       <MdHome />
                       <span>Inicio</span>
                   </Link>
                   <Link to="/cars" className="navbar-item">
                       <MdDirectionsCar />
                       <span>Autos</span>
                   </Link>
                   <Link to="/motorcicles" className="navbar-item">
                       <MdSportsMotorsports />
                       <span>Motos</span>
                   </Link>
               </div>
                <div className="navbar-end">
                   <div className="navbar-item">
                       <div className="buttons">
                           <a className="button is-primary">
                               <strong>Sign up</strong>
                           </a>
                           <a className="button is-light">
                               Log in
                           </a>
                       </div>
                   </div>
               </div>
           </div>
       </nav>
   );
};
export default Menu;