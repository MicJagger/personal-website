import * as cmd from './commands';

export class Terminal {
    public id: string;
    public outputLocation: string;
    public inputLocation: string;

    // limits length of I/O, or limits what is displayed
    // outputLengthLimit is not implemented
    public outputLengthLimit: number;
    public outputVisibilityLimit: number;
    public inputLengthLimit: number;
    public inputVisibilityLimit: number;

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

        this.outputLengthLimit = 200;
        this.inputLengthLimit = 200;
        if (localStorage.getItem("format") === "verythin") { // not completely implemented
            this.outputVisibilityLimit = 24;
            this.inputVisibilityLimit = 24;
        }
        else if (localStorage.getItem("format") === "thin") {   
            this.outputVisibilityLimit = 32;
            this.inputVisibilityLimit = 32;
        }
        else if (localStorage.getItem("format") === "wide") {
            this.outputVisibilityLimit = 48;
            this.inputVisibilityLimit = 48;
        }
        else {
            this.outputVisibilityLimit = 64;
            this.inputVisibilityLimit = 64;
        }

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
    public async addToOutput(message: string[], sectionClass?: string, charsPerSecond?: number, bypassLimits?: boolean, hyperlink?: string, newpage?: boolean) {

        var keyboardWasEnabled: boolean = this.allowUserInput;
        if (keyboardWasEnabled) {
            window.removeEventListener("keydown", this.handleKey);
        }

        var charSpeed: number;
        if (charsPerSecond === null || charsPerSecond === undefined) {
            charSpeed = 50;
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
        for (let i = 0; i < message.length; i++) {
            
            // even indices indicate styling
            if (i % 2 === 0) {
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
                        }
                    }
                    else {
                        // length limiting depending on font
                        let wrapLine: boolean = false;
                        if (message[i - 1].includes("font-small")) { // if font is small
                            if (newPiece!.textContent!.length! >= (this.outputVisibilityLimit * 1.5)) {
                                wrapLine = true;
                            }
                        }
                        else if (message[i - 1].includes("font-large")) { // if font is large
                            if (newPiece!.textContent!.length! >= (this.outputVisibilityLimit * 0.75)) {
                                wrapLine = true;
                            }
                        }
                        else if (message[i - 1].includes("font-title")) { // if font is large
                            if (newPiece!.textContent!.length! >= (this.outputVisibilityLimit * 0.5)) {
                                wrapLine = true;
                            }
                        }
                        else { // if font is medium / other
                            if (newPiece!.textContent!.length! >= (this.outputVisibilityLimit * 1)) {
                                wrapLine = true;
                            }
                        }

                        // wrap the line
                        if (wrapLine) {
                            const newLine = document.createElement("p");
                            newSection!.appendChild(newLine);

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
                        }
                        newPiece!.textContent += message[i].charAt(j);
                    }
                    // if space, skip sleep cycle (to tab faster)
                    if (message[i].charAt(j) !== " ") {
                        await this.sleepFor(sleepTime);
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
            input!.textContent = this.input.substring(0, this.inputVisibilityLimit);
            if (this.input.length >= this.inputVisibilityLimit) {
                input!.textContent += "...";
            }
        }
    }

    public popInput() {
        if (this.input.length > 0) {
            this.input = this.input.slice(0, this.input.length - 1);
            const input = document.getElementById(this.inputLocation);
            // restricts visibility to limit value
            input!.textContent = this.input.substring(0, this.inputVisibilityLimit);
            if (this.input.length >= this.inputVisibilityLimit) {
                input!.textContent += "...";
            }
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
        if (charsPerSecond !== null) {
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

    public async executeCommand(text: string, charSpeed?: number) {
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
                    await this.addToOutput(cmd.name, "font-small centered-column", 64, undefined, "/#contact", false);
                }
                else { // name is vertical
                    await this.addToOutput(cmd.namefirst, "centered-column", 64, undefined, "/#contact", false);
                    await this.addToOutput(cmd.namelast, "centered-column", 64, undefined, "/#contact", false);
                }
                await this.addToOutput(cmd.about, undefined, 64);
                await this.addToOutput(cmd.about_reachme, undefined, 32, undefined, "/#contact", false);
                break;
            }
            case "contact": {
                if (args.length !== 1) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("1\n");
                    await this.addToOutput(msg);
                    break;
                }
                await this.addToOutput(cmd.contact_github, undefined, 192, undefined, "https://github.com/MicJagger");
                await this.addToOutput(cmd.contact_linkedin, undefined, 192, undefined, "https://www.linkedin.com/in/michael-jagiello/");
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
                await this.addToOutput(cmd.education);
                await this.addToOutput(["", " "]);
                await this.addToOutput(cmd.experience);
                await this.addToOutput(["", " "]);
                if (localStorage.getItem("format") === "verywide") {
                    await this.addToOutput(cmd.skills_verywide);
                }
                else {
                    await this.addToOutput(cmd.skills);
                }
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
            case "init": {
                if (args.length !== 1) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("1\n");
                    this.addToOutput(msg);
                    break;
                }
                await this.addToOutput(cmd.splash, undefined, 64);
                await this.addToOutput(["", "running in... a web browser\n"], undefined, 32);
                await this.addToOutput(["", "windowWidth=" + window.innerWidth.toString() + "\n"], undefined, 32);
                await this.addToOutput(["", "windowHeight=" + window.innerHeight.toString() + "\n"], undefined, 32);
                await this.addToOutput(["", "loading...\n"], undefined, 32);
                break;
            }
            case "projects": {
                if (args.length !== 1) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("1\n");
                    await this.addToOutput(msg);
                    break;
                }
                await this.addToOutput(cmd.projects);
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