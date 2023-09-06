"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_List = void 0;
let guest_List = ["Sir Zia", "Sir Sajid", "Sir Abid Shirwani"];
exports.guest_List = guest_List;
//step 1 print the name of person who can't make it
let guestWhoCantMakeIt = "Sir Sajid";
console.log(`${guestWhoCantMakeIt} can't make it to dinner`);
//step 2 Replace the name of guest who can't make it 
let newGuest = "Sir Ahmad ";
let indexOfGuestWhoCantMakeIt = guest_List.indexOf(guestWhoCantMakeIt);
//console.log(indexOfGuestWhoCantMakeIt)
if (indexOfGuestWhoCantMakeIt !== -1) {
    guest_List[indexOfGuestWhoCantMakeIt] = newGuest;
}
//console.log(guestList[1])
//step 3 Print a second set of invitation messages
console.log("Print a second set of invitation messages");
guest_List.forEach((guest) => {
    console.log(`Dear ${guest} You are invited to Dinner`);
});
