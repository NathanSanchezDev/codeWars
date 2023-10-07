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
/*Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0]
*/
//Solution:
function digitize(n) {
  let strN = n.toString();
  let arrayE = strN.split('');
  let arrayRev = arrayE.reverse().map(Number);
  return arrayRev;
}

//Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//Solution:
//this was my first idea to go with
function bmi(weight, height) {
  const bmi = weight / height ** 2
  if (bmi <= 18.5){
    return('Underweight')
  }else if(bmi <= 25.0){
    return ('Normal')
  }else if(bmi <= 30){
    return ('Overweight')
  }else {
    return ('Obese')
  }
  }

  //i optimized the code to be more best practice here:
  const UNDERWEIGHT_THRESHOLD = 18.5;
const NORMAL_THRESHOLD = 25.0;
const OVERWEIGHT_THRESHOLD = 30.0;

function bmi(weight, height) {
  const bmiValue = weight / (height ** 2);

  if (bmiValue <= UNDERWEIGHT_THRESHOLD) {
    return 'Underweight';
  } else if (bmiValue <= NORMAL_THRESHOLD) {
    return 'Normal';
  } else if (bmiValue <= OVERWEIGHT_THRESHOLD) {
    return 'Overweight';
  } else {
    return 'Obese';
  }}
  //There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//Solution:
function betterThanAverage(classPoints, yourPoints) {
  const totalClassAdv = [...classPoints, yourPoints];
  const average = totalClassAdv.reduce((a, b) => a + b) / totalClassAdv.length;
  return yourPoints > average;
}

//Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//Solution:
const correct = (string) => 
string.replaceAll('5', 'S').replaceAll('0', 'O').replaceAll('1', 'I');

//In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

//Solution: 
const testEven = (n) => n % 2 === 0;

/*
Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
*/
//Solution:
function powersOfTwo(n) {
  const result = [];
  for (let i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}

/*
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

*/
//Solution:
function feast(beast, dish) {
  const beastCharFirst = beast[0]
  const beastCharLast = beast[beast.length -1]
    if (dish[0] === beastCharFirst && dish[dish.length -1] === beastCharLast){
      return true
    }
    else{return false}
  }