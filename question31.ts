/* No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed*/
//Non empty array case 
let userNames :string[] = ["admin", "Muhammad Ali", "Muhammad Azhar", "Muhammad Asim", "Muhammad Asif"]
//functional case
function greetUsers (usernames:string[]):void {
if(usernames.length==0){
    console.log("We need to find some users!")
    return
}

for(const username of userNames){
    if(username.toLowerCase() === "admin"){
        console.log("Hello admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello  ${username} , thank you for logging in again.`)
}}}
console.log(`For non empty username:\n`)
greetUsers(userNames)

// to make array empty we just assingn empty array to username
userNames=[]

console.log("for empty user name")
greetUsers(userNames)