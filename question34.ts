/*Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.*/

//Define an array of favourite pizza 
const favouritePizzas = ["pepperoni", "Margherita", "BBQ Chicken"]
//Print the name of each pizza using for loop
console.log("My favourite pizzas are:")
for(let i = 0; i < favouritePizzas.length; i++)
    {
        console.log(favouritePizzas[i])
    }
//print a sentence for each favourite pizza
console.log("\nMy favourite pizzas are:")
for(let i = 0; i < favouritePizzas.length; i++)
{
console.log(`I like ${favouritePizzas[i]} Pizza!`)}
//Print additional sentence about how much i like pizza
console.log("\n I really Love Pizzas!")