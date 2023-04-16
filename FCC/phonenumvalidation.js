function telephoneCheck(str) {
    let hasTenDigits = false;
    let hasElevenDigits = false;
    let startsWithOne = false;
    let hasPermittedCharsOnly = false;
    let hasCorrectParentheses = false;
  
    const tenDigitRegex = /\d{10}/;
    const elevenDigitRegex = /\d{11}/;
    const startWithOneRegex = /^(1){1}/;
    const permittedCharsRegex = /[0-9\-\(\) ]/;
    const correctParenthesesRegex = /^\([0-9]{3}\)$/;
  
    if (str.match(tenDigitRegex)) {
      hasTenDigits = true;
    }
  
    if (str.match(elevenDigitRegex)) {
      hasElevenDigits = true;
    }
  
    if (str.match(startWithOneRegex)) {
      startsWithOne = true;
    }
  
  
  }

  telephoneCheck("555-555-5555");