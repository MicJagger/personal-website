import '../styles/common.css'
import '../styles/NavBar.css'

const NavBar = () => {
    
    return (
        <nav className="outer"><nav className="inner shadow font-default">
            <nav className="navbar-links">
                <div className="link-box shadow"><a className="navbar-links" href="/#about">About</a></div>
                <div className="link-box shadow"><a className="navbar-links" href="/#experience">Experience</a></div>
                <div className="link-box shadow"><a className="navbar-links" href="/#projects">Projects</a></div>
                <div className="link-box shadow"><a className="navbar-links" href="/#contact">Contact</a></div>
            </nav>
        </nav></nav>
    );
}

export default NavBar