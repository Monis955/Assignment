"use strict";
/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/
// version 1 runs the if block
let alienColor = 'green';
if (alienColor === 'green') {
    console.log("Congratulation! You just earned 5 points for shooting the alien");
}
else {
    console.log("Congratulation! You just earned 10 points for shooting the alien");
}
// version 2 runs the else block
alienColor = 'blue';
if (alienColor === 'green') {
    console.log("Congratulation! You just earned 5 points for shooting the alien");
}
else {
    console.log("Congratulation! You just earned 10 points for shooting the alien");
}
