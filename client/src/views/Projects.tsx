import '../styles/common.css'
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

        <section id="main" className="page-default">
            <section className="projects-main">
                Projects
            </section>
        </section>

        <Footer />
    </>
    );
}

export default Projects