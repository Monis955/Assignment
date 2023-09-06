let gues_tList = ["Sir Zia" ,"Sir Sajid" , "Sir Abid Shirwani" ,"Sir Jahanzaib Tayyab " ,"Sir Zakka"]
// print statement to the end of your program informing people that you found a bigger dinner table.
for(let guest of gues_tList){
    console.log(`Hello ${guest},We have found a bigger dinner table`)
}
//step 2 Add new step at the beginning of the Array 
let newGuestAtBeginning:string = "Sir Ali"
gues_tList.unshift(newGuestAtBeginning)
console.log(gues_tList)
//step 3Add new step at the Middle of the Array 
let newGuestImiddle:string="Sir Asim"
let middleIndex:number=Math.floor(gues_tList.length/2)
gues_tList.splice(middleIndex,0,newGuestImiddle)
console.log(gues_tList)
//step 4 use Append to add new guest at the end of your list
let newGuestAtEnd :string = "Sir Azhar"
gues_tList.push(newGuestAtEnd)
console.log(gues_tList)
//step 5 print a new set of invitation messages, one for each person in your list.
console.log(" new set of invitation messages, one for each person in your list")
gues_tList.forEach((guest:string)=>
{
console.log(`Dear ${guest} You are invited to Dinner`)
})