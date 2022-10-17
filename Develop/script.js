var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "1234567890"
var specialCharacters = "!@#$%^&*()<>?-=+_"
var characterList = " "

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = prompt("Choose a password length! No less than 8 characters and more than 128 characters.");
  if(length <= 8 || length >= 128) {
    alert("Does not meet the accepted length!");
    return generatePassword();
  }

  var upperTrue = confirm("Would you like to use Uppercase?");
  if(upperTrue) {
    characterList += upperCase;
  }

  var lowerTrue = confirm("Would you like to use Lowercase?");
  if(lowerTrue) {
    characterList += lowerCase;
  }

  var numTrue = confirm("Would you like to use Numbers?");
  if(numTrue) {
    characterList += numbers;
  }

  var specialTrue = confirm("Would you like to use Special Characters?");
  if(specialTrue) {
    characterList += specialCharacters;
  }

}

writePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
