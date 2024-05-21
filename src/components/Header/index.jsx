import '../../styles/Header/Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-link border-underline">
                /Accueil
            </Link>
            <Link to="/portfolio" className="navbar-link border-underline">
                /Portfolio
            </Link>
            <Link to="/contact" className="navbar-link border-underline">
                /Contact
            </Link>
        </div>
    )
}

export default Header
