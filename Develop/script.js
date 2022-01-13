// Assignment code here
var numOfYes = 0;
var specialCharStatus, lowerCaseStatus, upperCaseStatus, numericStatus, pwLength;
var password;
var masterPWArr;
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numericArr = ['0','1','2','3','4','5','6','7','8','9'];
var specialCharArr = ['!','@','#','$','%','^','&','*','(',')'];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", getCriteria);


function generatePassword(){
  password = "";
  masterPWArr = [];

  if(specialCharStatus){
    password = specialCharArr[Math.floor(Math.random() * specialCharArr.length)];
    masterPWArr = specialCharArr;
  }
  if(lowerCaseStatus){
    password += lowerArr[Math.floor(Math.random() * lowerArr.length)];
    masterPWArr = masterPWArr.concat(lowerArr);
  }
  if(upperCaseStatus){
    password += upperArr[Math.floor(Math.random() * upperArr.length)];
    masterPWArr = masterPWArr.concat(upperArr);
  }
  if(numericStatus){
    password += numericArr[Math.floor(Math.random() * numericArr.length)];
    masterPWArr = masterPWArr.concat(numericArr);
  }

  for(var i = 0; i < pwLength - numOfYes; i++) {
    password += masterPWArr[Math.floor(Math.random() * masterPWArr.length)];

  }

  console.log(masterPWArr);
  var pw = password;
  return pw;

}

function getCriteria() {
  var accepted, masterAccepted = false;
  numOfYes = 0;


  while(!masterAccepted){


    while (!accepted){
      var specialChar = '';
      specialChar = prompt("Do you want a Special Character? Enter: Y/N?");
      if (specialChar == 'y' || specialChar == 'Y'){
        specialCharStatus = true;
        numOfYes++;
        accepted = true;
      }
      else if (specialChar == 'n' || specialChar == 'N' ){
        specialCharStatus = false;
        accepted = true;
      }
      else {
        alert("Please enter a valid input");
      }


    }
    accepted = false;

      while (!accepted){
        var lowerCase = '';
        lowerCase = prompt("Do you want a Lower Case Character? Enter: Y/N?");
        if (lowerCase == 'y' || lowerCase == 'Y'){
          lowerCaseStatus = true;
          numOfYes++;
          accepted = true;
        }
        else if (lowerCase == 'n' || lowerCase == 'N' ){
          lowerCaseStatus = false;
          accepted = true;
        }
        else {
          alert("Please enter a valid input");
        }

      }
      accepted = false;

      while (!accepted){
        var upperCase  ='';
        upperCase = prompt("Do you want an Upper Case Character? Enter: Y/N?");
        if (upperCase == 'y' || upperCase == 'Y'){
          upperCaseStatus = true;
          numOfYes++;
          accepted = true;
        }
        else if (upperCase == 'n' || upperCase == 'N' ){
          upperCaseStatus = false;
          accepted = true;
        }
        else {
          alert("Please enter a valid input");
        }

      }
      accepted = false;

      while (!accepted){
        var numeric = '';
        numeric = prompt("Do you want a Numeric Character? Enter: Y/N?");
        if (numeric == 'y' || numeric == 'Y'){
          console.log(numeric);
          numericStatus = true;
          numOfYes++;
          accepted = true;
        }
        else if (numeric == 'n' || numeric == 'N' ){
          console.log(numeric);
          numeric = false;
          accepted = true;
        }
        else {
          console.log(numeric);
          alert("Please enter a valid input");
        }

      }
      accepted = false;

      while (!accepted){
        var length = 0;
        length = prompt("How Long do you want the password length? Enter a number between 8-128");
        if (length >= 8 && length <=128){
          pwLength = length
          accepted = true;
        }

        else {
          alert("Please enter a valid input");
        }

      }





    if (numOfYes == 0){
      alert("You must enter atleast one Y");
    }
    else masterAccepted = true;

  }
    writePassword();




}

