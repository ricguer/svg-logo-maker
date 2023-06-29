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
        return `<circle cx="50%" cy="50%" r="50" fill="${this.color}"/>`;
    }
};

class Triangle extends Shape {
    render() {
        return `<polygon points="150,0 0,200 300,200" fill="${this.color}"/>`
    }
};

class Square extends Shape {
    render() {
        return `<rect width="300" height="200" fill="${this.color}"/>`;
    }
};

module.exports = {Circle, Triangle, Square, Shape};
