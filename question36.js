"use strict";
/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function. */
const make_shirt = (size, message) => console.log(`size: ${size} , message:${message}`);
//call the function
let size = "Medium";
let messageis = "Typescript Insights";
make_shirt(size, messageis);
make_shirt("Large", "Learning Typescript ");
