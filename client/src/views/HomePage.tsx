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
import {MouseEvent} from 'react'

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

                <section id="profile" className="profile">
                    <img src={headImage} className="face" alt="face"/>
                    <div className="profile-info">
                        <p className="profile-text">I am</p>
                        <p className="profile-name-text">Michael Jagiello</p>
                        <p className="profile-text">Software Engineer</p>
                        <p className="profile-text">Computer Nerd</p>
                        <div className="socials">
                            <GitHubButton />
                            <LinkedInButton />
                        </div>
                    </div>
                </section>

                <section id="about" className="about">
                    <header>About</header>
                    <p className="about-text">
                        Hey, I'm Michael, a senior Computer Science major at the University of Florida.
                        
                    </p>

                    <div className="array">
                        <div className="education-box">
                            <p className="education-box-title">Education</p>
                            <ul className="education-details">
                                <p className="education-box-title">University of Florida</p>
                                <p className="education-sub-title">Gainesville, Florida</p>
                                <p className="education-title">Bachelor's of Science</p>
                                <p className="education-sub-title">in</p>
                                <p className="education-title">Computer Science</p>
                                <p className="education-sub-title">3.6 GPA</p>
                                <p className="education-sub-title"> </p>
                            </ul>
                        </div> 

                        <div className="skills-box">
                            <p className="skills-box-title">Experienced In</p>
                            <ul className="list-box">
                                <li>C / C++</li>
                                <li>TypeScript / Javascript</li>
                                <li>HTML + CSS</li>
                                <li>Python</li>
                                <li>Git</li>
                                <li>Linux</li>
                                <li>3D Design, AutoCAD</li>
                            </ul>
                        </div>

                        <div className="skills-box">
                            <p className="skills-box-title">Familiar With</p>
                            <ul className="list-box">
                                <li>Java</li>
                                <li>SQL</li>
                                <li>C#, Unity</li>
                                <li>Docker</li>
                                <li>ARM & x86 Assembly</li>
                                <li>Web Hosting</li>
                                <li>Server Management</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="project-highlights" className="project-highlights">
                    <header>Project Highlights</header>

                    <div className="project-box">

                    </div>

                </section>

                <section id="contact" className="contact">
                    <header>Contact Me</header>
                    <div className="text">
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