import '../styles/common.css'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import '../styles/Projects.css'

const Projects = () => {
    return (
        <>
            <title>Projects</title>

            <section id="main" className="page-default">
                <NavBar />

                <section className="projects-main">
                    Projects
                </section>

                <Footer />
            </section>
        </>
    );
}

export default Projects