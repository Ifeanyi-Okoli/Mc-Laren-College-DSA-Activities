function maxwell(a, b) {
    return (a === 4) || (a > b);
}

function hammer(kop, dop, pop) {
    if (dop) {
        return pop + kop;
    }
    else {
        return kop - pop;
    }
}

// Guess Output
let nameA = hammer(6,  maxwell(2, 3), 4);
console.log(nameA);
/*
maxwell(2, 3)
    return false
hammer(6,  false, 4)
    return 2
*/