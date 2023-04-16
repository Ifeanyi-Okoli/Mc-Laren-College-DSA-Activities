function totalPoints(guesses, word) {
	let total = 0;
	for (let guess of guesses) {
		const len = guess.length;
		let possible = true;
		let w = word;
		for (let i = 0; i < len; i++) {
			if (w.includes(guess[0])) {
				const pos = w.indexOf(guess[0]);
				w = w.slice(0, pos) + w.slice(pos + 1);
				guess = guess.slice(1);
			} else {
				possible = false;
				break;
			}
		}
		if (possible) {
			total += len - 2 + (len === 6 ? 50 : 0);
		}
	}
	return total;
}


console.log(totalPoints(["cat", "create", "sat"], "caster")); // 2
// Since "create" is an invalid word.

console.log(totalPoints(["trance", "recant"], "recant")); // 58
// // "trance" scores 54 pts, while "recant" scores only 4 because it is the same word as the input.

console.log(totalPoints(["dote", "dotes", "toes", "set", "dot", "dots", "sted"], "tossed")); // 13
// Since 2 + 3 + 2 + 1 + 1 + 2 + 2 = 13