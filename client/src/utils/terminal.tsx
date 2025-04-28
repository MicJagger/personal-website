import * as cmd from './commands';

export class Terminal {
    public id: string;
    public outputLocation: string;
    public inputLocation: string;

    // limits length of I/O, or limits what is displayed
    public inputLengthLimit: number;

    // for setting default fonts for everything, including user input
    public defaultClass: string;
    // for setting default fonts and stuff for addToOutput, currently not implemented in other sections
    public defaultSectionClass: string;
    
    private allowUserInput: boolean;
    private input: string;

    public constructor(terminalID: string, outputLoc: string, inputLoc: string) {
        this.id = terminalID;
        this.outputLocation = outputLoc;
        this.inputLocation = inputLoc;

        this.inputLengthLimit = 100;

        this.defaultClass = "font-medium";
        this.defaultSectionClass = "";

        this.allowUserInput = false;
        this.input = "";

        console.log("init terminal");
    };


    // only works in async functions
    private sleepFor(milliseconds: number) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    // snap screen to terminal0 input
    private checkAndScrollTerminal0() {
        if (this.id === "0") {
            var scrollPoint = document.getElementById("newline0");
            scrollPoint?.scrollIntoView({
                block: "end"
            });
        }
    }


    // user input setters

    public enableUserInput() {
        if (this.allowUserInput === false) {
            window.addEventListener("keydown", this.handleKey);
            this.allowUserInput = true;
            console.log("enabled user input on terminal " + this.id);
            // enable cursor
            var loc: string = "c" + this.id;
            const cursor = document.getElementById(loc);
            cursor!.textContent = "█";
        }
    }

    public disableUserInput() {
        if (this.allowUserInput === true) {
            window.removeEventListener("keydown", this.handleKey);
            this.allowUserInput = false;
            console.log("disabled user input on terminal " + this.id);
            // disable cursor
            var loc: string = "c" + this.id;
            const cursor = document.getElementById(loc);
            cursor!.textContent = "";
        }
    }

    public getUserInput(): boolean {
        return this.allowUserInput;
    }

    // output management

    public outputNewline() {
        const output = document.getElementById(this.outputLocation);
        const newPiece = document.createElement("p");
        output!.appendChild(newPiece);
    }

    public async commitInput() {
        const output = document.getElementById(this.outputLocation);
        const newPiece = document.createElement("span");
        newPiece.className = "font-default";
        newPiece.textContent = "> " + this.input;
        output!.appendChild(newPiece);
        this.outputNewline();
        var command: string = this.input;
        this.clearInput();
        await this.executeCommand(command);
    }

    // dont chain these without async management
    // defaults to 96 characters per second
    public async addToOutput(message: string[], sectionClass?: string, charsPerSecond?: number, hyperlink?: string, newpage?: boolean) {

        var keyboardWasEnabled: boolean = this.allowUserInput;
        if (keyboardWasEnabled) {
            window.removeEventListener("keydown", this.handleKey);
        }

        var charSpeed: number;
        if (charsPerSecond === null || charsPerSecond === undefined) {
            charSpeed = 96;
        }
        else {
            charSpeed = charsPerSecond;
        }
        var sleepTime: number = 1000 / charSpeed;

        // message is split into even and odd indices
        var output = document.getElementById(this.outputLocation);
        
        var newSection: HTMLElement;
        newSection = document.createElement("section");

        if (sectionClass !== null && sectionClass !== undefined) {
            newSection.className = sectionClass;
        }
        output!.appendChild(newSection);

        var newPiece: HTMLSpanElement;
        let innerHTML: boolean;
        for (let i = 0; i < message.length; i++) {
            
            // even indices indicate styling
            if (i % 2 === 0) {
                if (message[i].includes("innerHTML")) {
                    innerHTML = true;
                }
                else {
                    innerHTML = false;
                }
                if (hyperlink !== null && hyperlink !== undefined) {
                    newPiece = document.createElement("a");
                    newPiece.setAttribute("href", hyperlink);
                    if (newpage === null || newpage === undefined || newpage === true) {
                        newPiece.setAttribute("target", "_blank");
                        newPiece.setAttribute("rel", "noopener noreferrer");
                    }
                }
                else {
                    newPiece = document.createElement("span");
                }

                newSection!.appendChild(newPiece);
                newPiece.className = message[i];
            }
            // odd indices indicate message
            else {
                if (innerHTML! === true) { // inner html form
                    newPiece!.innerHTML = message[i];
                    this.checkAndScrollTerminal0();
                    await this.sleepFor(sleepTime);
                }
                else { // standard
                    for (let j = 0; j < message[i].length; j++) {
                        if (message[i].charAt(j) === "\n") {
                            // gather details to begin new line with same details
                            newPiece!.textContent += " ";
                            
                            const newLine = document.createElement("p");
                            newSection!.appendChild(newLine);
    
                            if (j < message[i].length - 1) {
                                if (hyperlink !== null && hyperlink !== undefined) {
                                    newPiece = document.createElement("a");
                                    newPiece.setAttribute("href", hyperlink);
                                    if (newpage === null || newpage === undefined || newpage === true) {
                                        newPiece.setAttribute("target", "_blank");
                                        newPiece.setAttribute("rel", "noopener noreferrer");
                                    }
                                }
                                else {
                                    newPiece = document.createElement("span");
                                }
    
                                newSection!.appendChild(newPiece);
                                newPiece.className = message[i - 1];
                                this.checkAndScrollTerminal0();
                            }
                        }
                        else {
                            newPiece!.textContent += message[i].charAt(j);
                            this.checkAndScrollTerminal0();
                        }
                        // if space, skip sleep cycle (to tab faster)
                        if (message[i].charAt(j) !== " ") {
                            await this.sleepFor(sleepTime);
                        }
                    }
                }
            }
        }

        if (keyboardWasEnabled) {
            window.addEventListener("keydown", this.handleKey);
        }
    }


    // input management

    public addToInput(char: string) {
        // restrict input to length
        if (this.input.length < this.inputLengthLimit) {
            this.input = this.input.concat(char);
            const input = document.getElementById(this.inputLocation);
            // restricts visibility to limit value
            input!.textContent = this.input;
        }
    }

    public popInput() {
        if (this.input.length > 0) {
            this.input = this.input.slice(0, this.input.length - 1);
            const input = document.getElementById(this.inputLocation);
            // restricts visibility to limit value
            input!.textContent = this.input;
        }
    }

    public clearInput() {
        this.input = "";
        const input = document.getElementById(this.inputLocation);
        input!.textContent = this.input;
    }

    public async artificialInput(text: string, charsPerSecond?: number) {

        function charSpeedLimiter(charsPerSecond: number) {
            return new Promise(resolve => setTimeout(resolve, 1000 / charsPerSecond));
        }

        var charSpeed: number;
        if (charsPerSecond === null || charsPerSecond === undefined) {
            charSpeed = 3;
        }
        else {
            charSpeed = charsPerSecond;
        }
        for (let i = 0; i < text.length; i++) {
            this.addToInput(text[i]);
            await charSpeedLimiter(charSpeed);
        }
        await this.commitInput();
    }

    // handler(s)

    private handleKey = (key: KeyboardEvent) => {
        key.preventDefault();
        if (this.allowUserInput === true) {
            //console.log(key.key);
            switch (key.key) {
                case "Backspace": {
                    this.popInput();
                    break;
                }
                case "Enter": {
                    this.commitInput();
                    break;
                }
                case "F5": {
                    document.location.reload();
                    break;
                }
                default: {
                    var val: number = key.key.charCodeAt(0);
                    if (key.key.length === 1 && val >= 32 && val <= 126) {
                        this.addToInput(key.key);
                    }
                    break;
                }
            }
        }
    }

    // do commands

    public async executeCommand(text: string) {
        var args: string[] = [];

        // separate into arguments
        var arg: string = "";
        for (let i = 0; i < text.length; i++) {
            if (text.charAt(i) === ' ') {
                if (arg !== "") {
                    args.push(arg);
                    arg = "";
                }
                // else if empty, don't count duplicate spaces
            }
            else {
                arg = arg.concat(text.charAt(i));
            }
        }
        if (arg !== "") {
            args.push(arg);
        }
        
        if (args.length === 0) {
            return;
        }

        switch (args[0]) {
            case "clear": {
                const output = document.getElementById(this.outputLocation);
                output!.querySelectorAll("p").forEach(newline => newline.parentNode?.removeChild(newline));
                output!.querySelectorAll("span").forEach(item => item.parentNode?.removeChild(item));
                break;
            }
            case "help": {
                if (args.length !== 1) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("1\n");
                    await this.addToOutput(msg);
                    break;
                }
                await this.addToOutput(cmd.help);
                break;
            }
            case "about": {
                if (args.length !== 1) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("1\n");
                    this.addToOutput(msg);
                    break;
                }
                if (localStorage.getItem("format") === "verywide") { // name is horizontal
                    await this.addToOutput(cmd.name, "font-small centered-column", 128, undefined, false);
                }
                else { // name is vertical
                    await this.addToOutput(cmd.namefirst, "centered-column", 128, undefined, false);
                    await this.addToOutput(cmd.namelast, "centered-column", 128, undefined, false);
                }
                await this.addToOutput(cmd.about, undefined, 96);
                await this.addToOutput(cmd.about_reachme, undefined, 96);
                break;
            }
            case "contact": {
                if (args.length !== 1) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("1\n");
                    await this.addToOutput(msg);
                    break;
                }
                // puts them side by side on verywide, but prints it out line by line instead of char by char
                if (localStorage.getItem("format") === "verywide") {
                    await this.addToOutput(cmd.contacts_verywide, undefined, 8);
                }
                else {
                    // optionally, changed this to be "centered-column"
                    await this.addToOutput(cmd.contact_github, undefined, 256, "https://github.com/MicJagger");
                    await this.addToOutput(cmd.contact_linkedin, undefined, 256, "https://www.linkedin.com/in/michael-jagiello/");
                }
                break;
            }
            case "copyright": {
                if (args.length !== 1) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("1\n");
                    await this.addToOutput(msg);
                    break;
                }
                await this.addToOutput(cmd.copyright, "centered-column");
                break;
            }
            case "experience": {
                if (args.length !== 1) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("1\n");
                    await this.addToOutput(msg);
                    break;
                }
                await this.addToOutput(cmd.education, undefined, 128);
                await this.addToOutput(["", " "]);
                await this.addToOutput(cmd.experience, undefined, 128);
                await this.addToOutput(["", " "]);
                await this.addToOutput(cmd.skills, undefined, 128);
                break;
            }
            case "fetch": {
                if (args.length !== 1) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("1\n");
                    this.addToOutput(msg);
                    break;
                }
                await this.addToOutput(cmd.splash, undefined, 160);
                await this.addToOutput(["", "running in... a web browser\n"], undefined, 64);
                await this.addToOutput(["", "windowWidth=" + window.innerWidth.toString() + "\n"], undefined, 64);
                await this.addToOutput(["", "windowHeight=" + window.innerHeight.toString() + "\n"], undefined, 64);
                await this.addToOutput(["", "loading...\n"], undefined, 64);
                break;
            }
            case "font": {
                if (args.length !== 2) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("2\n");
                    await this.addToOutput(msg);
                    break;
                }
                if (args[1] === "small") {
                    this.changeFont("font-small");
                    await this.addToOutput(["", "Changed font size.\n"]);
                }
                else if (args[1] === "medium") {
                    this.changeFont("font-medium");
                    await this.addToOutput(["", "Changed font size.\n"]);
                }
                else if (args[1] === "large") {
                    this.changeFont("font-large");
                    await this.addToOutput(["", "Changed font size.\n"]);
                }
                else {
                    await this.addToOutput(cmd.font_list);
                }
                break;
            }
            case "projects": {
                if (args.length !== 1) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("1\n");
                    await this.addToOutput(msg);
                    break;
                }
                await this.addToOutput(cmd.project_personal_website_title, undefined, 96, "https://github.com/MicJagger/personal-website");
                await this.addToOutput(cmd.project_personal_website, undefined, 384);

                await this.addToOutput(cmd.project_letter_boxed_solver_title, undefined, 96, "https://github.com/MicJagger/letter-boxed-solver");
                await this.addToOutput(cmd.project_letter_boxed_solver, undefined, 384);
                await this.addToOutput(cmd.project_letter_boxed_solver_link, undefined, 384, "https://letterboxedsolver.micjagger.net");
                await this.addToOutput(cmd.newline, undefined, 384);

                await this.addToOutput(cmd.project_localpro_connect_title, undefined, 96, "https://github.com/MicJagger/CENPROJECT");
                await this.addToOutput(cmd.project_localpro_connect, undefined, 384);

                await this.addToOutput(cmd.project_gravity_simulator_title, undefined, 96, "https://github.com/MicJagger/gravity-simulator");
                await this.addToOutput(cmd.project_gravity_simulator, undefined, 384);

                await this.addToOutput(cmd.project_pwm_generator_title, undefined, 96, "https://github.com/MicJagger/pwm-generator");
                await this.addToOutput(cmd.project_pwm_generator, undefined, 384);

                await this.addToOutput(cmd.project_bingo_simulator_title, undefined, 96, "https://github.com/MicJagger/bingo-simulator");
                await this.addToOutput(cmd.project_bingo_simulator, undefined, 384);

                break;
            }
            case "sudo": {
                if (args.length !== 4) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("4\n");
                    await this.addToOutput(msg);
                    break;
                }
                if (args[1] === "apt" && args[2] === "install" && args[3] === "cowsay") {
                    await this.addToOutput(cmd.cowsay_good, undefined, 96);
                    await this.sleepFor(1000);
                    await this.addToOutput(cmd.cowsay, undefined, 1024); // probably technically isn't this fast
                }
                else if (args[1] === "apt" && args[2] === "remove" && args[3] === "cowsay") {
                    await this.addToOutput(cmd.cowsay_mistake, undefined, 128);
                    await this.sleepFor(1000);
                    await this.addToOutput(cmd.cowsay, undefined, 1024);
                }
                else {
                    await this.addToOutput(cmd.invalid);
                }
                break;
            }
            default: {
                await this.addToOutput(cmd.invalid);
                break;
            }
        }
    }


    // other

    public changeFont(classname: string) {
        const output = document.getElementById(this.outputLocation);
        const newline = document.getElementById("newline" + this.id);
        output?.classList.remove(this.defaultClass);
        newline?.classList.remove(this.defaultClass);
        this.defaultClass = classname;
        output?.classList.add(this.defaultClass);
        newline?.classList.add(this.defaultClass);
    }

}