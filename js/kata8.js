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
