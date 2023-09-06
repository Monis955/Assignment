"use strict";
/* Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.*/
// less than 2 years old, print a message that the person is a baby.
let age_ = 19;
if (age_ < 2) {
    console.log(`Age is ${age_}, The person is a baby.`);
}
else if (age_ < 4) {
    console.log(`Age is ${age_}, The person is a toddler.`);
}
else if (age_ < 13) {
    console.log(`Age is ${age_}, The person is a kid.`);
}
else if (age_ < 20) {
    console.log(`Age is ${age_}, The person is a teenager.`);
}
else if (age_ < 65) {
    console.log(`Age is ${age_}, The person is an adult.`);
}
else {
    console.log(`Age is ${age_}, The person is an elder.`);
}
// to test wiht difrent age
console.log("Test with different age");
age_ = 75;
if (age_ < 2) {
    console.log(`Age is ${age_}, The person is a baby.`);
}
else if (age_ < 4) {
    console.log(`Age is ${age_}, The person is a toddler.`);
}
else if (age_ < 13) {
    console.log(`Age is ${age_}, The person is a kid.`);
}
else if (age_ < 20) {
    console.log(`Age is ${age_}, The person is a teenager.`);
}
else if (age_ < 65) {
    console.log(`Age is ${age_}, The person is an adult.`);
}
else {
    console.log(`Age is ${age_}, The person is an elder.`);
}
