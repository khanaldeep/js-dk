const accountId = 14456
let accountEmail = "deep@gmail.com"
var accountPassword = "1234"
accountCity = "Imadol"
let accountState;

// accountId = 2 //not allowed

accountEmail = "dk@google.com"
accountPassword = "232323"
accountCity = "Koteshwor"

console.log(accountId);
/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


