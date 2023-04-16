class Shape {
    constructor(fillColor, borderColor) {
        this.fillColor = fillColor;
        this.borderColor = borderColor;
    }

}

class Rectangle extends Shape {
    constructor(topLeftX, topLeftY, width, height, fillColor, borderColor) {
        super(fillColor, borderColor);
        this.topLeftX = topLeftX;
        this.topLeftY = topLeftY;
        this.width = width;
        this.height = height;

    }

    getPerimeter() {
        console.log('Calculating the perimeter...')
        // This method can be called by any object as from a single class we can create many objects. So to know which object we are try to access the value for you will have to use this keyword.
        return 2 * (this.myWidth + this.myHeight);
    }

    getArea() {
        console.log('Calculating the area...')
        // In all methods to access the properties inside an object we have to use this keyword.
        return this.myWidth * this.myHeight;
    }

    getDescription() {
        console.log('Getting the description...')
        return `Its a ${this.fillColor}-filled ${this.borderColor} boredered rectangle`
    }
    pointIsInside() {
        // let y = this.height+this.topLeftY;
        // let  x = this.width + this.topLeftX;
        if (x >= this.topLeftX && x <= this.width + this.topLeftX && y <= this.topLeftY && y >= this.topLeftY - this.height) {
            return true;
        }
        return false;
    }
}


class Circle extends Shape {
    constructor(centerX, centerY, radius, fillColor, borderColor) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;

    }

    getPerimeter() {
        console.log('Calculating the perimeter...')
        // This method can be called by any object as from a single class we can create many objects. So to know which object we are try to access the value for you will have to use this keyword.
        return 2 * Math.PI * this.radius;
    }

    getArea() {
        console.log('Calculating the area...')
        // In all methods to access the properties inside an object we have to use this keyword.
        return Math.PI * this.radius * this.radius;
    }

    getDescription() {
        console.log('Getting the description...')
        return `Its a ${this.fillColor}-filled ${this.borderColor} boredered circle`
    }
    pointIsInside() {
        let x1 = this.centerX - this.radius;
        let x2 = this.centerX + this.radius;
        let y1 = this.centerY - this.radius;
        let y2 = this.centerY + this.radius;
        let a = (x2 - x1) * (x2 - x1);
        let b = (y2 - y1) * (y2 - y1);
        let c = Math.sqrt(a + b);
        if (x >= this.topLeftX && x <= this.width + this.topLeftX && y <= this.topLeftY && y >= this.topLeftY - this.height) {
            return true;
        }
        return false;
    }
}


class Canvas {
    constructor(shapes) {
        this.shapesList = shapes;
    }
}

let rec1 = new Rectangle(10, 5, 5, 5, 'purple', 'purple');

let rec2 = new Rectangle(5, 20, 5, 6, 'blue', 'blue');
let rec3 = new Rectangle(22, 23, 4, 8, 'pink', 'pink');

let cir1 = new Circle(10, 10, 2, 'blue', 'blue');
let circ2 = new Circle(25, 5, 5, 'blue', 'blue');
let myCanvas = new Canvas([rec1, rec2, rec3, cir1, circ2]);

console.log(myCanvas);
