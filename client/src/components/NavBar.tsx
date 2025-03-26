import '../styles/common.css'
import '../styles/NavBar.css'

const NavBar = () => {
    
    return (
        <nav className="outer"><nav className="inner shadow">
            <nav className="navbar-links">
                <a className="navbar-links" href="/#about">About</a>
                <a className="navbar-links" href="/#experience">Experience</a>
                <a className="navbar-links" href="/#projects">Projects</a>
                <a className="navbar-links" href="/#contact">Contact</a>
            </nav>
        </nav></nav>
    );
}

export default NavBar