                                                                /* ===================== IMPORTS ====================== */
const inquirer = require("inquirer");
const fs = require("fs");
const Logo = require("./lib/logo.js")


                                                                /* ================= GLOBAL VARIABLES ================= */
const logoText        =  "logoText";
const logoTextColor   =  "logoTextColor";
const logoShape       =  "logoShape";
const logoShapeColor  =  "logoShapeColor";

const questions = [
    {
        type: "input",
        message: "Type in logo text (three letter maximum):",
        name: logoText
    },
    {
        type: "input",
        message: "Type in desired color to logo text (hex number or color keyword):",
        name: logoTextColor
    },
    {
        type: "list",
        message: "Select a shape for the logo:",
        name: logoShape,
        choices: [
            "Circle",
            "Triangle",
            "Square",
        ]
    },
    {
        type: "input",
        message: "Type in desired color for logo shape (hex number of color keyword)",
        name: logoShapeColor
    }
];


                                                                /* ================= GLOBAL FUNCTIONS ================= */
function generateSvgLogo(userInput) {
    try {
        const svgLogo = new Logo(userInput);
        svgLogo.render();
    } catch (error) {
        console.log(error);
    }
    // TODO: Create SVG File using logo object
}

function init() {
                                                                /* Inquirer and collect user responses to add to README */
    inquirer
    .prompt(questions)
    .then(response => generateSvgLogo(response));
}

init();
