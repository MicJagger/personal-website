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
import { MouseEvent } from 'react'
import pwmgenerator from '../assets/pwm-generator-simplified.png'





import { Terminal } from '../utils/terminal';





const handleClickButton = (mouseEvent: MouseEvent<HTMLButtonElement>, link: string) => {
    mouseEvent.preventDefault();
    window.open(link);
}

const handleClickImage = (mouseEvent: MouseEvent<HTMLImageElement>, link: string) => {
    mouseEvent.preventDefault();
    window.open(link);
}


const HomePage = () => {

    var terminal1 = new Terminal("terminal", "input");

    terminal1.enableUserInput();


    return (
        <>
            <title>Michael Jagiello</title>

            <section id="home" className="home font-default">

                {NavBar()}

                <section id="spacer" className="spacer"/>
                <section id="spacer" className="spacer"/>



                <section id="terminal" className="terminal">
                    {}
                </section>

                <span id="input" className="input">
                    
                </span>



                
                <section id="spacer" className="spacer"/>

                <section id="spacer" className="spacer"/>

                <section id="about" className="segment-outer"><div className="segment-inner">
                    <div className="column-left box shadow">
                        <img src={headImage} className="rounded" alt="face"/>
                        <p>Text</p>
                    </div>
                    <div className="column-right shadow">
                        <div className="profile-info">
                            <p>I am Michael Jagiello</p>
                            <p>Software Engineer and Computer Nerd</p>
                            <p>text</p>
                            <p>text</p>
                        </div>
                    </div>
                </div></section>

                <section id="experience" className="segment-outer"><div className="segment-inner">
                    <div className="wrap-pieces">
                        <div className="education-box">
                            <p className="education-box-title">Education</p>

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