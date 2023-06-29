                                                                /* ===================== IMPORTS ====================== */
const inquirer = require("inquirer");
const fs = require("fs");
const Logo = require("./lib/logo.js")


                                                                /* ================= GLOBAL VARIABLES ================= */
const svgDir          =  "./examples";
const svgFileName     =  "svgLogo.svg";
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

/**
 * Generates SVG file using the rendered logo.
 * @param {string} renderedLogo rendered logo according to user specifications
 */
function createSvgFile(renderedLogo) {

                                                                /* Synchronously write SVG file                         */
    fs.writeFileSync(`${svgDir}/${svgFileName}`, renderedLogo, (error) => {
        error ? console.log(error) : console.log("Success!");
    });
}


/**
 * Creates logo object according to user specifications.
 * 
 * @param {*} userInput user response to inquire questions
 */
function generateSvgLogo(userInput) {
    let renderedLogo = ""
    try {
        const svgLogo = new Logo(userInput);
        renderedLogo = svgLogo.render();
    } catch (error) {
        console.log(error);
    }

    createSvgFile(renderedLogo);                                /* Create the SVG file using the rendered logo          */
}


/**
 * Initializes application by asking user for logo text 
 * and shape.
 */
function init() {
                                                                /* Inquirer and collect user responses to add to README */
    inquirer
    .prompt(questions)
    .then(response => generateSvgLogo(response));
}

init();                                                         /* Application entry point                              */
