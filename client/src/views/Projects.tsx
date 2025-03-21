import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import '../styles/Projects.css'

const Projects = () => {
    return (
    <>
        <head>
            <title>Projects</title>
        </head>

        <NavBar />

        <section id="main" className="projects-main">
            <header className="projects-main">
                Projects
            </header>
        </section>

        <Footer />
    </>
    );
}

export default Projects