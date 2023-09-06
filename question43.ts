/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.*/
function make_great(magicians:string[]):string[]{
    const greatMagicians:string[]=magicians.map(magician=> `The great ${magician}`)
return greatMagicians;
}
const greatMagiciansNames:string[]=make_great(magicianNames)
//calling the original function 
console.log("Original Magicians:")
console.log(magicianNames)
//calling the great magicians
console.log("Great Magicians:")
console.log(greatMagiciansNames)