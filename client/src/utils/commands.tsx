// do not put a newline at the end of any of these

export const about: string[] = [ 
"", 
" "
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
"       #####       #####       "
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
"+++++++++++++++++++++++++++++++"
];

export const copyright_thin: string[] = [
"", 
"  Copyright © 2025 Michael Jagiello\n" + 
"         All Rights Reserved"
]

export const copyright_verywide: string[] = [
"", 
"                                Copyright © 2025 Michael Jagiello\n" + 
"                                        All Rights Reserved"
]

export const copyright_wide: string[] = [
"", 
"            Copyright © 2025 Michael Jagiello\n" + 
"                    All Rights Reserved"
]

// push the expected value at the end
export var expected_arg_count: string[] = [
"", "Incorrect number of arguments. Expected: ",
"green"
];

export const experience: string[] = [ 
"",
" "
]; 

export const font_list: string[] = [
"", "List of fonts: \n",
"green", "small    medium    large"
];

export const help: string[] = [
"", "Commands:\n",
"green", "    help\n",
"", "        you're already here\n",
"green", "    clear\n",
"", "        clears the terminal\n",
"green", "    font\n",
"", "        changes the default font size\n",
"green", "    about\n",
"", "        tells you stuff about me\n",
"green", "    experience\n",
"", "        rattles off my experiences, skills, and education\n",
"green", "    contact\n",
"", "        lists contact information and other socials\n",
"green", "    copyright\n",
"", "        prints basic copyright information\n",
"green", "    projects\n",
"", "        gives a few examples of cool stuff i did"
];

export const invalid: string[] = [
"", "Invalid command. ",
"", "Try \"",
"green", "help",
"", "\" for a list of commands."
];

export const name: string[] = [ "font-small",
"     __  __  _        _                   _        _                _        _  _        \n" +
"    |  \\/  |(_)      | |                 | |      | |              (_)      | || |       \n" +
"    | \\  / | _   ___ | |__    __ _   ___ | |      | |  __ _   __ _  _   ___ | || |  ___  \n" +
"    | |\\/| || | / __|| '_ \\  / _` | / _ \\| |  _   | | / _` | / _` || | / _ \\| || | / _ \\ \n" +
"    | |  | || || (__ | | | || (_| ||  __/| | | |__| || (_| || (_| || ||  __/| || || (_) |\n" +
"    |_|  |_||_| \\___||_| |_| \\__,_| \\___||_|  \\____/  \\__,_| \\__, ||_| \\___||_||_| \\___/ \n" +
"                                                              __/ |                      \n" +
"                                                             |___/                       "
]

export const namefirst: string[] = [ "font-small",
"  __  __  _        _                   _ \n" +
" |  \\/  |(_)      | |                 | |\n" +
" | \\  / | _   ___ | |__    __ _   ___ | |\n" +
" | |\\/| || | / __|| '_ \\  / _` | / _ \\| |\n" +
" | |  | || || (__ | | | || (_| ||  __/| |\n" +
" |_|  |_||_| \\___||_| |_| \\__,_| \\___||_|\n" +
"                                         \n" +
"                                         \n"
];

export const namelast: string[] = [ "font-small",
"      _                _        _  _        \n" +
"     | |              (_)      | || |       \n" +
"     | |  __ _   __ _  _   ___ | || |  ___  \n" +
" _   | | / _` | / _` || | / _ \\| || | / _ \\ \n" +
"| |__| || (_| || (_| || ||  __/| || || (_) |\n" +
" \\____/  \\__,_| \\__, ||_| \\___||_||_| \\___/ \n" +
"                 __/ |                      \n" +
"                |___/                       "
];

var projects: string[] = [
"", ""
];

export const project_pwm_generator: string[] = [ 
"",
" "
];

export const try_help: string[] = [
"", "Try \"",
"green", "help",
"", "\" for a list of commands."
];

// build

// build projects
for (let i = 0; i < project_pwm_generator.length; i++) {
    projects.push(project_pwm_generator[i]);
}
export { projects };
