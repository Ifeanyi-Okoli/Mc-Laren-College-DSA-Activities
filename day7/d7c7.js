//Write down your function tracing

function rossy(state) {
    return (state === 4);
}

function maxwell(a, b) {
    return rossy(a) || (a > b);
}

function hammer(k, seelo, pop) {
    if (seelo) {
        return rossy(k) ? pop + k : k + pop;
    }
    else {
        return k - pop;
    }
}


let nameB = hammer('magic',  maxwell(-2, -3), 'butter');
console.log(nameB);

/*
FUNCTION TRACE
maxwell(-2, -3)
  rossy(-2)
    return false
  retrun true

hammer('magic',  maxwell(-2, -3), 'butter')
hammer('magic',  true, 'butter')
  rossy('magic')
    return false
  return 'magicbutter'  
console.log('magicbutter')
*/