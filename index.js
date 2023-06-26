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
 * Error handler for file write operation.
 * @param {*} error error generated from writing to file
 */
function writeToFileErrorHandler(error) {
    error ? console.log(error) : console.log("Success!");
}

function createSvgFile(renderedShape) {
    const svgFileContent = `<svg>
        ${renderedShape}
</svg>`;

    fs.writeFileSync(`${svgDir}/${svgFileName}`, svgFileContent, writeToFileErrorHandler);
}

function generateSvgLogo(userInput) {
    let renderedShape = ""
    try {
        const svgLogo = new Logo(userInput);
        renderedShape = svgLogo.render();
    } catch (error) {
        console.log(error);
    }
    // TODO: Create SVG File using logo object
    createSvgFile(renderedShape);
}

function init() {
                                                                /* Inquirer and collect user responses to add to README */
    inquirer
    .prompt(questions)
    .then(response => generateSvgLogo(response));
}

init();
