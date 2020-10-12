// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
// user selected character groups are concatenated into passGroup array
var passGroup = [];
// function declaration to generate password based on user criteria through a series of prompts
function generatePassword() {
// Declaring character variables
// each character set placed into their own arrays
  var lowChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  ];
  var upChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  ];
  var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var specChar = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  ];
// variable userInput stores user choice for password length into global memory
    var userInput = prompt("How long would you like your password to be? Choose between 8 characters min and 128 characters max");
// alerts user to choose a password length between 8 and 128
    if (userInput === null) {
      return;} 
    if (userInput < 8 || userInput > 128) {
      alert("Please choose a number between 8 and 128");
      return generatePassword();
// alerts user if input is not a numeric value
    } else if (isNaN(userInput)) {
      alert("Please input only numbers.");
      return generatePassword();
    }
    var lowerQ = confirm("Would you like lower case characters?");
      if (lowerQ) {
      passGroup = passGroup.concat(lowChar);
    }
    var upperQ = confirm("Would you like uppercase characters?");
      if (upperQ) {
      passGroup = passGroup.concat(upChar);
    }
    var numQ = confirm("Would you like numbers?");
      if (numQ) {
      passGroup = passGroup.concat(num);
    }
    var specQ = confirm("Would you like to use any special characters?");
      if (specQ) {
      passGroup = passGroup.concat(specChar);
    }
      else if (lowerQ === false &&
      upperQ === false &&
      numQ === false &&
      specQ === false) {
      alert("You must select at least one of the character types.");
      return generatePassword();
    }   
  //for loop cycles through the passGroup array the number of times as specified by userInput,
  //selecting a random character each time from the passGroup array
    var result = "";
      for (var i = 0; i < userInput; i++) {
      var passRes = Math.floor(Math.random() * passGroup.length);
      // place results of passRes into an array, store in passRando
      var passRando = passGroup[passRes];
      result = result + passRando;
    }
    return result;
}
// Write password to the #password input  
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  // resets the user selections each time function runs
  passGroup.length = 0;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// !--Begin pseudocode ==============================================================================
// User requests a password to be generated(clicks Generate Password button)

// How long ?
//   Prompt user for length of password
//     Min 8 chars
// Max 128 chars
// Stores value of # of chars to a variable

// Which characters to include ?
//   Lowercase --> selects random Lowercase letters and fills passGroup array
//   Uppercase -> selects random Uppercase letters and adds to passGroup array, displaces random # of prev chars
//   Numbers - will need whole numbers - Math.Floor and Math.Random --> selects random Numbers and adds to passGroup array, displaces random # of prev chars
//    Special Characters - will we need to place special characters in an Array ? --> selects random Special Characters and to passGroup array, displaces random # of prev chars

// Values for each set of characters are stored in variables (arrays)
// each prompt is evaluated and validated
// password generated with the validated criteria

// Define variables:
// pwLength
// lower
// upper
// number
// character

// learn about switch statements

// toLowercase, toUppercase

// Prompt user for character types to be included(lower, upper, numeric, and / or special chars)

// Generate password with the selected criteria.

// Display password in an alert or write it to the page.

// Define variables as placeholders to be stored in global memory

// From slack - useCharacters.push(lowerCase)  useCharacters.join()
