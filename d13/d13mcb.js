const PI = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 8, 9, 7, 9];

const sum = arr => arr.reduce((total, num) => total + num, 0);

const pilishString = txt => {
	if (txt.length === 0) return '';
	const len = txt.length;
	const arr = [];

	for (let i = 0; i < PI.length; i++) {
		arr.push(PI[i]);
		if (sum(arr.slice(0, arr.length - 1)) < len && sum(arr) >= len) break;
	}
	let output = [];
	txt = [...txt];
	
	for (let i = 0; i < arr.length; i++) {
		let d = txt.splice(0, arr[i]).join``;
		console.log(d);
		const l = d.length;
		if (l < arr[i]) d = d + d[l - 1].repeat(arr[i] - l);
		output.push(d);
	}

	return output.join` `;
}

console.log(pilishString("33314444"));// // "333 1 4444"
// 3.14

console.log(pilishString("TOP"));//// "TOP"
// 3

console.log(pilishString("X"));// // "XXX"
// "X" has to match the same length of the first digit (3)
// The last letter of the word is repeated

console.log(pilishString(""));//➞ ""