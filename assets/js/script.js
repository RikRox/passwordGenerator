// Assignment code here

 //console.log(String.fromCharCode());

//generate a random number between 0-127


var password = '';



var start = function (){
  var customPass = confirm("Do you want to customize your password ?");
if (!customPass) {
  generatePass();
} else {
  customPassword();
}

}
  


function customPassword(){

  var customLength = window.prompt("Enter a numerical value for the desired length of the password");

  if (customLength < 8 || customLength > 128) {

    customLength = window.prompt("Enter a length between 8 and 128.");

  }



  var numAllowed = confirm("Do you want to allow numerical values?");

  var upperAllowed = confirm("Do you want to allow UPPER case characters?");

  var lowerAllowed = confirm("Do you want to allow lower case characters?");

  var specialAllowed = confirm("Do you want to allow special characters?");

  var customizedPassword ="";






  if (!numAllowed) {
   nums = '';
  } else {
    nums = '0123456789'; // 48-57 char code
  }

  if (!upperAllowed) {
    upper = ''; // 65 - 90 char code
  } else {
    upper =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  if (!lowerAllowed) {
    lower = ''; // 97 - 122 char code
  } else {
    lower = 'abcdefghijklmnopqrstuvwxyz';
  }

  if (!specialAllowed) {
   special = ''; // 33 - 47 char code
  } else {
    special = '!@#$%^&*()'; 
  } 






  var chosenChars = nums + upper + lower + special;

  console.log(chosenChars);

 // var randomChar = '';

  for (var i = 0; i <  customLength; i++){

    var randomChar = Math.floor(Math.random() * chosenChars.length);

    console.log( customizedPassword += chosenChars.substring(randomChar, randomChar + 1));

  }

  console.log(customizedPassword);

  password = customizedPassword;
  console.log(password);


  writePassword();

  //return password;




  // switch (true) {
  //   case numAllowed:
  //     chosenChars = nums + chosenChars;
  //     break;
  //   case upperAllowed:
  //     chosenChars = upper + chosenChars;
  //     break;
  //   case lowerAllowed: 
  //     chosenChars = lower + chosenChars;
  //     break;
  //   case specialAllowed:
  //     chosenChars = special + chosenChars;
  //     break;

  // }

// passwordText = customizedPassword;
return customizedPassword;




}













function randomNum (){
  var num = Math.floor(Math.random() * 127);

  if (num < 32 ) {
    num += 32;
  } else {
    num = num;
  }
return num;

}

console.log(randomNum());


//convert to character

var character = ''; // String.fromCharCode(randomNum());

console.log(character);

//generate random length of password

function randomLength(){
  var length = Math.floor(Math.random() * 128);

  if (length < 8){
    length += 8;
  }else {
    length = length;
  }
  return length;
}
console.log(randomLength());



var pass = "";


function generatePass(){
for (var i = 0; i < randomLength(); i++) {

character = String.fromCharCode(randomNum());
 pass += character;


}

//window.alert(pass);



password = pass;
  


  writePassword();


}

//generatePass();




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

   // var password = ''; //= generatePassword();
   var passwordText = document.querySelector("#password");

  passwordText.value = password;


console.log(password);
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", start);




// if (customPass == "no" || customPass == "NO" || customPass == "No") {
//   generatePass();

// } else if (customPass == "yes" || customPass == "YES" || customPass == "Yes") {






// } else if (customPass == "no" || customPass == "NO") {
//   window.alert("That was not a valid response!")
// }
