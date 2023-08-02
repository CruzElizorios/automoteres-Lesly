import { Link } from "react-router-dom"
import "./navbar.css"

export const Navbar = (pedo) =>{
    return (
        <nav className="navbar">
            <Link className="logo" to="/"><h1>Lesly Motors</h1></Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link></li>
                <li><Link className="menu-link" to="/detalles">Nosotros</Link></li>
                <li><Link className="menu-link" to="#">Productos</Link></li>
                <li><Link className="menu-link" to="#">Contacto</Link></li>
            </ul>
        </nav>
    )
}