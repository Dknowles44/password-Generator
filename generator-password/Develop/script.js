// Assignment code here
const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol
};
// Generator functions

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

var randomProperty = function (obj) {
  var keys = Object.keys(obj);
  return obj[keys[ keys.length * Math.random() << 0]];
};

function generatePassword() { 
var length = window.prompt('How long do you want your password between 8 and 128', '12');
var upper = window.confirm('Would you like uppercase letters ?');
var lower = window.confirm('Would you like lowercase letters ?');
var symbol = window.confirm('Would you like symbols ?');
var numb = window.confirm('Would you like numbers ?');

var finalpass = '';
var funcpool = {};
if(upper) {
  funcpool.upper = getRandomUpper;
}
if(lower) {
  funcpool.lower = getRandomLower;
}
if(symbol) {
  funcpool.symbol = getRandomSymbol;
}
if(numb) {
  funcpool.numb = getRandomNumber;
}

console.log(funcpool);

for(var i = 0; i < length; i++) {
  console.log(randomProperty(funcpool))
  finalpass += randomProperty(funcpool)()

}

return finalpass;
}


function getRandomSymbol() {
  const symbols = '!@#$%^&*()_+-=';
  return symbols[Math.floor(Math.random() * symbols.length)];
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
