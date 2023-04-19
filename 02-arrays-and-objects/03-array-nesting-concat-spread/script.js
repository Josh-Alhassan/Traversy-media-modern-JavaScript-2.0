let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// Nesting Array

// Nesting berries inside of fruits
fruits.push(berries);

// Now we can access 'blueberry' witht the following
x = fruits[3][1];

// Create a new variable and nest both arrays
const allFruits = [fruits, berries];

x = allFruits[1][2]

// concat() - Concatenate Arrays
x = fruits.concat(berries);

// Spread Operator(...)
x = [...fruits, ...berries]

// flat() - Flatten an array
const arr = [1,2, [3,4], 5, 6, [7,8]];
x = arr.flat()

// Static methods of Array of object

// isArray() - Check if is an array
x = Array.isArray(fruits)

// of() - Create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a,b,c);

console.log(fruits)
console.log(allFruits)

console.log(x)