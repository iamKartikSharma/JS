const accountId = 144553
let accountEmail ="kartik@google.com"
var accountPassword ="12345"
accountCity ="nangal"
let accountState;

// accountId = 2// not allowed

accountEmail = "ks@ks.com"
accountPassword = "21212121"
accountCity ="delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState])
