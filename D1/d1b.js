let userData = [22, false, "vivek", "Goa"];
let res = userData[userData[0] % 7] || userData[3] === "vivek";

console.log(res);

/*
userData[userData[0] % 7]
userData[22 % 7]
userData[1]
false
*/
