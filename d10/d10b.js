/*
In previous inclass challenge we implemented Rectangle class that helped us represent a 
colorful rectangle.
Now we would like to add some more properties and would like to also create a new class to 
represent circles as well.
For rectanlge
----------
properties: topLeftx, topLeftY, width, height, fillColor, borderColor
methods: getArea, getPerimeter, getDescription
For circle
---------
properties: centerX, centerY, radius, fillColor, borderColor
methods: getArea, getPerimeter, getDescription
Note: The Area and Perimeter should be rounded to 2 decimal places
*/

//Note: In each of the methods above the first line should be a console.log() statement 
//printing what operation is being performed. ie. for getArea method the first line should 
//be  `console.log('Calculating the area....');`

class Shape{
    constructor(fillColor, borderColor){
        this.fillColor=fillColor;
        this.borderColor=borderColor;
    }
}


class Rectangle {

    constructor(topLeftX, topLeftY, width, height, fillColor, borderColor) {
        this.topLeftX = topLeftX;
        this.topLeftY = topLeftY;
        this.width = width;
        this.height = height;
        this.fillColor = fillColor;
        this.borderColor = borderColor;

    }

    getPerimeter() {
        console.log('Calculating the perimeter...');
        return ((this.width + this.height) * 2).toFixed(2);
    }

    getArea() {
        console.log('Calculating the area...');
        return (this.width * this.height).toFixed(2);
    }

    getDescription() {
        console.log('Printing the description...');
        //   if (this.topLeftX === 10 && )the object is something like {topLeftX: 10, topLeftY: 10, myWidth: 10, myHeight: 4, fillColor: 'red', borderColor:'Green'} then the output should be 'Its a red-filled green bordered rectangle';
        return `Its a ${this.fillColor}-filled ${this.borderColor} bordered rectangle`;
    }
}

let rectangle1 = new Rectangle(15, 20, 17, 30, "blue", "green")
// const rectangleXYZ = new Rectangle(10, 10, 10, 20, 'red', 'blue')
console.log(rectangle1);
console.log(rectangle1.getPerimeter());
console.log(rectangle1.getDescription());
console.log(rectangle1.getArea());
// console.log(rectangleXYZ.getArea());

class Circle {

    constructor(centerX, centerY, radius, fillColor, borderColor) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
        this.fillColor = fillColor;
        this.borderColor = borderColor;

    }

    getPerimeter() {
        console.log('Calculating the perimeter...');
        return (2*3.142*(this.radius)).toFixed(2);
    }

    getArea() {
        console.log('Calculating the area...');
        return (3.142 *(this.radius) * (this.radius)).toFixed(2);
    }

    getDescription() {
        console.log('Printing the description...');
        //   if (this.topLeftX === 10 && )the object is something like {topLeftX: 10, topLeftY: 10, myWidth: 10, myHeight: 4, fillColor: 'red', borderColor:'Green'} then the output should be 'Its a red-filled green bordered rectangle';
        return `Its a ${this.fillColor}-filled ${this.borderColor} bordered circle`;
    }
}
let circle1 = new Circle(15, 20, 17, "blue", "green")
console.log(circle1);
console.log(circle1.getPerimeter());
console.log(circle1.getDescription());
console.log(circle1.getArea());