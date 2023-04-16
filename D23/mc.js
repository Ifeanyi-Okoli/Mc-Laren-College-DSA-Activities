// Align Text
// Allowed Time: 45 mins

// You will be given a single-lined text, expected width of the aligned text and alignment whether, left, right or center.The longest word will never be greater than the width.

// Have a look at examples to understand better.

// Notes
// Each line should contain as many words as possible.
// Use '\n' to separate lines.
// '\n' is not included in the length of a line.
// Last line should not contain '\n'
// Hint
// You will need to use pad methods like padStart and padEnd.
// Example
// Input: 
// let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
// let width = 30
// let alignment = right

// Output:
//   Lorem Ipsum is simply dummy 
//      text of the printing and 
//   typesetting industry. Lorem 
// Ipsum has been the industry's 
//      standard dummy text ever 
//      since the 1500s, when an 
// unknown printer took a galley 
//   of type and scrambled it to 
// make a type specimen book. It 
//    has survived not only five 
//  centuries, but also the leap 
//  into electronic typesetting, 
//         remaining essentially 
//                    unchanged. 



// Input: 
// text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
// width = 20
// alignment = center

// Output:
//   Lorem Ipsum is    
//  simply dummy text  
// of the printing and 
//     typesetting     
//   industry. Lorem   
// Ipsum has been the  
// industry's standard 
//   dummy text ever   
//  since the 1500s,   
//   when an unknown   
//   printer took a    
// galley of type and  
//   scrambled it to   
//     make a type     
//  specimen book. It  
//  has survived not   
//      only five      
// centuries, but also 
//    the leap into    
//     electronic      
//    typesetting,     
//      remaining      
//     essentially     
//     unchanged.        

function alignText(text, width, alignment) {
    let arr = text.split(" ");
    // console.log(arr);
    let word = [];
    let str = "";
    let res = "";
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        word.push(arr[i]);
        count += arr[i].length + 1;
        if (count >= width) {
            word.pop();
            str = word.join(" ");
            let len = str.length;
            if (len < width && alignment === "right") {
                let space = width - len;
                str = str.padStart(space, " ");
                res += str + "\n";
            }

        }
    }
    return res;
}




let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
let width = 30;
let alignment = "right";


console.log(alignText(text, width, alignment));


'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6, "123465"); // "123abc"