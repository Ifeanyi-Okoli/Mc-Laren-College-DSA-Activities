for (let i = 0; i < 5; i++){
    if (i === 3){
        break; // breaks you out of the loop and takes you to line 7, which is the end of the for loop.
    }
    console.log("I am inside the for loop");
}
console.log("I am outside the for loop");