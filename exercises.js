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

// 2.1. Tweet Character Counter. With "if" statement and "slice" method

var lengthText_1 = 180;
var inputText_1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris";

// Solution:

function checkNumberCharacter_1() {
  var numberCharacters_1 = lengthText_1 - inputText_1.length;
  if (numberCharacters_1 < 0) {
    return (
      "You have exceeded the character limit by " +
      Math.abs(numberCharacters_1) +
      " characters."
    );
  } else {
    return "You have left " + numberCharacters_1 + " characters.";
  }
}

// Result: Displays the number of characters left based on the input

console.log(checkNumberCharacter_1());
console.log("Your tweet is: " + inputText_1.slice(0, 180));

// 2.2 Capitalization of a string. Basic Level

var name_Angela = "aNgeLA";

// Solution:

name_Angela_array = name_Angela.split("");

function capitalizedNameAngela() {
  if (
    name_Angela_array[0] &&
    name_Angela_array[0].toUpperCase() !== name_Angela_array[0]
  ) {
    name_Angela_array[0] = name_Angela_array[0].toUpperCase();
  }

  for (var i = 1; i < name_Angela_array.length; i++) {
    if (
      name_Angela_array[i] === name_Angela_array[i].toUpperCase() &&
      name_Angela_array[i] !== name_Angela_array[i].toLowerCase()
    ) {
      name_Angela_array[i] = name_Angela_array[i].toLowerCase();
    }
  }
}

capitalizedNameAngela();
console.log("Capitalized name: " + name_Angela_array.join(""));

// Result: Angela

// 3. Capitalization of string

var name = "john mcKeIN";

// Solution:

function capitalizeName() {
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    alert(
      "Invalid entry. Please enter a name without numbers or special characters."
    );
    return;
  }

  var nameArray = name.split("");

  if (nameArray[0] && nameArray[0].toUpperCase() !== nameArray[0]) {
    nameArray[0] = nameArray[0].toUpperCase();
  }

  for (var i = 0; i < nameArray.length; i++) {
    if (nameArray[i] === " " && i + 1 < nameArray.length) {
      if (nameArray[i + 1].toUpperCase() !== nameArray[i + 1]) {
        nameArray[i + 1] = nameArray[i + 1].toUpperCase();
      }
    }
  }

  if (nameArray.length >= 3) {
    for (var j = nameArray.length - 3; j < nameArray.length; j++) {
      if (
        nameArray[j] === nameArray[j].toUpperCase() &&
        nameArray[j] !== nameArray[j].toLowerCase()
      ) {
        nameArray[j] = nameArray[j].toLowerCase();
      }
    }
  }

  var capitalizedName = nameArray.join("");

  console.log("Length of the name: " + capitalizedName.length);

  return capitalizedName;
}

var result = capitalizeName(name);
console.log("Capitalized name: " + result);

// Result: Display: John Mckein

// 4. Basic Operations.

agePet = 5;

humanAge = (agePet - 2) * 4 + 21;

console.log("The age of the pet in human years is: " + humanAge);

// Result: The age of the pet in human years is: 33

// Notes before moving forward:

function getMilk(money) {
  var priceBottle = 0.75;
  var numberOfBottles = Math.floor(money / priceBottle);

  console.log("Buy " + numberOfBottles + " bottles of milk.");

  //Output of the function
  return money % priceBottle;
}

var change = getMilk(10.99);
console.log("Change: $" + change.toFixed(2));

// 5 BMI Calculator

var weight = 92; // Weight in kg
var height = 1.85; // Height in meters

// Solution:

function bmiCalculator(weight, height) {
  // Calculate BMI
  var equationBMI = weight / (height * height);

  // Return BMI rounded to two decimal places
  return equationBMI;
}

// Results: Display the BMI value
var returnedBMI = bmiCalculator(weight, height);
console.log("Your BMI is: " + returnedBMI.toFixed(2));

// 6. Random Number Generator for Compatibility Calculator

var namePerson1 = "Frank";
var namePerson2 = "Cindy";

// Solution:

function compatibilityCalculator(namePerson1, namePerson2) {
  var randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100

  if (randomNumber >= 75) {
    return (
      "Congratulations! " +
      namePerson1 +
      " and " +
      namePerson2 +
      " are compatible with a " +
      randomNumber +
      "% compatibility rate."
    );
  }

  if (randomNumber >= 25 && randomNumber < 75) {
    return (
      "Sorry! " +
      namePerson1 +
      " and " +
      namePerson2 +
      " are not compatible with a " +
      randomNumber +
      "% low compatibility rate. You can do better."
    );
  }

  if (randomNumber <= 25) {
    return (
      "Sorry! " +
      namePerson1 +
      " and " +
      namePerson2 +
      " are not compatible with a " +
      randomNumber +
      "% low compatibility rate. Whcih means you should swipe left!"
    );
  } else {
    return (
      "Swipe next! " +
      namePerson1 +
      " and " +
      namePerson2 +
      " are compatible with a " +
      randomNumber +
      "% low compatibility rate."
    );
  }
}

// Results: Display the compatibility percentage

var compatibility = compatibilityCalculator(namePerson1, namePerson2);
console.log(compatibility);

// 7. BMI Calculator with Interpretation

function bmiCalculator_IF(weight, height) {
  var bmiResult_IF = weight / (height * height);

  if (Math.floor(bmiResult_IF) < 18.5) {
    return (
      "Your BMI is " + Math.floor(bmiResult_IF) + ", so you are underweight."
    );
  }

  if (Math.floor(bmiResult_IF) > 24.9) {
    return (
      "Your BMI is " + Math.floor(bmiResult_IF) + ", so you are overweight."
    );
  }

  if (Math.floor(bmiResult_IF) >= 18.5 && Math.floor(bmiResult_IF) <= 24.9) {
    return (
      "Your BMI is " +
      Math.floor(bmiResult_IF) +
      ", so you have a normal weight."
    );
  }
}

var bmiResult_IF = bmiCalculator_IF(weight, height);
console.log(bmiResult_IF);

// 8. Leap Year Calculator

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 !== 0 || year % 400 === 0) {
      return year + " is a leap year.";
    } else {
      return year + " is not a leap year.";
    }
  } else {
    return year + " is not a leap year.";
  }
}

var year = Math.floor(Math.random() * 3001);
console.log(isLeapYear(year));

// Explanation of Array

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guestName = "James";

if (guestList.includes(guestName)) {
  console.log("Welcome " + guestName + "!");
} else {
  console.log("Sorry, maybe next time.");
}

// 9. FizzBuzz Challenge

function fizzBuzz() {
  for (var i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

// 9.1. FizzBuzz Challenge with a while loop

var j = 1;

function fizzBuzzWhile() {
  while (j <= 100) {
    if (j % 3 === 0 && j % 5 === 0) {
      console.log("FizzBuzz");
    } else if (j % 3 === 0) {
      console.log("Fizz");
    } else if (j % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(j);
    }
    j++;
  }
}

fizzBuzzWhile();

// 9.2. Beer on the wall song

var ij = 1;

function beerOnTheWall() {
  while (ij <= 100) {
    if (ij === 1) {
      console.log(
        ij + " bottle of beer on the wall, " + ij + " bottle of beer."
      );
      console.log(
        "Take one down and pass it around, no more bottles of beer on the wall."
      );
    } else if (ij === 0) {
      console.log(
        "No more bottles of beer on the wall, no more bottles of beer."
      );
      console.log(
        "Go to the store and buy some more, 99 bottles of beer on the wall."
      );
    } else {
      console.log(
        ij + " bottles of beer on the wall, " + ij + " bottles of beer."
      );
      console.log(
        "Take one down and pass it around, " +
          (ij - 1) +
          " bottles of beer on the wall."
      );
    }
    ij++;
  }
}

beerOnTheWall();

// 10. Who's Buying Lunch?

names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
  var numberOfPeople = names.length;
  var randomPerson = Math.floor(Math.random() * numberOfPeople);
  return names[randomPerson] + " is going to buy lunch today!";
}

console.log(whosPaying(names));

// 11. Fibonacci Sequence

function fibonacciGenerator(n) {
  const result = [];
  if (n <= 0) return result;

  let a = 0,
    b = 1;
  result.push(a);
  if (n === 1) return result;

  result.push(b);
  for (let i = 2; i < n; i++) {
    const c = a + b;
    result.push(c);
    a = b;
    b = c;
  }

  return result;
}

console.log(fibonacciGenerator(10));
