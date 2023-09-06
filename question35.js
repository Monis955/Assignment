"use strict";
/*Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!  */
//List of animals with common characteristics
const animals = ["cat", "dog", "goat"];
//Print the name of each animal using for loop
console.log("List of animals:");
for (const animal of animals) {
    console.log(animal);
}
//print a statement about each animal
console.log("Statement about each animal:");
for (const animal of animals) {
    if (animal === "dog") {
        console.log(`A ${animal} would make a great pet!`);
    }
    else if (animal === "goat") {
        console.log(`A ${animal} would be a great companion at home`);
    }
    else if (animal === "cat") {
        console.log(`A ${animal} is an adorable pet also givs us milk!`);
    }
}
//common Characteristics
console.log("What these animals have in common:");
console.log("Any of these animals could be a great pet!");
