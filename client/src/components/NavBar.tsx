import '../styles/NavBar.css'

const NavBar = () => {
    
    return (
        <nav className="navbar">
            <nav className="navbar-title">
                Michael Jagiello
            </nav>
            <nav className="navbar-links">
                <a className="navbar-links" href="/projects">About</a>
                <a className="navbar-links" href="/projects">Projects</a>
                <a className="navbar-links" href="/projects">Contact</a>
            </nav>
        </nav>
    );
}

export default NavBar