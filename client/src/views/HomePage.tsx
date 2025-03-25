import '../styles/common.css'
import Footer from '../components/Footer'
import githubImageBlack from '../assets/github-black192.png'
import githubImageWhite from '../assets/github-white192.png'
import headImage from '../assets/temphead512.png';
import '../styles/HomePage.css';
import linkedinImage from '../assets/linkedin192.png'
import linkedinImageFullBlack from '../assets/linkedinFull-black.png'
import linkedinImageFullWhite from '../assets/linkedinFull-white.png'
import localproconnect from '../assets/localpro-connect.png'
import NavBar from '../components/NavBar';
import {MouseEvent} from 'react'
import pwmgenerator from '../assets/pwm-generator-simplified.png'

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

    const ButtonViewMore = (link: string) => {
        const handleMouseEvent = (mouseEvent: MouseEvent<HTMLButtonElement>) => {
            mouseEvent.preventDefault();
            window.open(link);
        }

        return (
            <button className="button-view-more" onClick={handleMouseEvent}>View More</button>
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
                        Learning about computing has been a hobby of mine for a decade now, and I am happy to
                        finally have gotten to creating.
                        I enjoy just going out and making stuff, and finding new things I didn't understand prior.
                    </p>
                    <p className="about-text">
                        Unlike many of the people I talk to, I love low-level programming and fundamentals, and have
                        dedicated my life to understanding a computer from the text you are reading now,
                        down to the registers working tirelessly to display it.
                    </p>
                    <p className="about-text">
                        Despite my time in hardware and low-level software, that doesn't mean I don't enjoy production-level development.
                        Building websites and scripts has its place, and machine code or even C++ simply will not always get the job done.
                    </p>
                    <p className="about-text">
                        The goal is to know it all, but we all know that can't happen - I'm stubborn enough to try anyway.
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
                </section>

                <section id="project-highlights" className="project-highlights">
                    <header>Project Highlights</header>
                    <div className="array">
                        <div className="project-box">
                            <img src={headImage} className="project-image" alt="project-image"/>
                            <div className="project-text">
                                <p className="project-text-title">personal-website</p>
                                <p className="project-text-subtitle">TypeScript | HTML | CSS</p>
                                <div className="project-more">{ButtonViewMore("https://github.com/MicJagger/personal-website")}</div>
                            </div>
                        </div>
                        <div className="project-box">
                            <img src={localproconnect} className="project-image" alt="project-image"/>
                            <div className="project-text">
                                <p className="project-text-title">LocalPro Connect</p>
                                <p className="project-text-subtitle">JavaScript | HTML | CSS</p>
                                <div className="project-more">{ButtonViewMore("https://github.com/MicJagger/CENPROJECT")}</div>
                            </div>
                        </div>
                        <div className="project-box">
                            <img src={pwmgenerator} className="project-image" alt="project-image"/>
                            <div className="project-text">
                                <p className="project-text-title">pwm-generator</p>
                                <p className="project-text-subtitle">C++</p>
                                <div className="project-more">{ButtonViewMore("https://github.com/MicJagger/pwm-generator")}</div>
                            </div>
                        </div>
                    </div>
                    {/* <a href="/project" className="">More Projects</a> */}
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