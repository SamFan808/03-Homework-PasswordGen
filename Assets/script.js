// Defining variables

var pwLength;
var lower;
var upper;
var num;
var specChar;

var characters = {
  lower: "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,",
  upper: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z",
  num: "0,1,2,3,4,5,6,7,8,9",
  specChar: "",
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
// !--Begin pseudocode
// User requests a password to be generated(clicks Generate Password button)
// How long ?
//   Prompt user for length of password
//     Min 8 chars
// Max 128 chars
// Which characters to include ?
//   Lowercase
//   Uppercase
//   Numbers - will need whole numbers - Math.Floor and Math.Random
//    Special Characters - will we need to place special characters in an Array ?
// Answers each prompt
// answers are stored in variables
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
