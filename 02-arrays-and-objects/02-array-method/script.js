let x;

const arr = [28, 38, 44, 29, 100];

// push() - Push a value on to the end of the array
arr.push(100);

// pop() - Take the last vlue off
arr.pop()

// unshift() - Add a value to the beginning of the array
arr.unshift(99);

// shift() - remove first value
arr.shift();

// reverse() - Reverse an array
arr.reverse();

// includes() - check to see if something is in the array
x = arr.includes(445)

// indexOf() - Return the index of the first match
x = arr.indexOf(28);

// Return array as a string
x = arr.toString();
x = arr.join();

// slice() - returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.

x = arr.slice(1,4);

// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. It also mutates the original array where slice() does not.

x = arr.splice(4, 1)

// Chaining methods - Some methods can be chained depending on the return value.

x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(arr)

console.log(x)