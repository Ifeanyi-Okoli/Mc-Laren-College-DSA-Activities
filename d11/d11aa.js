function simulateCoinToss(num){
    let getCoinToss = ()=> Math.random() <= 0.5 ? "H" : "T";
    let wallet = 100;
    for(let i = 0; i < num; i++){
        if(getCoinToss() === "H"){
            wallet += Math.round(wallet*0.5);
        }else{
            wallet = wallet - Math.round(wallet*0.4);
        }
    }
return "$" + wallet;
}
console.log(simulateCoinToss(10000)); // should return something like `$x`