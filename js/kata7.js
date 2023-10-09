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
/*You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square*/
//Solution: 
function findNextSquare(sq) {
  const sqroot = Math.sqrt(sq);
  if (Number.isInteger(sqroot)) {
    const perfectSquare = sqroot + 1;
    return perfectSquare * perfectSquare;
  } else {
    return -1;
  }
}
/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/
//Solution:
function accum(s) {
  let array = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let repeatedChars = char.toUpperCase() + char.toLowerCase().repeat(i);
    array.push(repeatedChars);
  }
    return array.join('-');
}