

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

    public getInput() {
        const value = document.querySelector("input")?.value;
        console.log(value);
    }

    public addText(text: string, className?: string) {

    }

    public addToInput(char: string) {
        this.input = this.input.concat(char);

        const input = document.getElementById(this.inputLocation);
        input!.textContent = this.input;

        //const newSection = document.createElement("p");
        //input?.appendChild(newSection);
    }

    public popInput() {
        if (this.input.length > 0) {
            this.input = this.input.slice(0, this.input.length - 1);

            const input = document.getElementById(this.inputLocation);
            input!.textContent = this.input;
        }
    }

    public clearInput() {

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
                    // handle
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
    
        /*

        var elements = document.getElementsByClassName("input")
        for (var i = 0; i < elements.length; i++) {
            elements[i].innerHTML = elements[i].innerHTML.replace(/i/g, "")
        }

        */
    }
}



export {}