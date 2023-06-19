var characterLength = 8;
var choiceArray = [];

var specialCharacterArray = ["(","~","#","$","^","%",")","_","{","}","|","?",">","<"];
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArray = ["0","1","2","3","4","5","6","7","8","9",]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPromp = getPrompt();
  var passwordText = document.querySelector("#password");

  if(correctPromp) {
    var randomPassword = generatePassword();
    passwordText.value = randomPassword;
  } else {
    passwordText.value ="";

  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}

function getPrompt() {
  choiceArray = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Please try again.");
    return false;
  }

   if (confirm("Would you like lowercase letters in your password?")) {
      choiceArray = choiceArray.concat(lowerCaseArray);
   }
   if (confirm("Would you like uppercase letters in your password?")) {
      choiceArray = choiceArray.concat(upperCaseArray);
   }
   if (confirm("Would you like special letters in your password?")) {
      choiceArray = choiceArray.concat(specialCharacterArray);
   }
   if (confirm("Would you like numbers in your password?")) {
      choiceArray = choiceArray.concat(numberArray);
   }
   return true;
}