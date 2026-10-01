const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];
const dcHeroes = ["Batman", "Superman", "Wonder Woman", "Flash"];
marvelHeroes.push(dcHeroes); // adds the entire dcHeroes array as a single element to the end of the marvelHeroes array
console.log(marvelHeroes); // ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", ["Batman", "Superman", "Wonder Woman", "Flash"]]
console.log(marvelHeroes[6][1]); // "Superman" - accessing the second element of the dcHeroes array which is now nested inside marvelHeroes


const allHeroes = marvelHeroes.concat(dcHeroes); // combines the marvelHeroes and dcHeroes arrays into a new array
console.log(allHeroes); // ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", "Batman", "Superman", "Wonder Woman", "Flash"]



//spread operator
const allHeroes2 = [...marvelHeroes, ...dcHeroes];
console.log(allHeroes2); // ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye", "Batman", "Superman", "Wonder Woman", "Flash"]


// best for nested arrays
const nestedArray = [[1, 2], [3, 4], [5, [6, 7]]];

const flattenedArray = nestedArray.flat(depth = 2); // flattens the nested array to a depth of 2
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6, 7]

console.log(Array.isArray('rahul')); // false
console.log(Array.from('rahul')); // ['r', 'a', 'h', 'u', 'l'] - creates an array from a string

let mark1 = 100
let mark2 = 200
let mark3 = 300
console.log(Array.of(mark1, mark2, mark3)); // [100, 200, 300] - creates an array from the given arguments
