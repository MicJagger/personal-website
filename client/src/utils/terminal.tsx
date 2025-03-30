import * as cmd from './commands';

export class Terminal {
    public id: string;
    public outputLocation: string;
    public inputLocation: string;

    // limits length of I/O, or limits what is displayed
    // TODO: currently output restrictions are not implemented, implement them at some point : )
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

        this.outputLengthLimit = 1000;
        this.outputVisibilityLimit = 48;
        this.inputLengthLimit = 1000;
        this.inputVisibilityLimit = 48;

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

    public commitInput() {
        const output = document.getElementById(this.outputLocation);
        const newPiece = document.createElement("span");
        newPiece.className = "font-default";
        newPiece.textContent = "> " + this.input;
        output!.appendChild(newPiece);
        this.outputNewline();
        this.executeCommand(this.input);
        this.clearInput();
    }

    // dont chain these without async management
    public async addToOutput(message: string[], sectionClass?: string, charsPerSecond?: number, bypassLimits?: boolean) {

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
        var newSection = document.createElement("section");
        if (sectionClass !== null && sectionClass !== undefined) {
            newSection.className = sectionClass;
        }
        output!.appendChild(newSection);
        var newPiece: HTMLSpanElement;
        for (let i = 0; i < message.length; i++) {
            
            // even indices indicate styling
            if (i % 2 === 0) {
                newPiece = document.createElement("span");
                newSection!.appendChild(newPiece);
                newPiece.className = message[i];
            }
            // odd indices indicate messaging
            else {
                for (let j = 0; j < message[i].length; j++) {
                    if (message[i].charAt(j) === "\n") {
                        // gather details to begin new line with same details
                        newPiece!.textContent += " ";
                        
                        // output newline
                        const newLine = document.createElement("p");
                        newSection!.appendChild(newLine);

                        if (j < message[i].length - 1) {
                            newPiece = document.createElement("span");
                            newSection!.appendChild(newPiece);
                            newPiece.className = message[i - 1];
                        }
                    }
                    else {
                        newPiece!.textContent += message[i].charAt(j);
                    }
                    // if space, skip sleep cycle (to tab faster)
                    if (message[i].charAt(j) !== " ") {
                        await this.sleepFor(sleepTime);
                    }
                }
            }
        }

        // output newline
        const newLine = document.createElement("p");
        newSection!.appendChild(newLine);

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
        this.commitInput();
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
                    msg.push("1");
                    this.addToOutput(msg);
                    break;
                }
                this.addToOutput(cmd.help);
                break;
            }
            case "about": {
                if (args.length !== 1) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("1");
                    this.addToOutput(msg);
                    break;
                }
                if (localStorage.getItem("format") === "desktop") { // name is horizontal
                    await this.addToOutput(cmd.name, "font-small");
                }
                else { // name is vertical
                    await this.addToOutput(cmd.namefirst, "font-small", undefined, true);
                    await this.addToOutput(cmd.namelast, "font-small", undefined, true);
                }
                this.addToOutput(cmd.about, "", undefined, true);
                break;
            }
            case "contact": {
                if (args.length !== 1) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("1");
                    this.addToOutput(msg);
                    break;
                }
                this.addToOutput(cmd.contact);
                break;
            }
            case "copyright": {
                if (args.length !== 1) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("1");
                    this.addToOutput(msg);
                    break;
                }
                //this.addToOutput(cmd.copyright);
                break;
            }
            case "experience": {
                if (args.length !== 1) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("1");
                    this.addToOutput(msg);
                    break;
                }
                this.addToOutput(cmd.experience);
                break;
            }
            case "font": {
                if (args.length !== 2) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("2");
                    this.addToOutput(msg);
                    break;
                }
                if (args[1] === "small") {
                    this.changeFont("font-small");
                    this.addToOutput(["", "Changed font size."]);
                }
                else if (args[1] === "medium") {
                    this.changeFont("font-medium");
                    this.addToOutput(["", "Changed font size."]);
                }
                else if (args[1] === "large") {
                    this.changeFont("font-large");
                    this.addToOutput(["", "Changed font size."]);
                }
                else {
                    this.addToOutput(cmd.font_list);
                }
                break;
            }
            case "projects": {
                if (args.length !== 1) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("1");
                    this.addToOutput(msg);
                    break;
                }
                this.addToOutput(cmd.projects);
                break;
            }
            default: {
                this.addToOutput(cmd.invalid);
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