let numberList = [11, 55, 32, 66, 82, 90, 1, 5, 93];
numberList.sort(compare);
console.log(numberList);

function compare(elementA, elementB) {
    if (elementA < elementB) {
      return -1;
    }
    if (elementA >elementB) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }