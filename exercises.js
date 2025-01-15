// 1. Swap the values of a and b

var a = 3;
var b = 8;

// Solution:

[a, b] = [b, a];

// Alternative solution:
// var c = a;
// a = b;
// b = c;

// Result: a=8, b=3

console.log("a is " + a);

console.log("b is " + b);

// 2. Tweet Character Counter

var lengthText = 180;

var inputText = "This is a sample tweet to demonstrate character counting.";

// Solution:

var numberCharacters = lengthText - inputText.length;

// Result: Displays the number of characters left based on the input

console.log("You have left " + numberCharacters + " characters.");

console.log("Your tweet is: " + inputText);
