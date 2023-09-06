"use strict";
let guestLis_t = [
    'Sir Ali',
    'Sir Zia',
    'Sir Sajid',
    'Sir Asim',
    'Sir Abid Shirwani',
    'Sir Jahanzaib Tayyab ',
    'Sir Zakka',
    'Sir Azhar'
];
//step 1 Add a new line that prints a message saying that you can invite only two people for dinner.
console.log("I can invite only two people for dinner.");
/*step 2  Remove guests from your list one at a time until only two names remain in your list.
 Each time you pop a name from your list, print a message to that person letting them know
 you’re sorry you can’t invite them to dinner*/
while (guestLis_t.length > 2) {
    let removeGuest = guestLis_t.pop();
    console.log(`Sorry!! ${removeGuest} , I can't invite you to dinner`);
}
/*step 3  Print a message to each of the two people still on your list, letting them know they’re
 still invited.*/
for (let guest of guestLis_t) {
    console.log(`Hello ${guest} ,you are still invited to Dinner!`);
}
/*step 4  Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program. */
guestLis_t.pop();
guestLis_t.pop();
// print empty string
console.log(`Guest list after dinner:`, guestLis_t);
