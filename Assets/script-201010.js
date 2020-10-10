// Defining variables
var writePassword;
var passwordText;


// variable userInput stores user choice for password length into global memory
function pwLength() {
  var userInput = prompt("How long would you like your password to be? Choose between 8 characters min and 128 characters max");

  // alerts user to choose a password length between 8 and 128
    if (userInput === null) {
      return;}  
  
    if (userInput < 8 || userInput > 128) {
    alert("Please choose a number between 8 and 128");
    return pwLength();

     // alerts user if input is not a numeric value
    } else if (isNaN(userInput)) {
    alert("Please input only numbers.");
    return pwLength();

    } else {
    console.log("dude");
    }
}

// how can user decide to exit out if they don't want to keep going?
// passGroup needs to be only pwLength #s long, how to do that? passGroup.length === pwLength
// passGroup.push needs to push a random number of only the specified groups of chars into the group

function charSelect() {
  var passGroup =[];
  var lowerQ = confirm("Would you like lower case characters?");
    if (lowerQ === true) {
      passGroup.push(lowChar)
    }
  var upperQ = confirm("Would you like uppercase characters?");
    if (upperQ === true) {
      passGroup.push(upChar)
   }
  var numQ = confirm("Would you like numbers?");
    if (numQ === true) {
      passGroup.push(num)
    }
  var specQ = confirm("Would you like to use any special characters?");
    if (specQ === true) {
      passGroup.push(specChar)
    }
    
    if (lowerQ === false &&
        upperQ ===false &&
        numQ === false &&
        specQ === false) {
      alert("You must select at least one of the character types.");
      return charSelect();}   
// make these each separate variable arrays
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

  console.log(passGroup);
}



// var result =""

// for (var i = 0; i < userInput; i++) {
//     var password = passGroup[Math.floor(Math.random() * passGroup.length)];
//     result = result += password[i]
// }

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// placeholder
function generatePassword() {
  return ("¯\\_(ツ)_/¯");
}

// function to run through the character arrays in a for loop
// function passChars(arr) {
//   for (var i = 0; i > pwLength; i++);
//   console.log(passGroup);
// }

// This is calling the function writePassword
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

pwLength(); 
charSelect();

// !--Begin pseudocode ==================================================================
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

// -->

// < !--Define variables as placeholders to be stored in global memory

// From slack - useCharacters.push(lowerCase)  useCharacters.join()
