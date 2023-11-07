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

/*
Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

//Solution:
function oddOrEven(array) {
  const arraySum = array.reduce((a, b) => a + b, 0);
  return arraySum % 2 === 0 ? "even" : "odd";
}

/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/
//solution:
const filter_list = (l) => {
  const result = [];
  for (const element of l) {
    if (typeof element === 'number' && element >= 0 && Number.isInteger(element)) {
      result.push(element);
    }
  }
  return result;
};

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"
//solution: 
const removeUrlAnchor = (url) => {
  const parts = url.split('#')
      return parts[0]
  }
//Task
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
  //solution:
  function isSquare(n) {
    if (n < 0) {
      return false;
    }
    const squareRoot = Math.sqrt(n);
    return Number.isInteger(squareRoot);
  }

  /*
  Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest

Example:

  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum.

Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.


  */


  //Solution: 
  function calculateYears(principal, interest, tax, desired) {
    let years = 0;
  
    while (principal < desired) {
      const interestEarned = principal * interest;
      const taxAmount = interestEarned * tax;
      principal += interestEarned - taxAmount;
      years++;
    }
  
    return years;
  }