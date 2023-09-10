//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
//solution: 
function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9 
  }
  //test cases:
  simpleMultiplication(2),16 //Should return given argument times eight...'
  simpleMultiplication(1),9  //Should return given argument times nine...'
  simpleMultiplication(8),64 //Should return given argument times eight...'
  simpleMultiplication(4),32 //Should return given argument times eight...'
  simpleMultiplication(5),45 //Should return given argument times nine...'

//Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

//Solution:
function areYouPlayingBanjo(name) {
  const firstInitial = name.toLowerCase().charAt(0)
   if (firstInitial === 'r'){
      return (`${name} plays banjo`)
    }else{
      return(`${name} does not play banjo`)
  }}

//Description:
//We need a function that can transform a string into a number. What ways of achieving this do you know?
//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

//Solution:
const stringToNumber = (str) => Number(str);


//Description:
//Write a function which converts the input string to uppercase.

//Solution:
const makeUpperCase = (str) => {
  const upperCaseStr = str.toUpperCase();
  return upperCaseStr.length > 0 ? upperCaseStr : '';
};