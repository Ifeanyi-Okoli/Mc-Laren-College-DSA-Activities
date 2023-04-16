//Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
//IPs should be considered valid if they consist of four octets, with values between 0 and 255, 
//inclusive.

function isValidIP(str) {
    //let arr = str.split(" ");
    let arr1 = str.split(".");  
    //console.log(arr1);
    if (arr1.length !== 4){
        return false;
    }
    for (let i = 0; i < arr1.length; i++){
        
        if (arr1[i].indexOf(" ") !== -1){
            return false;
        }
        if (isNaN(arr1[i])){
            return false;
        }
        
        if (parseInt(arr1[i]) < 0 || parseInt(arr1[i]) >255 || arr1[i] === "4\n"){
            return false;
        }
    }
    return true;
  }

  console.log(isValidIP("0.0.0.0"));//true
  console.log(isValidIP("12.255.56.1"));//true
  console.log(isValidIP("137.255.156.100"));//true
  
  console.log(isValidIP(''));//false
  console.log(isValidIP('abc.def.ghi.jkl'));//false