// Assignment Code
var generateBtn = document.querySelector("#generate");

//creating Arrays
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var symbols = ['!','#','$','%','&','(',')','*','+',',','-','.','/'];
var uppers = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowers = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function getPasswordCriteria(){
  //creating prompts/confirms to get password criteria from user
  var passwordLength = prompt("Enter a password length: ");

  //creating a loop to make sure user enters the desired number for password length
  while((passwordLength < 8 || passwordLength > 128) || (isNaN(passwordLength))){
    passwordLength = prompt("Enter a password length in the range of 8 to 128 (inclusive) using numbers: ");
  }

  var ChoseNum = confirm("Do you want numbers in your password?");
  var ChoseSym = confirm("Do you want symbols in your password?");
  var ChoseLow = confirm("Do you want lowercase letters in your password?");
  var ChoseUp = confirm("Do you want uppercase letters in your password?");

  //storing the values of prompts in an object that will be passed into generate password function
  var options = {
    isLength: passwordLength,
    isNum: ChoseNum,
    isSym: ChoseSym,
    isLow: ChoseLow,
    isUp: ChoseUp
  };
  return options;
}

//function for getting random index for arrays
function createRandom(length){
  var randomNum = Math.floor(Math.random() * length)
  return randomNum;
  }

//add paramter here for legnth of thingy
function generatePassword(){
  var userInput = getPasswordCriteria();
  var availableChars = [];
  var passwordArr = [];

  if(userInput.isNum){
    availableChars = availableChars.concat(numbers)
  }
  if(userInput.isSym){
    availableChars = availableChars.concat(symbols)
  }
  if(userInput.isLow){
    availableChars = availableChars.concat(lowers)
  }
  if(userInput.isUp){
    availableChars = availableChars.concat(uppers)
  }

    //looping until password length is reached. using length of available chars as argument passed into create random to select an index which picks the character
    //and pushes it to the end of the password array
  for(var i = 0; i < userInput.isLength; i++){
    passwordArr.push(availableChars[createRandom(availableChars.length)]);
    
  } 

  console.log(passwordArr);
  return passwordArr.join("");
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
