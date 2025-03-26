import '../styles/common.css'
import Footer from '../components/Footer'
import githubImageBlack from '../assets/github-black192.png'
import githubImageWhite from '../assets/github-white192.png'
import headImage from '../assets/fillerimage.png';
import '../styles/HomePage.css';
import linkedinImage from '../assets/linkedin192.png'
import linkedinImageFullBlack from '../assets/linkedinFull-black.png'
import linkedinImageFullWhite from '../assets/linkedinFull-white.png'
import localproconnect from '../assets/localpro-connect.png'
import NavBar from '../components/NavBar';
import {MouseEvent} from 'react'
import pwmgenerator from '../assets/pwm-generator-simplified.png'

const HomePage = () => {

    const handleClickButton = (mouseEvent: MouseEvent<HTMLButtonElement>, link: string) => {
        mouseEvent.preventDefault();
        window.open(link);
    }

    const handleClickImage = (mouseEvent: MouseEvent<HTMLImageElement>, link: string) => {
        mouseEvent.preventDefault();
        window.open(link);
    }

    return (
        <>
            <title>Michael Jagiello</title>

            <section id="home" className="home">
                
                {NavBar()}

                <section id="spacer" className="spacer"/>

                <section id="about" className="segment-outer"><div className="segment-inner">
                    <img src={headImage} className="shadow" alt="face"/>
                    <div className="profile-info">
                        <p>I am Michael Jagiello, Software Engineer and Computer Nerd</p>
                    </div>

                   
                </div></section>

                <section id="experience" className="segment-outer"><div className="segment-inner">
                    <div className="wrap-pieces">
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
                                <li>TypeScript / JavaScript</li>
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
                </div></section>

                <section id="projects" className="segment-outer"><div className="segment-inner">
                    <header>Projects</header>
                    <div className="wrap-pieces">

                        <div className="project-box">
                            <p className="project-text-title">personal-website</p>
                            <img src={headImage} className="project-image" alt="project-image"/>
                            <p className="project-text-subtitle">TypeScript | HTML | CSS</p>
                        </div>

                        <div className="project-box">
                            <img src={localproconnect} className="project-image" alt="project-image"/>
                            <div className="project-text">
                                <p className="project-text-title">LocalPro Connect</p>
                                <p className="project-text-subtitle">JavaScript | HTML | CSS</p>
                            </div>
                        </div>

                        <div className="project-box">
                            <img src={pwmgenerator} className="project-image" alt="project-image"/>
                            <div className="project-text">
                                <p className="project-text-title">pwm-generator</p>
                                <p className="project-text-subtitle">C++</p>
                            </div>
                        </div>

                    </div>
                    {/* <a href="/project" className="">More Projects</a> */}
                </div></section>

                <section id="spacer" className="spacer"/>

                <section id="contact" className="segment-outer"><div className="segment-inner">
                    <header>Contact Me</header>
                    <p>
                        Connect with me on
                        <img src={linkedinImageFullBlack} className="social-banner-button" alt="LinkedIn" 
                            onClick={(event) => handleClickImage(event, ("https://www.linkedin.com/in/michael-jagiello/"))}/>
                    </p>
                </div></section>

                <section id="spacer" className="spacer"/>

                {Footer()}

            </section>
        </>
    );
}

export default HomePage