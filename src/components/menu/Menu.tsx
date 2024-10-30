import { Link } from "react-router-dom";
import './Menu.css';
import logo from '/Logo Motorgo Blanco.png';
import { MdHome, MdDirectionsCar, MdPerson   } from "react-icons/md";

export const Menu = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation" >
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src={logo} width="200" height="160"/>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    {/* <Link to="/" className="navbar-item">Home</Link> */}
                    {/* <Link to="/cars" className="navbar-item">Cars</Link> */}
                    {/* <Link to="/users" className="navbar-item">Users</Link> */}
                    <a href="" className="navbar-item"><MdHome /> Home</a>
                    <a href="" className="navbar-item"><MdDirectionsCar/>Cars</a>
                    <a href="" className="navbar-item"><MdPerson/> Users</a>
                </div>
            </div>
        </nav>
    )
}

export default Menu;