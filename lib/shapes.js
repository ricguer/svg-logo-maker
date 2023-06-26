class Shape {
    constructor (color) { 
        this.color = color;
    };

    render() {
        throw new Error("Shape child \"render\" function has not been implemented.");
    }
};

class Circle extends Shape {

};

class Triangle extends Shape {
    constructor (color) {
        super.color = color;
    };
};

class Square extends Shape {
    constructor (color) {
        super.color = color;
    };
};

module.exports = {Circle, Triangle, Square, Shape};
