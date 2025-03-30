import '../styles/common.css'
import Footer from '../components/Footer'
import '../styles/HomePage.css';
import NavBar from '../components/NavBar';
import { MouseEvent } from 'react'
import { Terminal } from '../utils/terminal';

const HomePage = () => {

    // home
    var terminal0 = new Terminal("0", "output0", "input0");

    // about
    var terminal1 = new Terminal("1", "output1", "input1");

    // experience
    var terminal2 = new Terminal("2", "output2", "input2");

    // projects
    var terminal3 = new Terminal("3", "output3", "input3");

    // contact
    var terminal4 = new Terminal("4", "output4", "input4");

    // footer
    var terminal5 = new Terminal("4", "output5", "input5");

    function sleep(time: number) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    // waits until html elements are modifiable, then executes onLoad()
    async function loadWatcher() {
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

    async function onLoad() {
        console.log("loaded!");

        // initialize window size
        if (window.innerWidth < 800) {
            localStorage.setItem("format", "thin");
        }
        else if (window.innerWidth >= 800 && window.innerWidth < 1200) {
            localStorage.setItem("format", "wide");
        }
        else if (window.innerWidth >= 1200) {
            localStorage.setItem("format", "verywide");
        }
        
        await terminal0.artificialInput("fetch", 5);
        await sleep(2000);
        var scrollPoint = document.getElementById("about");
        scrollPoint?.scrollIntoView({
            block: "start"
        })
        await sleep(1500);
        terminal1.artificialInput("about", 5);
        terminal2.artificialInput("experience", 5);
        terminal3.artificialInput("projects", 5);
        terminal4.artificialInput("contact", 5);
        terminal5.artificialInput("copyright", 5);
        terminal0.enableUserInput();
    }

    loadWatcher();

    return (
        <>
            <title>Michael Jagiello</title>

            <section id="home" className="home font-default">
                
                <section id="main" className="terminal-main">
                    <pre className="terminal font-default font-medium margin-0">

                        <div id="output0" className="font-default font-medium"></div>

                        <span id="newline0" className="">&gt;&nbsp;
                            <span id="input0" className="input font-default"></span><b id="c0" className="cursor font-medium"></b>
                        </span>

                    </pre>
                </section>

                {/*NavBar()*/}

                <div className="spacer"></div>

                <section id="about" className="segment-outer"><div className="bounded">
                    <div className="terminal-label">About</div>
                    <pre className="terminal min-height font-default font-medium margin-0">

                        <div id="output1" className="font-default font-medium"></div>

                        <span id="newline1" className="">&gt;&nbsp;
                            <span id="input1" className="input font-default font-medium"></span><b id="c1" className="cursor font-medium"></b>
                        </span>

                    </pre>
                </div></section>

                <div className="spacer"></div>

                <section id="experience" className="segment-outer"><div className="bounded">
                    <div className="terminal-label">Experience</div>
                    <pre className="terminal min-height font-default font-medium margin-0">

                        <div id="output2" className="font-default font-medium"></div>

                        <span id="newline2" className="">&gt;&nbsp;
                            <span id="input2" className="input font-default font-medium"></span><b id="c2" className="cursor font-medium"></b>
                        </span>

                    </pre>
                </div></section>

                <div className="spacer"></div>

                <section id="projects" className="segment-outer"><div className="bounded">
                    <div className="terminal-label">Projects</div>
                    <pre className="terminal min-height font-default font-medium margin-0">

                        <div id="output3" className="font-default font-medium"></div>

                        <span id="newline3" className="">&gt;&nbsp;
                            <span id="input3" className="input font-default font-medium"></span><b id="c3" className="cursor font-medium"></b>
                        </span>

                    </pre>
                </div></section>

                <div className="spacer"></div>

                <section id="contact" className="segment-outer"><div className="bounded">
                    <div className="terminal-label">Contact</div>
                    <pre className="terminal min-height font-default font-medium margin-0">

                        <div id="output4" className="font-default font-medium"></div>

                        <span id="newline4" className="">&gt;&nbsp;
                            <span id="input4" className="input font-default font-medium"></span><b id="c4" className="cursor font-medium"></b>
                        </span>

                    </pre>
                </div></section>

                <div className="spacer"></div>

                {/*

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


                */}

                <section id="footer" className="segment-outer">
                    <pre className="terminal font-default font-medium margin-0">

                        <div id="output5" className="font-default font-medium"></div>

                        <span id="newline5" className="">&gt;&nbsp;
                            <span id="input5" className="input font-default font-medium"></span><b id="c5" className="cursor font-medium"></b>
                        </span>

                    </pre>
                </section>

            </section>
        </>
    );
}

export default HomePage