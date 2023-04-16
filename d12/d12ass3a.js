function splitGroups(str) {
	let arr = [], s = str[0];
	for (let i = 1; i < str.length; i++) {
		if (str[i] !== str[i-1]) {
			arr.push(s)
			s = str[i];
		} else {
				s+= str[i]
			}
	}
	arr.push(s);
	return arr;
}

console.log(splitGroups("555"));// ➞ ["555"]

console.log(splitGroups("5556667788"));// ➞ ["555", "666", "77", "88"]

console.log(splitGroups("aaabbbaabbab"));// ➞ ["aaa", "bbb", "aa", "bb", "a", "b"]

console.log(splitGroups("abbbcc88999&&!!!_"));// ➞ ["a"