// array declaration
let fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
let arr2 = new Array("grape", "kiwi", "mango");


//methods
// push() - adds an element to the end of the array
fruits.push("pear");
console.log(fruits); // ["apple", "banana", "orange", "pear"]
fruits.pop(); // removes the last element from the array
console.log(fruits); // ["apple", "banana", "orange"]
fruits.shift(); // removes the first element from the array
console.log(fruits); // ["banana", "orange"]

fruits.unshift("strawberry"); // adds an element to the beginning of the array
console.log(fruits); // ["strawberry", "banana", "orange"]  
fruits.splice(i,j) // removes j elements from index i and adds new elements at index i
fruits.splice(1, 1, "kiwi", "mango"); // removes 1 element from index 1 and adds "kiwi" and "mango" at index 1
console.log(fruits); // ["strawberry", "kiwi", "mango", "orange"]

const slicedFruits = fruits.slice(1, 3); // returns a new array containing elements from index 1 to index 3 (not including index 3)
console.log(slicedFruits); // ["kiwi", "mango"]
console.log(fruits); // ["strawberry", "kiwi", "mango", "orange"] - original array is not modified
const splicedFruits = fruits.splice(1, 2); // removes 2 elements from index 1 and returns them as a new array
console.log(splicedFruits); // ["kiwi", "mango"]
console.log(fruits); // ["strawberry", "orange"] - original array is modified




console.log(numbers.includes(3)); // if value is present in the array or not, returns true or false
console.log(numbers.indexOf(3)); // returns the index of the first occurrence of the value in the array, returns -1 if not found


const newarr = numbers.join(); // joins all elements of the array into a string, separated by commas
console.log(newarr); // "1,2,3,4,5"
