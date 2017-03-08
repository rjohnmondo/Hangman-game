// List of Wrestlers to be used //

var wrestlers = ['John Cena','AJ Styles', 'The Undertaker', 'Randy Orton', 'Bray Wyatt'];

// Selects Random Wrestler from 'wrestlers' to be the word we are guessing 

var select = wrestlers[Math.floor(Math.random()* wrestlers.length)];
console.log(select);

// This finds the blank space in the string"

var blank = select;
console.log(select);
var blankSpace = blank.search(" "); // Searches for " " in wrestlers array items...
console.log(blankSpace);

//

var spaces = [];
for (var i=0, i <select ; i++