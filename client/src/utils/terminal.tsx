import * as cmd from './commands';

export class Terminal {
    public id: string;
    public outputLocation: string;
    public inputLocation: string;

    // limits length of I/O, or limits what is displayed
    // currently output restrictions are not implemented
    public outputLengthLimit: number;
    public outputVisibilityLimit: number;
    public inputLengthLimit: number;
    public inputVisibilityLimit: number;
    
    private allowUserInput: boolean;
    private input: string;

    public constructor(terminalID: string, outputLoc: string, inputLoc: string) {
        this.id = terminalID;
        this.outputLocation = outputLoc;
        this.inputLocation = inputLoc;

        this.outputLengthLimit = 1000;
        this.outputVisibilityLimit = 32;
        this.inputLengthLimit = 1000;
        this.inputVisibilityLimit = 32;

        this.allowUserInput = false;
        this.input = "";

        console.log("init terminal");
    };


    // user input setters

    public enableUserInput() {
        if (this.allowUserInput === false) {
            window.addEventListener("keydown", this.handleKey);
            this.allowUserInput = true;
            console.log("enabled user input on terminal " + this.id);
            // enable cursor
            var loc: string = "c" + this.id;
            console.log(loc);
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


    // output management

    public outputNewline() {
        const output = document.getElementById(this.outputLocation);
        const newSection = document.createElement("p");
        output!.appendChild(newSection);
    }

    public commitInput() {
        const output = document.getElementById(this.outputLocation);
        const newSection = document.createElement("span");
        newSection.className = "font-default font-medium";
        newSection.textContent = "> " + this.input;
        output!.appendChild(newSection);
        this.outputNewline();
        this.executeCommand(this.input);
        this.clearInput();
    }

    // dont chain these without async management
    public async addToOutput(message: string[], charsPerSecond?: number) {

        var keyboardWasEnabled: boolean = this.allowUserInput;
        if (keyboardWasEnabled) {
            window.removeEventListener("keydown", this.handleKey);
        }

        function charSpeedLimiter(charsPerSecond: number) {
            return new Promise(resolve => setTimeout(resolve, 1000 / charsPerSecond));
        }

        var charSpeed: number;
        if (charsPerSecond !== null) {
            charSpeed = 32;
        }
        else {
            charSpeed = charsPerSecond;
        }

        // message is split into even and odd indices
        let output = document.getElementById(this.outputLocation); 
        for (let i = 0; i < message.length; i++) {
            var newSection: HTMLSpanElement;
            // even indices indicate styling
            if (i % 2 === 0) {
                newSection = document.createElement("span");
                output!.appendChild(newSection);
                newSection.className = message[i];
            }
            // odd indices indicate messaging
            else {
                for (let j = 0; j < message[i].length; j++) {
                    if (message[i].charAt(j) === "\n") {
                        // gather details to begin new line with same details
                        newSection!.textContent += " ";
                        this.outputNewline();
                        if (j === message[i].length) {
                            newSection = document.createElement("span");
                            output!.appendChild(newSection);
                            newSection.className = message[i - 1];
                        }
                    }
                    else {
                        newSection!.textContent += message[i].charAt(j);
                    }
                    // if space, skip sleep cycle (to tab faster)
                    if (message[i].charAt(j) !== " ") {
                        await charSpeedLimiter(charSpeed);
                    }
                }
            }
        }
        this.outputNewline();
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

    public executeCommand(text: string) {
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
            case "print": {
                if (args.length < 2) {
                    let msg: string[] = cmd.expected_arg_count;
                    msg.push("2+");
                    this.addToOutput(msg);
                    break;
                }
                if (args[1] === "about") {
                    if (args.length > 2) {
                        let msg: string[] = cmd.expected_arg_count;
                        msg.push("2");
                        this.addToOutput(msg);
                        break;
                    }
                    this.addToOutput(cmd.print_about);
                }
                else if (args[1] ==="contact") {
                    this.addToOutput(cmd.print_contact);
                }
                else if (args[1] === "experience") {
                    if (args.length > 2) {
                        let msg: string[] = cmd.expected_arg_count;
                        msg.push("2");
                        this.addToOutput(msg);
                        break;
                    }
                    this.addToOutput(cmd.print_experience);
                }
                else if (args[1] === "projects") {
                    
                }
                break;
            }
            default: {
                this.addToOutput(cmd.invalid);
                break;
            }
        }
    }


    // other


}