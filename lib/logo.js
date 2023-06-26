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
        return this.logoShape.render();
    }
};

module.exports = Logo;
