"use strict";
/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
//step 1 
const current_users = ["Kamran", "Ali", "Burhan", "Assad", "Asif", "Ahmed"];
const new_users = ["asif", "kamRan", "Hassan", "Eshal", "ali"];
//step 2
function checkUserNames(current_users, new_users) {
    const lowercasedCurrentUsers = current_users.map(x => x.toLowerCase());
    for (const newUser of new_users) {
        const lowercasedNewUser = newUser.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedNewUser)) {
            console.log(`The username ${newUser} has already been used!`);
        }
        else {
            console.log(`The username ${newUser} is available!`);
        }
    }
}
checkUserNames(current_users, new_users);
