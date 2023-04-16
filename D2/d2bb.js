function printLayout (arr){   
    for (let i = 0; i < arr.length; i++){
                console.log(arr[i].join(" | "));
    }
    }

    let farm = [['W', 'C', 'C'], ['C', 'C', 'C'], ['W', 'W', 'C'], ['C', 'C', 'W']];

printLayout(farm);
// should print 
// W | C | C
// C | C | C
// W | W | C
// C | C | W