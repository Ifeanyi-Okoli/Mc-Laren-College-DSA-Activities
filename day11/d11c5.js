// 9
// Create a loop trace for the following piece of code and write the console outputs.
let greeting = ['Hi', 'Namatse'];
let names = ['John', 'Prakash', 'Mahesh'];
let i = 0;
while (i < 2){
    let j = 0;
    while (j < 3){
        console.log(greeting[i] + " " + names[j]);
        j++;
    }
    i++;
}


/*
1. while 0 < 2, true, i = 0
 1.1 while 0 < 3, true, i = 0, j = 0
 1.2 while 1 < 3, true, i = 0, j = 1
 1.3 while 2 < 3, true, i = 0, j = 2
 1.4 while 3 < 3, false, i = 0, j = 3
2. while 1 < 2, true, i = 1
 2.1 while 0 < 3, true, i = 1, j = 0
 2.2 while 1 < 3, true, i = 1, j = 1
 2.3 while 2 < 3, true, i = 1, j = 2
 2.4 while 3 < 3, false, i = 1, j = 3
3. while 2 < 2, false, i = 2
*/