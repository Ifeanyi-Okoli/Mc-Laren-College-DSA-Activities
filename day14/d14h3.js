//social Account
// username.md
// Given the socialAccountDetails and selectedAccount, create a function that returns 
//the username for the selectedAccount.

function getUserName(account, accountDetails){
    let name =  accountDetails[account]["username"];
    return name;
}
let selectedAccount = "gmail";

let socialAccountDetails = {
  gmail: {
    username: "vivek123",
    password: "password123",
  },
  facebook: {
    username: "vivek",
    password: "password",
  },
};
console.log(getUserName(selectedAccount, socialAccountDetails));
