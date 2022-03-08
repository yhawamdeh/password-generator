var numbers = ['0','1','2','3','4','5','6','7','8','9']
var specChar = ['!','@','#','$','%','^','&','*','(',')']
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


function generatePassword() {
  var result = ""
  var passwordLength = prompt('how many characters are in your password?')
  var characters = parseInt(passwordLength)
  if (characters < 8 || characters > 128) {
    alert('Yor characters must have a length between 8 and 128 characters.')
    return generatePassword()
  } else {
    var num = confirm('Does it contain numbers?')
    var char = confirm('Does it contain special characters?')
    var upper = confirm('Does it contain uppercase letters?')
    var lower = confirm('Does it contain lowercse letters?')

    var finalConfirm = []

    if (num === true) {finalConfirm.push(numbers)}
    if (char === true) {finalConfirm.push(specChar)}
    if (upper === true) {finalConfirm.push(uppercase)}
    if (lower === true) {finalConfirm.push(lowercase)}

    if (num || char || upper || lower) {
      for (var i=0;i<passwordLength;i++) {
        var lastConfirm = Math.floor(Math.random() * finalConfirm.length)
        var chosenArray = finalConfirm[lastConfirm]
        result += chosenArray[Math.floor(Math.random() * chosenArray.length)]
      }
    } else {alert('You have to choose at least one entry.'); return generatePassword()}

    return result
  }
  
}





var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword)

function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = generatePassword()
}