import '../styles/NavBar.css'

const NavBar = () => {
    
    return (
        <nav className="navbar">
            <nav className="navbar-title">
                <a className="navbar-title" href="/#">Michael Jagiello</a>
            </nav>
            <nav className="navbar-links">
                <a className="navbar-links" href="/#about">About</a>
                <a className="navbar-links" href="/#project-highlights">Projects</a>
            </nav>
        </nav>
    );
}

export default NavBar