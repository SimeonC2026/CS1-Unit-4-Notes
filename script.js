/* This is a MULTI-LINE COMMENT
The code below is an example STATEMENT
(instruction/command)
Every STATEMENT ends in a SEMICOLON (;)
*/
console.log("Welcome to JavaScript!");

// This is a SINGLE-LINE COMMENT

// console.log() is a FUNCTION that displays info
console.log("My name is Simeon");

//DECLARE  a new VARIABLE to hold some data
let pokemon;

// ASSIGN a VALUE to that variable
//like putting an item in a box
pokemon = "pikachu";

// DECLARE + ASSIGN in one statement
let luckyNumber = 25;

//"PASS IN" a variable to a FUNCTION
console.log(luckyNumber);

// CHANGE the value of an existing variable
let raining = false;
console.log(raining);
raining = true;
console.log(raining);

// COPY data from one variable into another
let breakfast = "Seeded bread";
let lunch;
lunch = breakfast;
// Both variables hold the same value
console.log(breakfast);
console.log(lunch);
// Above statements log the VALUES stored in VARIABLES named breakfast and lunch
// Below statement log the literal string "lunch"
console.log("lunch");

// MATH OPERATORS
let score = 0;
score = score + 5;
console.log(score);
score = score - 10;
console.log(score);
score = score * (-3);
console.log(score);
score = score / 5;
console.log(score);
