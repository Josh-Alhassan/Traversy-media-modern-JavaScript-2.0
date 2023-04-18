let x;
// Array Literal

const numbers = [12, 45, 33, 29, 39];
const mixed = [12, "Hello", true, null];

// Array constructor
const fruits = new Array('apple', 'grape', "Orange");

// Access first item of array
x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favourite fruit is an ${fruits[2]}`;

// Length property is used to know how many items we have in an array

x = numbers.length;

fruits[2] = "Pears";

// Hack to use to add items to the end of an array item
fruits[3] = 'Strawberry'

fruits[fruits.length] = "Blueberry"
x = fruits

console.log(x)