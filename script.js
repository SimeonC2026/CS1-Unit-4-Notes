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

// Can combine multiiple operators in one statement
// Order of evaluation follows PEMDAS!
score = score / 6 - 3 ** (2 + 4) * 10;
console.log(score);

// STRING CONCATENATION (merging/combining)
//QUOTES indicate STRING LITERALS
let greeting = "Hello " + "Friend, I am so happy you're here!";
console.log(greeting)

//Can combine string VARIABLES with string LITERALS
let username = "SimeonChew713";
greeting = "Welcome " + username + "!!!";
console.log(greeting);
console.log(username);

// Watch out for STRING CONVERSIONS
console.log( 4 + 5 ); // 9 (adds the numbers)
console.log ( "4" + 5 ); // 45 (concatenate, not add)
console.log(4 + '5'); // 45 (same as above!)

// SHORTCUT OPERATORS (Increment/Decrement)
let counter = 0;
counter = counter + 1; // LONG WAY
counter++; // SHORTCUT to increase by 1
console.log(counter);
counter--; // SHORTCUT to decrease by 1
console.log(counter);

/* FUNCTIONS:
Reusable sets of code statements that perform a specific task or process
*/

// console.log is a FUNCTION that we've used
// TASK: display data in the console
console.log("I just used a function!");

// DECLARE (create) your own function
function skincare() {
    // STATEMENTS (actions) to execute for this routine
console.log("1. Cleanse");
console.log("2. Apply toner");
console.log("3. Moisturize");
}
// CALL the function to use it!
skincare();
skincare(); // can run the function again

// ANALOGY: Functions are like RECIPES
// Example of a function that needs PARAMETERS (ingredients) and RETURNS a new value (meal)
function makeSandwich(filling, sauce, bread) {
let sandwich = filling + " sandwich with " + sauce + " on " + bread;
return sandwich; // OUTPUT
}
let grilledCheese = makeSandwich("cheese","butter","toast");
console.log(grilledCheese);
let butterandJelly = makeSandwich("butter","jelly","toast");
console.log (butterandJelly);
let sohaila = makeSandwich("turkey","ketchup","pita");
console.log(sohaila);
let simeon = makeSandwich("jelly","butter","multigrain");
console.log(simeon);