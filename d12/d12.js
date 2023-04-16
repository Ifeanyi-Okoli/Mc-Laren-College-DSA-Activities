class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }
}

let rect1 = new Rectangle(117, 23);
let rect2 = new Rectangle(17, 123);
let rect3 = new Rectangle(11, 323);
let rect4 = new Rectangle(7, 453);


let rectangles = [rect1, rect2, rect3, rect4];



// Find the largest area in the area `rectangles` using reduce method
// Make sure the final answer is stored in `largestArea` variable
let getLargestArea = ((acc, rectangle)=>{
    if(acc<rectangle.getArea()){
        acc = rectangle.getArea();
    }
    return acc;
})
let largestArea = rectangles.reduce(getLargestArea, 0);
console.log(largestArea);



// Find the rectangle with the largest area using the reduce method.
let getLargestRectangle = (acc, rectangle)=>{
    if(acc.getArea() < rectangle.getArea()){
        acc = rectangle;
    }
    return acc;
};

let largestRectangle = rectangles.reduce(getLargestRectangle);
console.log(largestRectangle);
