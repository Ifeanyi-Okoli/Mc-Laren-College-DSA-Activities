let populationByState = {
    India: 99020000,
    Goa: 1817000,
    Maharashtra: 114200000
}
let state = "India";
let population = populationByState.state;// when the keyname is a variable, we use the square operator
population = populationByState[state];
console.log(population);