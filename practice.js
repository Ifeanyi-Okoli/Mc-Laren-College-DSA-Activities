function countNeighbouringCoins(arr){

    for(let i=0;i<arr.length;i++){
      for(let j=0;j<arr[i].length;j++){
        if(arr[i][j]===' '){
          checkCoins(arr,i,j);
      }
     
    }
    
    }
     return arr;
    }
    function checkCoins(arr,row,col){
      let offset=[-1,0,1];
      let count=0;
      for(let i=0;i<offset.length;i++){
        for(let j=0;j<offset.length;j++){
          if(row+offset[i]>=0 && col+offset[j]>=0 && row+offset[i]<arr.length && col+offset[j]<arr.length){
            if(arr[row+offset[i]][col+offset[j]]==='$'){
              count++;
            }
          }
        }
      }
      arr[row][col]=count;
    }
    console.log(countNeighbouringCoins([[' ',' ','$'],
                                        [' ','$',' '],
                                        ['$',' ','$']]));
    //should return 
    //[[ 1 , 2 ,'$'],
    // [ 2 ,'$', 3 ],
    // ['$', 3 ,'$']]
    
    console.log(countNeighbouringCoins([[' ',' '],
                                        [' ','$']]));
    //should return 
    //[[ 1 , 1 ],
    // [ 1 ,'$']]
    
    console.log(countNeighbouringCoins([[' ',' ','$',' '],
                                        [' ','$',' ',' '],
                                        ['$',' ','$',' '],
                                        [' ',' ','$',' ']]));
    //should return 
    //[[ 1 , 2 ,'$', 1 ],
    // [ 2 ,'$', 3 , 2 ],
    // ['$', 4 ,'$', 2 ],
    // [ 1 , 3 ,'$', 2 ]]