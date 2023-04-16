// Part A
// We are trying to several colorful type of rectangles, your task is to 
//create Class that will help us to create different rectangles based on 
//color, width and height.
class Rectangle {
    constructor(color, width, heigth){
        this.color = color;
        this.heigth = heigth;
        this.width = width;
    }
    //getter
    get area(){
        return this.getArea();
    }
    get col(){
        return this.getColor();
    }
    get perimeter(){
        return this.getPerimeter();
    }
    //method
    getColor(){
        return this.color;
    }
    getPerimeter(){
        return 2 *(this.heigth + this.width)
    }
    getArea(){
        return this.width * this.heigth;
    }
}

let obj = new Rectangle ("blue", 15, 10);
console.log(obj);
console.log(obj.area);
console.log(obj.col);
console.log(obj.perimeter);
// Part B
// Inside the class we also need functions getColor, getPerimeter and 
// getArea to help us get the color,perimeter and area of the rectangle object.

// Part C
// We also need a getInfo function that prints the color, area and perimeter of the a rectangle to the console.

// class Rectangle {
//   constructor() {
    
//   }
// }