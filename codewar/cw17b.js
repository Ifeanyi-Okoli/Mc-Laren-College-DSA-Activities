function buildRowText(index, character) {
    let cols = '| | | | | | | | | |'.split('')
    cols[1 + index * 2] = character
    return cols.join('')
  }

  
console.log(buildRowText(2, 'A'));//, '| | |A| | | | | | |'
console.log(buildRowText(0, 'A'));//, '|A| | | | | | | | |'
console.log(buildRowText(8, 'A'));//, '| | | | | | | | |A|'