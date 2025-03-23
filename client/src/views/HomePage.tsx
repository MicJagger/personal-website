import '../styles/common.css'
import Footer from '../components/Footer'
import githubImageBlack from '../assets/github-black192.png'
import githubImageWhite from '../assets/github-white192.png'
import headImage from '../assets/temphead512.png';
import linkedinImage from '../assets/linkedin192.png'
import linkedinImageFullBlack from '../assets/linkedinFull-black.png'
import linkedinImageFullWhite from '../assets/linkedinFull-white.png'
import '../styles/HomePage.css';
import NavBar from '../components/NavBar';
import {Fragment, MouseEvent, useState} from 'react'

const HomePage = () => {
    /* TODO: light / dark mode
    document.getElementById("home-page")?.classList.toggle("page-default");
    document.getElementById("home-page")?.classList.toggle("page-default-light");
    */

    const GitHubButton = () => {
        const handleMouseEvent = (mouseEvent: MouseEvent<HTMLImageElement>) => {
            mouseEvent.preventDefault();
            window.open("https://github.com/MicJagger");
        }

        return (
            <img src={githubImageWhite} className="social-button" alt="GitHub" onClick={handleMouseEvent}/>
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

    const LinkedInButtonFull = () => {
        const handleMouseEvent = (mouseEvent: MouseEvent<HTMLImageElement>) => {
            mouseEvent.preventDefault();
            window.open("https://www.linkedin.com/in/michael-jagiello/");
        }

        return (
            <img src={linkedinImageFullWhite} className="social-banner-button" alt="LinkedIn" onClick={handleMouseEvent}/>
        );
    }

    return (
        <>
            <title>Michael Jagiello</title>

            <section id="home-page" className="page-default">
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

                <section id="about" className="homepage-about">
                    <header>About</header>

                </section>

                <section id="project-highlights" className="homepage-project-highlights">
                    <header>Project Highlights</header>

                </section>

                <section id="contact" className="homepage-contact">
                    <header>Contact Me</header>
                    <div className="homepage-contact-text">
                        <p>
                            Connect with me on
                        </p>
                        <LinkedInButtonFull />
                    </div>
                </section>

                <Footer />
            </section>
        </>
    );
}

export default HomePage