/*Intentional Error: If you haven’t received an array index error in one of your programs yet, 
try to make one happen.Change an index in one of your programs to produce an index error. 
Make sure you correct the error before closing the program. */

// function to creat a fruit object
function creatFruit (name:string ,color:string , taste :string){
    return {
        name,
        color,
        taste,
    }
    }
    //create an array of fruits
    const fruits=[
        creatFruit("Apple", "red", "sweet"),
        creatFruit("Banana", "yellow", "sweet"),
        creatFruit("Orange", "orange", "sweet"),
        creatFruit("Pineapple", "red", "sweet"),
        creatFruit("Mango", "red", "sweet"),
    ]
    //Access an invalid index
    const invalidIndex = 10 //Invalid index
    console.log(`fruits at invalid index ${invalidIndex}`,fruits [invalidIndex])
    //print the fruits
    fruits.forEach((fruit)=>{
      console.log(`name: ${fruit.name} ,color: ${fruit.color},taste: ${fruit.taste}`)
    })
    