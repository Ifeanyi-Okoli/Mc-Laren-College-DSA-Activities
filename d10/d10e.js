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
    pointIsInside(x, y) {
        if(x > this.topLeftX && x < this.topLeftX + this.width && y < this.topLeftY && y > this.topLeftY-this.height){
            return true;
        }
        else{
            return false;
        }
    }
}

class Circle extends Shape {
    constructor(centerX, centerY, radius, fillColor, borderColor) {
        super(fillColor, borderColor);
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
    pointIsInside(x, y) {
        let a = Math.pow(x - this.centerX, 2);
        let b = Math.pow(y - this.centerY, 2);
        let d = Math.sqrt(a + b);
        if (d > this.radius) {
            return false;
        }
        return true;
    
    }
}



class Square extends Shape {
    constructor(topLeftX, topLeftY, width, height, fillColor, borderColor) {
        super(fillColor, borderColor);
        this.topLeftX = topLeftX;
        this.topLeftY = topLeftY;
        this.width = width;
        this.height = height;

    };
    getDescriptionAtPoint() {
        console.log('Getting the descriptionAtPoint...')
        return `Mouse pointer is over a ${this.fillColor} rectangle`
    }
    addShape() {
        myCanvas;
    }
}


class Canvas {
    constructor(shapes) {
        this.shapesList = shapes;

    };
    getDescriptionAtPoint() {
        console.log('Getting the descriptionAtPoint...')
        return `Mouse pointer is over a ${this.fillColor} rectangle`
    }
    addShape(shapes) {
        this.shapesList.push(shapes);
    }
}




let rec1 = new Rectangle(10, 5, 5, 5, 'purple', 'purple');

let rec2 = new Rectangle(5, 20, 5, 6, 'blue', 'blue');
let rec3 = new Rectangle(22, 23, 4, 8, 'pink', 'pink');

let cir1 = new Circle(10, 10, 2, 'blue', 'blue');
console.log(cir1.pointIsInside(15, 15));
let circ2 = new Circle(25, 5, 5, 'blue', 'blue');
let sqr1 = new Square(5, 5, 5, 5, 'red', 'purple');

let sqr2 = new Square(8, 8, 8, 8, 'blue', 'green');
// let myCanvas = new Canvas([rec1, rec2, rec3, cir1, circ2]);



let myCanvas = new Canvas([rec1, rec2, rec3, cir1, circ2]);

// Circle.pointIsInside();
// Rectangle.pointIsInside();
console.log(myCanvas);

//Part 2
// We have already completed the part 1 of the exercise and in part 2 we are trying to
//represent a drawing canvas in which various shapes are drawn.

// Part 2.1xcfggyvbg8ff
// Now lets create a class Canvas and below are the properties and methods that this
//class supports.

//properties: shapesList, which will contain objects of either Rectangle or Circle.

//Also create a canvas object which will have atleast 3 shapes.



// Part 2.2
// Now modify Rectangle and Circle class by adding a method to check if a point exists
// inside the given object. Call the method as pointIsInside.

// Make sure to test the method pointIsInside by calling it with different points.

// Part 2.3
// Now add given methods to Canvas class.

// methods: addShape, getDescriptionAtPoint

// Note: getDescriptionAtPoint method return a string like "Mouse pointer is over a red circle" or "Mouse pointer is over a green rectangle" or "Mouse pointer is not over any shape" if point doesn't lie in any shape. (Hint: Modify the getDescription function in both Circle and Rectangle class to return 'Red circle' or 'Blue Rectangle' like string).

// Note: For circle for a point to be inside it the distance of point from the center of circle must be less than or equal to radius. For more clarity try drawing the diagram and you will understand it. You can read about how to calculate the distance between two points from here

// Part 2.4(Homework)
// Create a new class called Square now and it should extend the Shape class. And add an
//object of this class to Canvas you have created.
