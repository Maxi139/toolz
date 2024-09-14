slider = document.getElementById("Range")
sliderDisplay = document.getElementById("RangeDisplay")

PasscodeField = document.getElementById("Passcode")

sliderDisplay.innerText = "Länge: " + slider.value;

slider.addEventListener('input', function(e) {
    sliderDisplay.innerText = "Länge: " + slider.value;
})

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
  
function GeneratePasscode(länge){
    i = 0;
    while(i < länge){
        
        i += 1;
    }
}
  