class Shape {
    constructor (color) { 
        this.color = color;
    };

    render() {
        throw new Error("Shape child \"render\" function has not been implemented.");
    }
};

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.color}"/>`;
    }
};

class Triangle extends Shape {

};

class Square extends Shape {

};

module.exports = {Circle, Triangle, Square, Shape};
