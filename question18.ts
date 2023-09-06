//step 1 creat an array to store travel destinations 
let travelDestination : string[]=["Tokyo", "Paris" ,"Madinah Munawara","Caymn","St Maartin"]
//step 2 Print your array in its original order
console.log("Original order")
console.log(travelDestination)
//step 3  Print your array in alphabetical order without modifying the actual list.
console.log("\n array in alphabetical order")
console.log([...travelDestination].sort())
//step 4 Show that your array is still in its original order by printing it.
console.log("\n Showing  array is still in its original order.")
console.log(travelDestination)
//step 5  Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n array in reverse alphabetical order")
console.log([...travelDestination].sort().reverse())
//step 6  Show that your array is still in its original order by printing it again.
console.log("\n Showing  array is still in its original order.")
console.log(travelDestination)
//step 7 Reverse the order of your list. Print the array to show that its order has changed.
console.log("\n Revere order.")
travelDestination.reverse()
console.log(travelDestination)
//step 8 Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\n Back to original.")
travelDestination.reverse()
console.log(travelDestination)
/*step 9 Sort your array so it’s stored in alphabetical order.
Print the array to show that its order has been changed.*/
console.log("\n Change to Alphabetical order.")
travelDestination.sort()
console.log(travelDestination)
/*step 10 Sort to change your array so it’s stored in reverse alphabetical order. 
Print the list to show that its order has changed.*/
console.log("\n Change to  Reverse Alphabetical order.")
travelDestination.sort().reverse()
console.log(travelDestination)