var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase= "abcdefghijklmnopqrstuvwxyz"
var numbers= "1234567890"
var specialCharacters= "!@#$%^&*()<>?-=+_"
var characterList = ""

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

var totalVal = 0;

var includeUpper = "";
var includeLower = "";
var includeNumbers = "";
var includeSpecial = "";

var selectedCharacters = [
    function getUpperTrue() {
        return String.upperCase(Math.floor(Math.random() * 26 + 65));
    },
    function getLowerTrue() {
        return String.lowerCase(Math.floor(Math.random() * 26 + 97));
    },
    function getNumTrue() {
        return String.numbers(Math.floor(Math.random() * 10 + 48));
    },
    function getSpecialTrue() {
        return String.specialCharacters(Math.floor(Math.random() * specialCharacters.length));
    }
    
];

function generatePassword() {
  var length = prompt("Choose a password length! No less than 8 characters and more than 128 characters.");
  if(length <= 8 || length >= 128) {
    alert("Does not meet the accepted length!");
    return generatePassword();
  }

  var upperTrue = confirm("Would you like to use Uppercase?");
  if(upperTrue) {
  //  characterList += upperCase;
  includeUpper = selectedCharacters[0];
  totalVal++;
  }

  var lowerTrue = confirm("Would you like to use Lowercase?");
  if(lowerTrue) {
  //  characterList += lowerCase;
  includeLower = selectedCharacters[1];
  totalVal++;
  }

  var numTrue = confirm("Would you like to use Numbers?");
  if(numTrue) {
  //  characterList += numbers;
  includeNumbers = selectedCharacters[2];
  totalVal++;
  }

  var specialTrue = confirm("Would you like to use Special Characters?");
  if(specialTrue) {
  //  characterList += specialCharacters;
  includeSpecial = selectedCharacters[3];
  totalVal++;
  }
}
//  for (var i = 0, n = randomPass.length; i < length; i++);
//    characterList += password.randomPass(Math.floor(Math.random() * n));
//  }
//  return writePassword;


return characterList;
