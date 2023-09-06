"use strict";
/* They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items.*/
const bouquet = {
    name: "Spring Flowers",
    price: 250,
    description: "Beautiful arrangement of flowers",
};
//define an array of objects
let bouquets = [];
//Pushing multiple objects 
bouquets.push(bouquet);
bouquets.push({
    name: "Summer Bliss",
    price: 350,
    description: "Beautiful arrangement of summer flowers"
});
let bouquet3 = {
    name: "red hot",
    price: 450,
    description: "Beautiful arrangement of red roses",
};
bouquets.push(bouquet3);
bouquets.push({
    name: "Freshness",
    price: 550,
    description: "Beautiful arrangement of white and yellow flowers",
});
console.log(bouquets);
//Function to display bouquets 
function displayBouquets(bouquets) {
    for (let i of bouquets) {
        console.log(`
       Title: ${i.name}
        description: ${i.description}
        price: ${i.price}
        ______________________________\n `);
    }
}
displayBouquets(bouquets);
