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
