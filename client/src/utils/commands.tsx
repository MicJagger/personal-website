// newline at the end of these is optional
// it currently "does nothing", future changes may make it important
// it is best practice in case of future changes for line length support

export const about: string[] = [
"", "\n",
"", "Hey, I'm Michael! I'm a Software Engineer that enjoys making cool stuff, and learning something new every day.\n\n" +
"I am always looking to improve my skills and to gain more experience in anything computing.\n\n"
];

export const about_reachme: string[] = [
"link-unstyle white", "You can reach out to me ",
"white", "here",
"link-unstyle white", ".\n"
];

export const contact_github: string[] = [ 
"link-unstyle white", "GitHub\n",
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
"  ###########     ###########  \n" +
"   ######          #########   \n" +
"     #######       #######     \n" +
"       #####       #####       \n"
];

export const contact_linkedin: string[] = [ 
"link-unstyle linkedin", "LinkedIn\n",
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
"", " - Bachelor's of Science - \n",
"", " -   Computer Science    - \n",
];

export const experience: string[] = [
"font-title", "Experience\n",
"", "\n",
"font-large", "Computing Specialist\n",
"font-large", "Best Buy\n",
"", 
" - Exceeded store targets to be number one in sales for FY24Q2 with over $300k in revenue\n" +
" - Prioritize top-tier customer support to consistently hold above a 90% satisfaction rate\n" +
" - Foster a cohesive team atmosphere and train coworkers in computing competency\n",
"", "\n",
"", "I am looking to add more :)\n"
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
"", "    small, medium (def), large\n",
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

var projects: string[] = [
"", ""
];

export const project_bingo_simulator: string[] = [
"",
" "
];

export const project_localpro_connect: string[] = [
"",
" "
];

export const project_pwm_generator: string[] = [ 
"",
" "
];

export const skills: string[] = [
"font-title", "Skills\n",
"", "\n", "",
" - C && C++\n" +
" - Java\n" +
" - TypeScript && JavaScript    \n" +
" - HTML && CS\n" +
" - Python\n" +
" - C# && Unity\n" +
" - SQL\n" +
" - Git\n" +
" - Docker\n" +
" - Linux CLI\n" +
" - 3D Design in AutoCAD\n" + 
" - Server Hosting\n"
];

export const skills_verywide: string[] = [
"font-title", "Skills\n",
"", 
" - C && C++                      - Java                        \n" +
" - TypeScript && JavaScript      - HTML && CSS                 \n" +
" - Python                        - C# && Unity                 \n" +
" - SQL                           - Git                         \n" +
" - Docker                        - Linux CLI                   \n" +
" - 3D Design in AutoCAD          - Server Hosting              \n"
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

// build

// build projects
for (let i = 0; i < project_pwm_generator.length; i++) {
    projects.push(project_pwm_generator[i]);
}
export { projects };
