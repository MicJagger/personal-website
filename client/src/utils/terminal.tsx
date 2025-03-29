import './commands'
import { cmd_help, cmd_invalid } from './commands';

export class Terminal {
    public outputLocation: string;
    public inputLocation: string;
    
    private allowUserInput: boolean;
    private input: string;

    public constructor(outputLoc: string, inputLoc: string) {
        this.outputLocation = outputLoc;
        this.inputLocation = inputLoc;
        this.allowUserInput = false;
        this.input = "";

        console.log("init terminal");
    };


    // user input setters

    public enableUserInput() {
        if (this.allowUserInput === false) {
            window.addEventListener("keydown", this.handleKey);
            this.allowUserInput = true;
            console.log("enabled user input");
        }
    }

    public disableUserInput() {
        if (this.allowUserInput === true) {
            window.removeEventListener("keydown", this.handleKey);
            this.allowUserInput = false;
            console.log("disabled user input");
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

    public addToOutput(message: string[], charsPerSecond?: number) {

        function sleep(charsPerSecond: number) {
            return new Promise(resolve => setTimeout(resolve, 1000 / charsPerSecond));
        }

        var charSpeed: number;
        if (charsPerSecond !== null) {
            charSpeed = 3;
        }
        else {
            charSpeed = charsPerSecond;
        }

        // message is split into even and odd indices 
        for (let i = 0; i < message.length; i++) {
            let output = document.getElementById(this.outputLocation);
            let newSection = document.createElement("span");
            // even indices indicate styling
            if (i % 2 === 0) {
                newSection.className = message[i];
            }
            // odd indices indicate messaging
            else {
                for (let j = 0; j < message[i].length; j++) {
                    if (message[i].charAt(j) === "\n") {
                        output!.appendChild(newSection);
                        // gather details to begin new line with same details
                        this.outputNewline();
                        newSection = document.createElement("span");
                        newSection.className = message[i - 1];
                    }
                    else {
                        newSection.textContent += message[i].charAt(j);
                    }
                    sleep(charSpeed).then(() => {});
                }
                output!.appendChild(newSection);
            }
        }
    }


    // input management

    public addToInput(char: string) {
        this.input = this.input.concat(char);
        const input = document.getElementById(this.inputLocation);
        input!.textContent = this.input;
    }

    public popInput() {
        if (this.input.length > 0) {
            this.input = this.input.slice(0, this.input.length - 1);
            const input = document.getElementById(this.inputLocation);
            input!.textContent = this.input;
        }
    }

    public clearInput() {
        this.input = "";
        const input = document.getElementById(this.inputLocation);
        input!.textContent = this.input;
    }

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
            case "help": {
                if (args.length > 1) {
                    console.log("Unnecessary arguments");
                }
                cmd_Help(this);
                break;
            }

            default: {
                cmd_Invalid(this);
                break;
            }
        }
    }

}

const cmd_Invalid = (terminal: Terminal) => {
    terminal.addToOutput(cmd_invalid);
    terminal.outputNewline();
}

const cmd_Help = (terminal: Terminal) => {
    terminal.addToOutput(cmd_help);
    terminal.outputNewline();
}

export {}