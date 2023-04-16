// Implement the function fizz which prints all the numbers from 1 to 100 but for every third number it prints `fizz` instead.
/* For eg. it should print: 
1
2
fizz
4
5
fizz
7
8
fizz
...
*/

function fizz() {
    let n = 1;
    while (n <= 100) {
        if (n % 3 === 0) {
            console.log("fizz")
        }
        else {
            console.log(n);
        }
        n++;
    }

}
fizz();