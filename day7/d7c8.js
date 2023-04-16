function printval(a, b){
    console.log(a);
    return;
    console.log(b);  // will not be executed because it came after the rturn statement
}
printval(2, 3);