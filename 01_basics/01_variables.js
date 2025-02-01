const accountId = 144556
let accountEmail = "fardeen@gmail.com"
var accountpassword = "123"
accountcity = "jaipur";        

/*
   we mostly use const and let and should not choose to declare a variable without them. (like accountcity)
*/

// accountId = 2  ->not allowed to be reassigned to a variable who is defined using const


accountEmail = "khan@1gmail.com"
accountpassword = "1234"
accountcity = "delhi"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountpassword,accountcity])