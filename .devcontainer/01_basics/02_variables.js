const accountId=144553
let accountEmail="devansh@google.com"
var accountPassword="12345"
accountCity="Delhi"

// accountId=2 // not allowed constant(const) can't changes

/*
   Prefer not to use var Keyword
   because of issue in blockscope and functional scope
*/

accountEmail="hc@hc.com"
accountPassword="2121212"
accountCity="Uttar Pradesh"
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity])
