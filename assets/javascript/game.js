// List of Wrestlers to be used //

var wrestlers = ['John Cena','AJ Styles', 'The Undertaker', 'Randy Orton', 'Bray Wyatt'];

// Selects Random Wrestler from 'wrestlers' to be the word we are guessing 

var select = wrestlers[Math.floor(Math.random()* wrestlers.length)];
console.log(select);


// This finds the blank space in the string"

var blank = select;
console.log(select);
var blankSpace = blank.search(" "); // Searches for " " in wrestlers array items...
console.log("The Blank Space is in this position " + blankSpace);

// This figures out how long the first name and the last name of each wrestler is
// based on where the blank space in the string is (found above)

console.log ("The length of the selected field is " + select.length);

var blankChar = (blankSpace +1);
console.log ("The Blank Space is in String space " + blankChar);

var lastName = ((select.length)-(blankChar));
console.log("Lastname is " + lastName + "Characters long");

var firstName =((select.length) - (lastName )-1);
console.log ("firstName is " + firstName + "Characters long");

