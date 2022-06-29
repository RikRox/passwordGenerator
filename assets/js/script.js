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



