function maxwell(a, b){
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
let nameA = hammer(6, maxwell(2, 3), 4)
console.log(nameA);

/*
FUNCTION TRACE
maxwell(2, 3)
  return false //indent by 2 spaces

hammer(6, false, 4)
  return 2

*/