// Exercise 1: The Sweetest Ice Cream
// Create a function which takes an array of instances from the class 
// IceCream and returns the sweetness value of the sweetest icecream.

// Sweetness is calculated from the flavor and number of sprinkles. Each 
// sprinkle has a sweetness value of 1, and the sweetness values for the 
// flavors are as follows:

// Flavors	Sweetness Value
// Plain	0
// Vanilla	5
// ChocolateChip	5
// Strawberry	10
// Chocolate	10
// You'll be given instance properties in the order flavor, numSprinkles.

// Examples:
class IceCream{
    constructor(Plain, Vanilla, ChocolateChip, Strawberry, Chocolate){
        this.Plain = 0;
        this.Vanilla = 5;
        this.ChocolateChip = 5;
        this.Strawberry = 10;
        this.Chocolate = 10

    }
    //getter
    get plai(){
        return this.getPlain();
    }
    get van(){
        return this.getVanilla();
    }
    get chocchip(){
        return this.getChocolateChip();
    }
    get berry(){
        return this.getStrawberry();
    }
    get choc(){
        return this.getChocolate();
    }
    //method
    getPlain(){
        return this.Plain;
    }
    getVanilla(){
        return this.Vanilla;
    }
    getChocolateChip(){
        return this.ChocolateChip;
    }
    getStrawberry(){
        return this.Strawberry;
    }
    getChocolate(){
        return this.Chocolate;
    }
}

function sweetestIcecream(arr){

}

ice1 = new IceCream("Chocolate", 13)         // value of 23
ice2 = new IceCream("Vanilla", 0)           // value of 5
ice3 = IceCream("Strawberry", 7)        // value of 17
ice4 = IceCream("Plain", 18)             // value of 18
ice5 = IceCream("ChocolateChip", 3)      // value of 8

console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5])); // should return 23

console.log(sweetestIcecream([ice3, ice1])); // should return 23

console.log(sweetestIcecream([ice3, ice5])); // should return 17
// Notes
// Remember to only return the sweetness value.


/*

// Exercise 1 - Given code. Please modify it to get desired output
class IceCream {}

function sweetestIcecream(iceCreams) {}


*/