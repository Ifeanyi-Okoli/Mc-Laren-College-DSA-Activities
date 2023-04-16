// Word Suggestions from Keypad
// Given a string containing digits from 2-9 inclusive, return all possible valid English words that the number could represent. Return the answer in alphabetical order.

// You are given a list of 10000 English words in the file english_words.txt which you can use to check if any word is a valid word or not.

// See here to find out how to read files in nodejs.

// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



// Examples
Input: digits = "23"
Output: [
    'ad', 'ae', 'af',
    'bd', 'be', 'cd',
    'ce', 'cf'
]
// so if you look at the above input, given keystroke is "23", and we know for 2 in keypad we have a, b, c as the choice similarly for 3 we have d, e, f as the choice.So by combining each possibility alot of words can be formed now to see whether they are valid or not we have to look at english_words.txt and see if formed word exist in it or not.
    Input: digits = "6463"
Output: ['mime', 'mind', 'mine', 'nine']
Input: digits = "43556"
Output: ['hello']