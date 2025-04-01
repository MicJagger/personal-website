import '../styles/common.css'
import '../styles/HomePage.css';
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
    var terminal5 = new Terminal("5", "output5", "input5");

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
        
        await sleep(500);
        await terminal0.artificialInput("fetch", 3);
        await sleep(1500);
        var scrollPoint = document.getElementById("about");
        scrollPoint?.scrollIntoView({
            block: "start"
        })
        await sleep(1000);
        terminal1.artificialInput("about", 6);
        terminal2.artificialInput("experience", 8);
        terminal3.artificialInput("projects", 8);
        terminal4.artificialInput("contact", 6);
        terminal5.artificialInput("copyright", 8);
        //terminal0.enableUserInput();
    }

    loadWatcher();

    // for enabling / disabling input on terminal0

    const clickOn0 = (mouseEvent: MouseEvent<HTMLSpanElement>) => {
        terminal0.enableUserInput();
    }

    const clickOff0 = (mouseEvent: MouseEvent) => {
        terminal0.disableUserInput();
    }

    return (
        <>
            <title>Michael Jagiello</title>

            <section id="home" className="home font-default">
                
                <section id="main" className="terminal-main shadow">
                    <div className="terminal font-default font-medium margin-0">

                        <div id="output0" className="font-default font-medium" onClick={clickOff0}></div>

                        <span id="newline0" className="width-full" onClick={clickOn0}>&gt;&nbsp;
                            <span id="input0" className="input font-default"></span><b id="c0" className="cursor font-medium" />
                        </span>

                    </div>
                </section>

                <section id="everthingelse" onClick={clickOff0}>

                <div className="spacer" />

                <section id="about" className="segment-outer"><div className="bounded shadow">
                    <div className="terminal-label">About</div>
                    <div className="terminal min-height font-default font-medium margin-0">

                        <div id="output1" className="font-default font-medium"></div>

                        <span id="newline1" className="">&gt;&nbsp;
                            <span id="input1" className="input font-default font-medium"></span><b id="c1" className="cursor font-medium"></b>
                        </span>

                    </div>
                </div></section>

                <div className="spacer" />

                <section id="experience" className="segment-outer"><div className="bounded shadow">
                    <div className="terminal-label">Experience</div>
                    <div className="terminal min-height font-default font-medium margin-0">

                        <div id="output2" className="font-default font-medium"></div>

                        <span id="newline2" className="">&gt;&nbsp;
                            <span id="input2" className="input font-default font-medium"></span><b id="c2" className="cursor font-medium"></b>
                        </span>

                    </div>
                </div></section>

                <div className="spacer" />

                <section id="projects" className="segment-outer"><div className="bounded shadow">
                    <div className="terminal-label">Projects</div>
                    <div className="terminal min-height font-default font-medium margin-0">

                        <div id="output3" className="font-default font-medium"></div>

                        <span id="newline3" className="">&gt;&nbsp;
                            <span id="input3" className="input font-default font-medium"></span><b id="c3" className="cursor font-medium"></b>
                        </span>

                    </div>
                </div></section>

                <div className="spacer" />

                <section id="contact" className="segment-outer"><div className="bounded shadow">
                    <div className="terminal-label">Contact</div>
                    <div className="terminal min-height font-default font-medium margin-0">

                        <div id="output4" className="font-default font-medium"></div>

                        <span id="newline4" className="">&gt;&nbsp;
                            <span id="input4" className="input font-default font-medium"></span><b id="c4" className="cursor font-medium"></b>
                        </span>

                    </div>
                </div></section>

                <div className="spacer" />

                <section id="footer" className="segment-outer">
                    <div className="terminal font-default font-medium margin-0 shadow">

                        <div id="output5" className="font-default font-medium"></div>

                        <span id="newline5" className="">&gt;&nbsp;
                            <span id="input5" className="input font-default font-medium"></span><b id="c5" className="cursor font-medium"></b>
                        </span>

                    </div>
                </section>

                </section>

            </section>
        </>
    );
}

export default HomePage