let x;
// Challenge 1:
/*
Use some of the array methods that we looked at to mutate the following array to = the expected result

const arr = [1,2,3,4,5]
*/
const arr = [1,2,3,4,5];
x = arr.push(6);
x = arr.unshift(0);
x = arr.reverse()

// console.log(arr)
console.log(x)

// expected result : [6,5,4,3,2,1,0]

// Challenge 2:
/*
Combine arr1 and arr2 into a new array called arr3 with the following elements

Notice that the both arr1 and arr2 include the number 5. You will have to find a way to get rid of the extra 5.

Expected Result: [1,2,3,4,5,6,7,8,9,10]
*/
const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,10];

// Solution 1
const arr3 = [...arr1, ...arr2];
console.log(arr3)
x = arr3.splice(4, 1)
console.log(arr3) // checked

// Solution 2
const arr4 = arr1.slice(0,4).concat(arr2);
console.log(arr4)