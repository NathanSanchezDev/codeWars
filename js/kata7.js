//Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

//Solution:
function addLineNumbers(lines) {
    const numberedLines = [];
    for (let i = 0; i < lines.length; i++) {
      const lineNumber = i + 1;
      const numberedLine = `${lineNumber}: ${lines[i]}`;
      numberedLines.push(numberedLine);
    }
    return numberedLines;
  }

//   //
//   ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

let solution = 
function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }
  for (let i = 0; i < pin.length; i++) {
    if (isNaN(parseInt(pin[i]))) {
      return false;
    }
  }
  return true;
}