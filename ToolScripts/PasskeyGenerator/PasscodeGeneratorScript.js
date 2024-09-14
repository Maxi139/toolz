slider = document.getElementById("Range")
sliderDisplay = document.getElementById("RangeDisplay")

PasscodeField = document.getElementById("Passcode")

sliderDisplay.innerText = "Länge: " + slider.value;

// Array für Kleinbuchstaben
const lowercaseLetters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
  
  // Array für Großbuchstaben
  const uppercaseLetters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];
  
  // Array für Sonderzeichen
  const specialCharacters = [
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-',
    '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^',
    '_', '`', '{', '|', '}', '~'
];
  
  // Array für Zahlen
  const numbers = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
  

function random_item(items) {
  // Use Math.random() to generate a random number between 0 and 1,
  // multiply it by the length of the array, and use Math.floor() to round down to the nearest integer
  return items[Math.floor(Math.random() * items.length)];
}

function copy() {

  copyText = document.getElementById("Passcode");
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  document.getElementById("copy").innerHTML = "Passwort kopiert";
}

usedChars = [lowercaseLetters, uppercaseLetters, specialCharacters, numbers];



function GeneratePasscode(länge){
    allItems = [];

    for (var item in usedChars) {
      allItems = allItems.concat(usedChars[item]);
    }
    i = 0;
    passcode = "";
    while(i < länge){
      passcode = passcode + random_item(allItems);
      i += 1;
    }
    document.getElementById("copy").innerHTML = "Passwort kopieren<img src='copy.svg'>";
    console.log(passcode);
    PasscodeField.value = passcode;
}
  
GeneratePasscode(slider.value);

slider.addEventListener('input', function(e) {
  sliderDisplay.innerText = "Länge: " + slider.value;
  GeneratePasscode(slider.value);
})