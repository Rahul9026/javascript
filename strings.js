let name = 'rahul'
const value = 21
console.log(name + ' is ' + value + ' years old'); // rahul is 21 years old
console.log(`hello my name is ${name} and my age is ${value}`); // hello my name is rahul and my age is 21



myname = new String('rahul') /

// we can do all operation of string like length, indexOf, slice, substring, replace, toUpperCase, toLowerCase, trim, split etc o second declearation of string
console.log(myname.length); // 5
console.log(myname.indexOf('a')); // 1

console.log(myname.substring(1, 4)); // ahu
console.log(myname.replace('rahul', 'rohit')); // rohit 
console.log(myname.toUpperCase()); // RAHUL
console.log(myname.toLowerCase()); // rahul
console.log(myname.trim()); // rahul
console.log(myname.split('')); // [ 'r', 'a', 'h', 'u', 'l' ]   
console.log(myname.split(' ')); // [ 'rahul' ]
console.log(myname.split('a')); // [ 'r', 'hul' ]
console.log(myname.slice(-4, -1)); // ahu
// // ........ etc
