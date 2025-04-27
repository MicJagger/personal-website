// newline at the end of these is optional
// it currently "does nothing", future changes may make it important
// it is best practice in case of future changes for line length support

export const about: string[] = [
"", "\n",
"", "Hey, I'm Michael! I'm a Software Engineer and computer nerd that enjoys making cool stuff, and learning something new every day.\n\n" +
"I am always looking to improve my skills and to gain more experience in anything computing.\n\n"
];

export const about_reachme: string[] = [
"link-unstyle white", "You can reach out to me using my ",
"white innerHTML", "<a class=\"white bolden\" href=\"/#contact\">contacts</a>",
"link-unstyle white", ".\n"
];

const styleGit = " class=\"link-unstyle white\"";
const styleLinkedIn = " class=\"link-unstyle linkedin\"";

const linkGit = " href=\"https://github.com/MicJagger\"";
const linkLinkedIn = " href=\"https://www.linkedin.com/in/michael-jagiello/\""

const openNewTab: string = " target=\"_blank\" rel=\"noopener noreferrer\"";

const gitStuff = styleGit + linkGit + openNewTab;
const linkedinStuff = styleLinkedIn + linkLinkedIn + openNewTab;

export const contacts_verywide: string[] = [
"innerHTML", "<a " + gitStuff + ">         #############         </a>   ", "innerHTML", "<a " + linkedinStuff + ">+++++++++++++++++++++++++++++++</a>\n",
"innerHTML", "<a " + gitStuff + ">      ###################      </a>   ", "innerHTML", "<a " + linkedinStuff + ">+++++++++++++++++++++++++++++++</a>\n",
"innerHTML", "<a " + gitStuff + ">    #######################    </a>   ", "innerHTML", "<a " + linkedinStuff + ">+++++=  -++++++++++++++++++++++</a>\n",
"innerHTML", "<a " + gitStuff + ">   ##########################  </a>   ", "innerHTML", "<a " + linkedinStuff + ">++++      +++++++++++++++++++++</a>\n",
"innerHTML", "<a " + gitStuff + ">  ######  ###########  ####### </a>   ", "innerHTML", "<a " + linkedinStuff + ">++++:     +++++++++++++++++++++</a>\n",
"innerHTML", "<a " + gitStuff + "> #######               ####### </a>   ", "innerHTML", "<a " + linkedinStuff + ">+++++====++++++++++++++++++++++</a>\n",
"innerHTML", "<a " + gitStuff + ">#######                 #######</a>   ", "innerHTML", "<a " + linkedinStuff + ">++++=    -++-   :=:     -++++++</a>\n",
"innerHTML", "<a " + gitStuff + ">######                   ######</a>   ", "innerHTML", "<a " + linkedinStuff + ">++++=     ++              =++++</a>\n",
"innerHTML", "<a " + gitStuff + ">######                   ######</a>   ", "innerHTML", "<a " + linkedinStuff + ">++++=     ++              .++++</a>\n",
"innerHTML", "<a " + gitStuff + ">######                   ######</a>   ", "innerHTML", "<a " + linkedinStuff + ">++++=     ++     -+++-     ++++</a>\n",
"innerHTML", "<a " + gitStuff + ">#######                 #######</a>   ", "innerHTML", "<a " + linkedinStuff + ">++++=     ++     =+++=     ++++</a>\n",
"innerHTML", "<a " + gitStuff + ">#########             #########</a>   ", "innerHTML", "<a " + linkedinStuff + ">++++=     ++     =+++=     ++++</a>\n",
"innerHTML", "<a " + gitStuff + "> ############     ############ </a>   ", "innerHTML", "<a " + linkedinStuff + ">++++=     ++     =+++=     ++++</a>\n",
"innerHTML", "<a " + gitStuff + ">  ####   ####     ###########  </a>   ", "innerHTML", "<a " + linkedinStuff + ">++++=     ++     =+++=     ++++</a>\n",
"innerHTML", "<a " + gitStuff + ">   #####           #########   </a>   ", "innerHTML", "<a " + linkedinStuff + ">++++=    :++:   .=++++    .++++</a>\n",
"innerHTML", "<a " + gitStuff + ">     #######       #######     </a>   ", "innerHTML", "<a " + linkedinStuff + ">+++++++++++++++++++++++++++++++</a>\n",
"innerHTML", "<a " + gitStuff + ">       #####       #####       </a>   ", "innerHTML", "<a " + linkedinStuff + ">+++++++++++++++++++++++++++++++</a>\n"
];

export const contact_github: string[] = [ 
"link-unstyle white",
"         #############         \n" +
"      ###################      \n" +
"    #######################    \n" +
"   ##########################  \n" +
"  ######  ###########  ####### \n" +
" #######               ####### \n" +
"#######                 #######\n" +
"######                   ######\n" +
"######                   ######\n" +
"######                   ######\n" +
"#######                 #######\n" +
"#########             #########\n" +
" ############     ############ \n" +
"  ####   ####     ###########  \n" +
"   #####           #########   \n" +
"     #######       #######     \n" +
"       #####       #####       \n"
];

export const contact_linkedin: string[] = [ 
"link-unstyle linkedin",
"+++++++++++++++++++++++++++++++\n" +
"+++++++++++++++++++++++++++++++\n" +
"+++++=  -++++++++++++++++++++++\n" +
"++++      +++++++++++++++++++++\n" +
"++++:     +++++++++++++++++++++\n" +
"+++++====++++++++++++++++++++++\n" +
"++++=    -++-   :=:     -++++++\n" +
"++++=     ++              =++++\n" +
"++++=     ++              .++++\n" +
"++++=     ++     -+++-     ++++\n" +
"++++=     ++     =+++=     ++++\n" +
"++++=     ++     =+++=     ++++\n" +
"++++=     ++     =+++=     ++++\n" +
"++++=     ++     =+++=     ++++\n" +
"++++=    :++:   .=++++    .++++\n" +
"+++++++++++++++++++++++++++++++\n" +
"+++++++++++++++++++++++++++++++\n"
];

export const copyright: string[] = [
"", 
"© 2025 Michael Jagiello\n" + 
"  All Rights Reserved\n"
];

// push the expected value at the end
export var expected_arg_count: string[] = [
"red", "Incorrect number of arguments.", 
"", " Expected: ",
"green"
];

export const education: string[] = [
"font-title", "Education\n",
"", "\n",
"", " - University of Florida - \n",
"", " -  Bachelor of Science  - \n",
"", " -   Computer Science    - \n",
];

export const experience: string[] = [
"font-title", "Experience\n",
"", "\n",
"font-large", "Computing Category Specialist\n",
"font-large", "Best Buy\n",
"", 
" - Exceeded store targets to be number one in sales for FY24Q2 with over $300k in revenue\n" +
" - Prioritized top-tier customer support to consistently hold above a 90% satisfaction rate\n" +
" - Fostered a cohesive team atmosphere and train coworkers in computing competency\n" +
" - Researched and developed resources to maintain team repository of detailed product information\n",
"", "\n",
"", "I am looking to expand this list :)\n"
];

export const font_list: string[] = [
"", "List of fonts: \n",
"green", "small    medium    large\n"
];

export const help: string[] = [
"", "Commands:\n",
"green", "  help\n",
"", "    you're already here\n",
"green", "  clear\n",
"", "    clears the terminal\n",
"green", "  font FONT_CHOICE\n",
"", "    changes the normal font size\n",
"", "    small, medium (default), large\n",
"green", "  about\n",
"", "    tells you stuff about me\n",
"green", "  experience\n",
"", "    rattles off my education, experience, and skills\n",
"green", "  contact\n",
"", "    lists contact information and other socials\n",
"green", "  copyright\n",
"", "    prints basic copyright info\n",
"green", "  projects\n",
"", "    gives a few examples of cool stuff i did\n"
];

export const invalid: string[] = [
"red", "Invalid command.",
"", " Try \"",
"green", "help",
"", "\" for a list of commands.\n"
];

export const name: string[] = [ "link-unstyle white font-small",
"     __  __  _        _                   _        _                _        _  _        \n" +
"    |  \\/  |(_)      | |                 | |      | |              (_)      | || |       \n" +
"    | \\  / | _   ___ | |__    __ _   ___ | |      | |  __ _   __ _  _   ___ | || |  ___  \n" +
"    | |\\/| || | / __|| '_ \\  / _` | / _ \\| |  _   | | / _` | / _` || | / _ \\| || | / _ \\ \n" +
"    | |  | || || (__ | | | || (_| ||  __/| | | |__| || (_| || (_| || ||  __/| || || (_) |\n" +
"    |_|  |_||_| \\___||_| |_| \\__,_| \\___||_|  \\____/  \\__,_| \\__, ||_| \\___||_||_| \\___/ \n" +
"                                                              __/ |                      \n" +
"                                                             |___/                       \n"
];

export const namefirst: string[] = [ "link-unstyle white font-small",
"  __  __  _        _                   _ \n" +
" |  \\/  |(_)      | |                 | |\n" +
" | \\  / | _   ___ | |__    __ _   ___ | |\n" +
" | |\\/| || | / __|| '_ \\  / _` | / _ \\| |\n" +
" | |  | || || (__ | | | || (_| ||  __/| |\n" +
" |_|  |_||_| \\___||_| |_| \\__,_| \\___||_|\n" +
"                                         \n" +
"                                         \n"
];

export const namelast: string[] = [ "link-unstyle white font-small",
"      _                _        _  _        \n" +
"     | |              (_)      | || |       \n" +
"     | |  __ _   __ _  _   ___ | || |  ___  \n" +
" _   | | / _` | / _` || | / _ \\| || | / _ \\ \n" +
"| |__| || (_| || (_| || ||  __/| || || (_) |\n" +
" \\____/  \\__,_| \\__, ||_| \\___||_||_| \\___/ \n" +
"                 __/ |                      \n" +
"                |___/                       \n"
];

export const newline: string[] = [
"", "\n"
];

// projects 

export const project_bingo_simulator: string[] = [ 
"",
"Bingo Simulator is a C++ algorithm and analyzer to run bingo cards in parallel, and track their moves to complete.\n" +
"It is a personal project of mine, and I had to rethink how I could do random card generation, as well as deal with multithreading.\n" +
"The program has been optimized to be able to run billions of cards per hour, and as such can give highly-precise distributions of card wins.\n" +
"\n"
];

export const project_bingo_simulator_title: string[] = [ 
"white font-large bolden", "Bingo Simulator"
];

export const project_gravity_simulator: string[] = [
"",
"This is a desktop application written in C++ that simulates real-time gravity, and displays the 3D objects using OpenGL.\n" +
"The simulator is built on multiple threads to handle the physics, input, and rendering separately.\n" +
"It draws the spheres and supports custom colors as well as simple directional lighting from the star of the system.\n" +
"It currently has a preset that spawns our solar system, which accurately and stably calculates the motions of the bodies.\n" +
"\n"
];

export const project_gravity_simulator_title: string[] = [
"white font-large bolden", "Gravity Simulator"
];

export const project_letter_boxed_solver: string[] = [
"",
"This is a website built on Typescript and Rust, utilizing WebAssembly.\n" +
"It solved the Letter Boxed game from The New York Times quickly on the client device using the compiled Rust code.\n" +
"I also included some moderate optimizations of my own, which allows even mobile devices to solve a higher order algorithm in milliseconds.\n"
];

export const project_letter_boxed_solver_link: string[] = [
"white bolden",
"Live Link"
];

export const project_letter_boxed_solver_title: string[] = [
"white font-large bolden", "Letter Boxed Solver"
];

export const project_localpro_connect: string[] = [ 
"",
"This is a website made by a team of mine, using the MERN stack in JavaScript, and ran using Docker.\n" +
"It features business and customer accounts, where businesses can post their available services and the locations they're available.\n" +
"From here, customers can view these listings, book services, and leave reviews and ratings on the businesses.\n" +
"\n"
];

export const project_localpro_connect_title: string[] = [ 
"white font-large bolden", "LocalPro Connect"
];

export const project_personal_website: string[] = [ 
"",
"This website right here! It's built using TypeScript, and of course HTML and CSS.\n" +
"These terminals are fully functional, and are not just animations.\n" +
"The terminal at the top of the page is usable, and once the input line is clicked you can run any of these commands and more.\n" +
"\n"
];

export const project_personal_website_title: string[] = [ 
"white font-large bolden", "Personal Website"
];

export const project_pwm_generator: string[] = [ 
"",
"This is a C++ library for ArduinoIDE-compatible microcontrollers to output custom PWM signals.\n" +
"Most microcontrollers will have an adequate number of PWM outputs to achieve analog voltage, but some may not have enough for a project's needs.\n" +
"This library allows the microcontroller to take non-PWM pins and pulse it within tight constraints to get precise, consistent voltages.\n" +
"\n"
];

export const project_pwm_generator_title: string[] = [ 
"white font-large bolden", "PWM Generator"
];

// Back to normal

export const skills: string[] = [
"font-title", "Skills\n",
"", "\n",
"font-large", "Frontend Web Design\n", "", 
" - TypeScript && Javascript\n" +
" - HTML && CSS\n" +
" - Rust in WebAssembly\n" +
" - React.js\n" +
" - Vue.js\n",
"", "\n",
"font-large", "Backend and Server Engineering\n", "", 
" - Golang\n" +
" - C && C++ Socketing\n" +
" - SQL\n" +
" - Server Hosting\n" +
" - Cloud Deployment\n",
"", "\n",
"font-large", "Application and Game Development\n", "",
" - Quasar + Electron.js (Vue.js)\n" +
" - Cross-platform C++\n" +
" - 3D OpenGL + SDL\n" +
" - C# && Unity\n",
"", "\n",
"font-large", "Everything Else\n", "",
" - Python\n" +
" - Embedded Programming\n" +
" - Git\n" +
" - Linux CLI\n" +
" - Docker\n" +
" - 3D Design in AutoCAD\n"
];

export const splash: string[] = [ 
"blue-brighter", 
"                .---. \n" +
"                |   | \n" +
" __  __   ___   '---' \n" +
"|  |/  `.'   `. .---. \n" +
"|   .-.  .-.   '|   | \n" +
"|  |  |  |  |  ||   | \n" +
"|  |  |  |  |  ||   | \n" +
"|  |  |  |  |  ||   | \n" +
"|  |  |  |  |  ||   | \n" +
"|__|  |__|  |__||   | \n" +
"             __.'   ' \n" +
"            |      '  \n" +
"            |____.'   \n"
];

export const try_help: string[] = [ 
"", "Try \"",
"green", "help",
"", "\" for a list of commands.\n"
];
