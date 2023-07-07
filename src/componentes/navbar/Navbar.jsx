import "./navbar.css"

export const Navbar = (pedo) =>{
    return (
        <nav className="navbar">
            <a className="logo" href="#"><h1>Lesly Motors</h1></a>
            <ul className="menu">
                <li><a className="menu-link" href="#">Inicio</a></li>
                <li><a className="menu-link" href="#">Nosotros</a></li>
                <li><a className="menu-link" href="#">Productos</a></li>
                <li><a className="menu-link" href="#">Contacto</a></li>
            </ul>
        </nav>
    )
}