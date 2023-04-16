function isValid(str) {
   let check;
    let res = [];
    for (let i = 0; i < str.length; i++){
                if(str[i] === "(" || [str[i]] === "[" || [str[i]] === "{" ) res.push(str[i]);
            if(res.length===0) return false;
        switch(str[i]){
            case ")":
                check = res.pop();
                if (check === "{" || check === "[") return "Invalid";
                break;
            case "}":
                check = res.pop();
                if(check === "(" || check === "[") return "Invalid";
                break;

                case "]":
                check = res.pop();
                if(check === "(" || check === "{") return "Invalid";
                break;
        }
    }
       
    return "Valid"
  }


console.log(isValid('(()))')) //-> 'Invalid'
console.log(isValid('()')) //-> 'Valid'
console.log(isValid('()[]{}')) //-> 'Valid'
console.log(isValid('()({[]})')) //-> 'Valid'
console.log(isValid('()[]({}()')) //-> 'Invalid'
