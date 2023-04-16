let racers = [
    {
      "_id": "626f49083c02d34756c30442",
      "isActive": false,
      "timeToFinish": 149,
      "carColor": "yellow",
      "name": "Laura Freeman"
    },
    {
      "_id": "626f4908ee4f6541ab4f4492",
      "isActive": false,
      "timeToFinish": 149,
      "carColor": "black",
      "name": "Susana Hines"
    },
    {
      "_id": "626f4908f837dbced50eded2",
      "isActive": true,
      "timeToFinish": 137,
      "carColor": "brown",
      "name": "Elise Gates"
    },
    {
      "_id": "626f4908d977eee06b1ba728",
      "isActive": true,
      "timeToFinish": 72,
      "carColor": "black",
      "name": "Washington Leblanc"
    },
    {
      "_id": "626f4908ae9bf27c641c3b98",
      "isActive": false,
      "timeToFinish": 138,
      "carColor": "brown",
      "name": "Paulette Rogers"
    },
    {
      "_id": "626f4908486da0b41293f0d3",
      "isActive": true,
      "timeToFinish": 76,
      "carColor": "green",
      "name": "Ewing Patton"
    },
    {
      "_id": "626f49083d54119787b45650",
      "isActive": true,
      "timeToFinish": 107,
      "carColor": "brown",
      "name": "Klein Murray"
    },
    {
      "_id": "626f49081ef00f3dde009050",
      "isActive": true,
      "timeToFinish": 115,
      "carColor": "green",
      "name": "Justine Rodriquez"
    }
  ];
  
function findWinner(acc, racer){
    if(acc.timeToFinish < racer.timeToFinish){
        return acc;
    }else{
        return racer;
    }
    
}

  let winnerRacer = racers.reduce(findWinner); 
  console.log(winnerRacer);
  
  // Use the reduce method to find the racer who has won the race.