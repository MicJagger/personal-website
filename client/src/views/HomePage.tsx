import Alert from '../components/Alert'
import Footer from '../components/Footer'
import githubImage from '../assets/github192.png'
import linkedinImage from '../assets/linkedin192.png'
import logo from '../logo.svg';
import '../styles/HomePage.css';
import NavBar from '../components/NavBar';
import {Fragment, MouseEvent, useState} from 'react'

const HomePage = () => {
    const [alertMessage, setAlertMessage] = useState("null");

    const throwError = (message:string) => {
        setAlertMessage(message);
    }

    const endError = () => {
        setAlertMessage("null");
    }

    const GitHubButton = () => {
        const handleMouseEvent = (mouseEvent: MouseEvent<HTMLImageElement>) => {
            mouseEvent.preventDefault();
            window.open("https://github.com/MicJagger");
        }

        return (
            <img src={githubImage} className="social-button" alt="LinkedIn" onClick={handleMouseEvent}/>
        );
    }

    const LinkedInButton = () => {
        const handleMouseEvent = (mouseEvent: MouseEvent<HTMLImageElement>) => {
            mouseEvent.preventDefault();
            window.open("https://www.linkedin.com/in/michael-jagiello/");
        }

        return (
            <img src={linkedinImage} className="social-button" alt="LinkedIn" onClick={handleMouseEvent}/>
        );
    }

    return (
        <>
            <title>
                <title>Michael Jagiello</title>
            </title>

            <section className="homepage">
                <NavBar />

                <section id="profile" className="homepage-profile">
                    <img src={logo} className="homepage-logo" alt="logo" />
                    <div>
                        <p className="homepage-profile-text">
                            Michael Jagiello
                        </p>
                        <div className="socials">
                            <GitHubButton />
                            <LinkedInButton />
                        </div>
                    </div>
                </section>

                <section id="projects" className="homepage-projects">
                
                </section>

                <Footer />
            </section>
        </>
    );
}

export default HomePage