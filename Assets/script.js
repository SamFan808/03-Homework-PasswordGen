// Defining variables

// variable userInput stores user choice for password length into global memory
// Write password to the #password input  
// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var userInput = prompt("How long would you like your password to be? Choose between 8 characters min and 128 characters max");

  // alerts user to choose a password length between 8 and 128
    if (userInput === null) {
      return;}  
  
    if (userInput < 8 || userInput > 128) {
    alert("Please choose a number between 8 and 128");
    return writePassword();

     // alerts user if input is not a numeric value
    } else if (isNaN(userInput)) {
    alert("Please input only numbers.");
    return writePassword();

    } else {
    console.log(userInput);
    }

//declaring character variables
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
  
  var passGroup = [];
  var lowerQ = confirm("Would you like lower case characters?");
    if (lowerQ === true) {
      passGroup.push(lowChar);
    }
  var upperQ = confirm("Would you like uppercase characters?");
    if (upperQ === true) {
      passGroup.push(upChar);
   }
  var numQ = confirm("Would you like numbers?");
    if (numQ === true) {
      passGroup.push(num);
    }
  var specQ = confirm("Would you like to use any special characters?");
    if (specQ === true) {
      passGroup.push(specChar);
    }
    
    if (lowerQ === false &&
        upperQ ===false &&
        numQ === false &&
        specQ === false) {
      alert("You must select at least one of the character types.");
      return writePassword();}   
// make these each separate variable arrays
 
  console.log(lowerQ, upperQ, numQ, specQ);

  var result =""
 
  // for loop that goes through the character arrays selected to be used by the user 
  for (var i = 0; i < userInput; i++) {
    // store in bacon, take a random char from passGroup multiplied by length of passGroup
      var bacon = passGroup[Math.floor(Math.random() * passGroup.length)];
      result = result += bacon[i]
  }
  console.log(result);

  return result;

  // function generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)


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
