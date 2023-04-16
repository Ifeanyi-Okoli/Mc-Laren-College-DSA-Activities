//Expression Trace SampKey
//expressoinTraceSampKey.js
// Write an expression trace for the following code


let samp = 30;
let key = 'safah';
let k = samp % 2 === 1 ? 'sro' : key + '-sro';
key = key + (key - samp) === false;
if (((samp - 17) % 5 < 5) && key) {
    samp = samp + 1;
}
else {
    samp = samp + (samp / 10);
}
console.log(k, key, samp);
/*
EXPRESSION TRACE
Line 6:
samp % 2 === 1 ? 'sro' : key + '-sro'
30 % 2 === 1 ? 'sro' : 'safah' + '-sro'
0 === 1 ? 'sro' : 'safah' + '-sro'
false ? 'sro' : 'safah' + '-sro'
'safah' + '-sro'
'safah-sro'

LINE 7:
key + (key - samp) === false
'safah' + ('safah' - 30) === false
'safah' + NaN === false
'safahNaN' === false
false

LINE 8:
((samp - 17) % 5 < 5) && key
((30 - 17) % 5 < 5) && false
(13 % 5 < 5) && false
(3 < 5) && false
true && false

LINE 9:
samp + 1
30 + 1
31

LINE 12:
samp + (samp / 10)
31 + (31 / 10)
31 + 3.1
34.1

LINE 14:
k, key, samp
'safah-sro', false, 34.1
*/