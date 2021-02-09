// Assignment Code
var generateBtn = document.querySelector("#generate");

var charOptions = "";

// Password customization
var characters = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    special: "~`!@#$%^&*()-_=+[{]};:,<.>/?",
}; 

// input options
var strLength = prompt("How many characters will your password be? (8-128)");

//validating input
while (strLength < 8 || strLength > 128 || strLength === "") {
    strLength = prompt("How many characters will your password be? (8-128)");
}

//including lowercase letters
var lowercase = confirm("Would you like to include lowercase letters?");

//including uppercase letters
var uppercase = confirm("Would you like to include uppercase letters?");

//including numbers
var number = confirm("Would you like to include numbers?");

//including special characters
var specialChar = confirm("Would you like to include special characters?");

function generatePassword() {
    //adds lowercase characters
    if (lowercase === true) {
        charOptions += characters.lower;
    }

    //adds uppercase characters
    if (uppercase === true) {
        charOptions += characters.upper;
    }

    //adds number characters
    if (number === true) {
        charOptions += characters.numbers;
    }

    //adds special characters
    if (specialChar === true) {
        charOptions += characters.special;
    }

    //if no characters are specified, all character types will be added
    if (charOptions === "") {
        charOptions = characters.lower + characters.upper 
        + characters.numbers + characters.special;
    }
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    var password = "";
    
    //creates random password from chosen characters
    for (var i = 0; i < strLength; i++) {
        var character = charOptions[Math.floor(Math.random() * charOptions.length)];
        password += character;
    }
    
    //sets created password to the text area
    passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

