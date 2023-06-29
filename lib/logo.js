const { Circle, Triangle, Square, Shape } = require("./shapes.js");

class Logo {
    constructor (userInput) {
        const shapeMap = {
            Circle:    Circle,
            Triangle:  Triangle,
            Square:    Square
        };

        this.logoText        =  userInput.logoText;
        this.logoTextColor   =  userInput.logoTextColor;
        this.logoShapeColor  =  userInput.logoShapeColor;
        this.logoShape       =  new (shapeMap[userInput.logoShape] || Shape)(this.logoShapeColor);
    };

    render() {
        return (
`<svg viewBox="0 0 300 200">
    ${this.logoShape.render()}
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="${this.logoTextColor}">${this.logoText}</text>
</svg>`
        );
    }
};

module.exports = Logo;
