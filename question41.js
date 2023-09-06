"use strict";
/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */
const magicianNames = ["Harry porter", "David copperfield", "Hermioni Granger", "Professor Albus Dumbledore", "Ron Weasley"];
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
//Call the function
show_magicians(magicianNames);
