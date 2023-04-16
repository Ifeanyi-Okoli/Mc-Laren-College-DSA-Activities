// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

let withinRange = value =>value < 0? 0: value > 255 ? 255: value;

let pad = value => value.length === 1 ? "0" + value : value;

let toHex = value => pad(value.toString(16).toUpperCase());

let convert = value => toHex(withinRange(value));
function rgb(r, g, b){
    return `${convert(r)}${convert(g)}${convert(b)}`;
  }


console.log(rgb(255, 255, 255)) // returns FFFFFF
console.log(rgb(255, 255, 300)) // returns FFFFFF
console.log(rgb(0,0,0)) // returns 000000
console.log(rgb(148, 0, 211)) // returns 9400D3