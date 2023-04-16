// Write a simulation function called simulateCoinToss. This function will take a variable 
//n which is number of simulations to run. 
//You start with 100$ in your wallet, and you are doing a coin toss. If Heads comes you 
// increase your amount by 50% and if Tails come then it decreases by 40%

// Return the final amount at the end of simulation.
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function simulateCoinToss(num){
    let i = num;
    while (i >0){
        getRandomInt(2);
    if(getRandomInt(2) === 0){
        num = num*0.4;
    }
    else if(getRandomInt(2) === 1){
        num = num*1.5;
    }
    num--;
}
return num;
}
simulateCoinToss(10000); // should return something like `$x`