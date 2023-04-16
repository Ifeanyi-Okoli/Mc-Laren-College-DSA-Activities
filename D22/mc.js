// Permutate vowels
// Allowed time: 42 mins

// The Polish language is famous for its difficult to pronounce words with very few vowels. For example: Pszczyna, a town in Southern Poland, or scczescie, which means happiness.

// Your task is to create a function that would generate similar words with very few vowels. Specifically, all possible combinations from the given word, by preserving the consonants in place while swapping the vowel(s) in the word with other vowels to create as many possible permutations.

// For example: output for generator (Pszczyna) would produce an array: ['pszczyna', 'pszczyne', 'pszczyni', 'pszczyno', 'pszczynu'].

// Vowels are: A, E, I, O, and U

// Input: string (length > 0), that consists of only letter characters, of which no more than three vowels.

// Output: alphabetically sorted array of words in lowercase, with all possible combinations of vowels.

// Example


function wordGenerator(str){
    let vowels = ["a", "e", "i", "o", "u"];
    let result = [];
    result.push(str);
    for(let i = 0; i <str.length; i++){        
        if(vowels.includes(str[i])){
            let index = vowels.indexOf(str[i]);
            vowels.splice(index,1);
            for(let j = 0; j <vowels.length; j++){
                let newStr = str.replace(str[i], vowels[j]);
                result.push(newStr);
            }
        }
    }
    return result;
}

console.log(wordGenerator("Pszczyna"))   //  ['pszczyna', 'pszczyne', 'pszczyni', 'pszczyno', 'pszczynu']
console.log(wordGenerator("aa"))   //  ['aa', 'ae', 'ai', 'ao', 'au', 'ea', 'ee', 'ei', 'eo', 'eu', 'ia', 'ie', 'ii', 'io', 'iu', 'oa', 'oe', 'oi', 'oo', 'ou', 'ua', 'ue', 'ui', 'uo','uu']
console.log(wordGenerator("B"))   //  ['b']