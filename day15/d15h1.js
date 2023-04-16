//Super Heroes
// SuperHeroes.md
// Given the following object, "superheroes" :

// write a statement to access weight of hulk character using [ ] operator
// write a statement to add a new item 'nuclear weapon' to powers of Iron man using [ ] operator.
// write a statement to calculate the total weight of all the different characters using [ ] operator.
// Do everything again using . operator (if possible)
let superheroes = {
    'hulk': {
        color: 'green',
        powers: ['fly', 'heavy'],
        weight: 200,
        family: 'Marvel'
    },
    'thanos': {
        color: ['brown'],
        powers: ['strong', 'infinity stones'],
        weight: 300,
        family: 'Marvel'
    },
    'superman': {
        color: 'white',
        powers: ['alien', 'fly'],
        weight: 190,
        family: 'DC'
    },
    'iron man': {
        color: 'white',
        powers: ['technical', 'fly'],
        weight: 145,
        family: 'Marvel'
    },
}
superheroes["hulk"]["weight"];
let output1 = superheroes["hulk"]["weight"];
console.log(output1);

superheroes["iron man"]["powers"][2] = "nuclear weapon";
console.log(superheroes);

let totalWeight = superheroes["hulk"]["weight"] + superheroes["iron man"]["weight"] + superheroes["superman"]["weight"] + superheroes["thanos"]["weight"];
console.log(totalWeight);


superheroes.hulk.weight;
console.log(superheroes.hulk.weight);

superheroes['iron man'].powers[2] = 'nuclear weapon';
console.log(superheroes);

sum = superheroes.hulk.weight + superheroes.thanos.weight + superheroes.superman.weight + superheroes['iron man'].weight;
console.log(sum);
