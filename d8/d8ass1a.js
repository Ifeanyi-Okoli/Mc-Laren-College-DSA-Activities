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
class IceCream {
    constructor(flavor, numSprinkles) {
        this.flavor = flavor
        this.numSprinkles = numSprinkles
    }
}

ice1 = new IceCream("Chocolate", 13)
ice2 = new IceCream("Vanilla", 0)
ice3 = new IceCream("Strawberry", 7)
ice4 = new IceCream("Plain", 18)
ice5 = new IceCream("ChocolateChip", 3)
ice6 = new IceCream("Chocolate", 23)
ice7 = new IceCream("Strawberry", 0)
ice8 = new IceCream("Plain", 34)

function sweetestIcecream(arrIce) {
    let flavors = {
        Plain: 0,
        Vanilla: 5,
        ChocolateChip: 5,
        Strawberry: 10,
        Chocolate: 10
    };
    let sweetnessValue = 0
    for (let i = 0; i < arrIce.length; i++) {
        let { flavor, numSprinkles } = arrIce[i];
        let currSweetness = flavors[flavor] + numSprinkles;
        if (currSweetness > sweetnessValue) {
            sweetnessValue = currSweetness;
        }
    }
    return sweetnessValue;
}


console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5])); // should return 23

console.log(sweetestIcecream([ice3, ice1])); // should return 23

console.log(sweetestIcecream([ice3, ice5]));
    // maxSweetnessValue = -Infinity;
    // for (let i in sweetnessValue, numSprinkles){        
    //     if(sweetnessValue[i] + numSprinkles[i] > maxSweetnessValue){
    //         maxSweetnessValue = sweetnessValue[i] + numSprinkles[i];
    //     }
    // }
    // return maxSweetnessValue;
// }

// let ice1 = new IceCream("Chocolate", 13)         // value of 23

// let ice2 = new IceCream("Vanilla", 0)           // value of 5
// let ice3 = new IceCream("Strawberry", 7)        // value of 17
// let ice4 = new IceCream("Plain", 18)             // value of 18
// let ice5 = new IceCream("ChocolateChip", 3)      // value of 8
// console.log(ice1.flavors);
// console.log(ice2.numSprinkles);

// should return 17
// Notes
// Remember to only return the sweetness value.

