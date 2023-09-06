/* Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for
 the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')*/

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car=== 'subaru'); // True

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // False

console.log("Is car' === 'subaru'? I predict True.");
console.log(car ==='subaru'); // True

console.log("Is car' === 'Subaru'? I predict True.");
console.log(car ==='Subaru'); // False

console.log("Is car' !== 'toyota'? I predict True.");
console.log(car ==='toyota'); // True

console.log("Is car' !== 'Subaru'? I predict True.");
console.log(car!=='Subaru'); // True

console.log("Is car' !== 'mazda'? I predict True.");
console.log(car!=='mazda'); // True

let age = 25;

console.log("Is age > 18? I predict True.");
console.log(age > 18); // True

console.log("Is age < 21? I predict False.");
console.log(age< 21); // False