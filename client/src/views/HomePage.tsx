import '../styles/common.css'
import Footer from '../components/Footer'
import '../styles/HomePage.css';
import NavBar from '../components/NavBar';
import { MouseEvent } from 'react'
import { Terminal } from '../utils/terminal';

const HomePage = () => {

    var terminal0 = new Terminal("0", "output0", "input0");
    var terminal1 = new Terminal("1", "output1", "input1");
    var terminal2 = new Terminal("2", "output2", "input2");
    var terminal3 = new Terminal("3", "output3", "input3");
    var terminal4 = new Terminal("4", "output4", "input4");

    // waits until html elements are modifiable, then executes onLoad()
    async function loadWatcher() {

        function sleep(time: number) {
            return new Promise(resolve => setTimeout(resolve, time));
        }

        var loadTest = document.getElementById("footer");
        while (true) {
            loadTest = document.getElementById("footer");
            if (loadTest !== null) {
                onLoad();
                break;
            }
            await sleep(50);
        }
    }

    function onLoad() {
        console.log("loaded!");
        terminal0.enableUserInput();
        terminal1.artificialInput("print about", 5);
        terminal2.artificialInput("print experience", 6);
        terminal3.artificialInput("print project -all", 6);
        terminal4.artificialInput("print contact", 6);
    }

    loadWatcher();

    return (
        <>
            <title>Michael Jagiello</title>

            <section id="home" className="home font-default">

                <section id="main" className="segment-outer"><div className="bounded">
                    <pre className="terminal font-default font-medium margin-0">

                        <div id="output0" className="font-default font-medium"></div>

                        <span id="newline" className="">&gt;&nbsp;
                            <span id="input0" className="input font-default font-medium"></span><b id="c0" className="cursor font-medium"></b>
                        </span>

                    </pre>
                </div></section>

                {NavBar()}

                <section id="about" className="segment-outer"><div className="bounded">
                    <p>about</p>
                    <pre className="terminal font-default font-medium margin-0">

                        <div id="output1" className="font-default font-medium"></div>

                        <span id="newline" className="">&gt;&nbsp;
                            <span id="input1" className="input font-default font-medium"></span><b id="c1" className="cursor font-medium"></b>
                        </span>

                    </pre>
                </div></section>

                <section id="experience" className="segment-outer"><div className="bounded">
                    <p>experience</p>
                    <pre className="terminal font-default font-medium margin-0">

                        <div id="output2" className="font-default font-medium"></div>

                        <span id="newline" className="">&gt;&nbsp;
                            <span id="input2" className="input font-default font-medium"></span><b id="c2" className="cursor font-medium"></b>
                        </span>

                    </pre>
                </div></section>

                <section id="projects" className="segment-outer"><div className="bounded">
                    <p>projects</p>
                    <pre className="terminal font-default font-medium margin-0">

                        <div id="output3" className="font-default font-medium"></div>

                        <span id="newline" className="">&gt;&nbsp;
                            <span id="input3" className="input font-default font-medium"></span><b id="c3" className="cursor font-medium"></b>
                        </span>

                    </pre>
                </div></section>

                <section id="contact" className="segment-outer"><div className="bounded">
                    <p>contact</p>
                    <pre className="terminal font-default font-medium margin-0">

                        <div id="output4" className="font-default font-medium"></div>

                        <span id="newline" className="">&gt;&nbsp;
                            <span id="input4" className="input font-default font-medium"></span><b id="c4" className="cursor font-medium"></b>
                        </span>

                    </pre>
                </div></section>

                {/*

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

                

                */}

                {Footer()}

            </section>
        </>
    );
}

export default HomePage