"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
let guestList = ["Sir Zia", "Sir Sajid", "Sir Abid Shirwani", "Sir Jahanzaib Tayyab ", "Sir Zakka"];
exports.guestList = guestList;
guestList.forEach((guestName) => {
    console.log(`Dear ${guestName},You are invited to dinner please join us.`);
});
