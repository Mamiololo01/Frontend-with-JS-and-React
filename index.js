let fname = 'John';
let lname = 'Peter';
let age = prompt("Guess John's age.....");

// old way

// let result = fname + ' ' + lname + ' ' + age + ' years old';
// alert(result)

// template string

let result = `${fname} ${lname} is ${age} years old`;
alert(result);