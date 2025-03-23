import Alert from '../components/Alert'
import '../styles/common.css'
import Footer from '../components/Footer'
import githubImage from '../assets/github192.png'
import headImage from '../assets/temphead512.png';
import linkedinImage from '../assets/linkedin192.png'
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

            <section className="page-default">
                <NavBar />

                <section id="profile" className="homepage-profile">
                    <img src={headImage} className="homepage-face" alt="face"/>
                    <div>
                        <p className="homepage-profile-text">I am</p>
                        <p className="homepage-profile-name-text">Michael Jagiello</p>
                        <p className="homepage-profile-text">Software Engineer</p>
                        <p className="homepage-profile-text">Computer Nerd</p>
                        <div className="socials">
                            <GitHubButton />
                            <LinkedInButton />
                        </div>
                    </div>
                </section>

                <section id="about" className="homepage-profile">
                    <img src={headImage} className="homepage-face" alt="face"/>
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

                <Footer />
            </section>
        </>
    );
}

export default HomePage