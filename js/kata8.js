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
  /*Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!*/
//solution:
function removeEveryOther(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}
/*
Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

"I love you"
"a little"
"a lot"
"passionately"
"madly"
"not at all"
If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
*/
//solution:
function lastPetalPhrase(petals) {
  const phrases = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
  return phrases[(petals - 1) % phrases.length];
}
/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/
//Solution: 
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}


/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
*/
//Solution:
const getAge = (inputString) => {
  const age = inputString.split('')[0]
  return parseInt(age)
}

/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
Return the resulting string.
Note: input will never be an empty string
*/
//solution:
function fakeBin(x) {
  const newArray = x.split('');
  for (let i = 0; i < newArray.length; i++) {
    if (parseInt(newArray[i]) < 5) {
      newArray[i] = '0';
    } else {
      newArray[i] = '1';
    }
  }
  return newArray.join('');
}
//After refactoring the code it looks like i could simplify this solution with using the map method. 
function fakeBin(x) {
  return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
//this splits the array into an array of numbers and maps the numbers with a turniary conditional and joins the array together into one string.

/*
Real easy one! 
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/
//Solution:
const opposite = number => {return -number;}
//What it does is basically a simple integer conversion to either negative or positive.

/*
In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
*/
//Solution:
function findMultiples(integer, limit) {
  const multiples = [];
  for (let i = integer; i <= limit; i += integer) {
    multiples.push(i);
  }
  return multiples;
}

/*
Debugging sayHello function
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
*/
//Solution:
const sayHello = (name)=>{
  return `Hello, ${name}`}

 /*
 Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database. The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
The Database
[ ("english", "Welcome")
, ("czech", "Vitejte")
, ("danish", "Velkomst")
, ("dutch", "Welkom")
, ("estonian", "Tere tulemast")
, ("finnish", "Tervetuloa")
, ("flemish", "Welgekomen")
, ("french", "Bienvenue")
, ("german", "Willkommen")
, ("irish", "Failte")
, ("italian", "Benvenuto")
, ("latvian", "Gaidits")
, ("lithuanian", "Laukiamas")
, ("polish", "Witamy")
, ("spanish", "Bienvenido")
, ("swedish", "Valkommen")
, ("welsh", "Croeso")
]
 */ 
  //solution:
  const languageDatabase = {
    "english": "Welcome",
    "czech": "Vitejte",
    "danish": "Velkomst",
    "dutch": "Welkom",
    "estonian": "Tere tulemast",
    "finnish": "Tervetuloa",
    "flemish": "Welgekomen",
    "french": "Bienvenue",
    "german": "Willkommen",
    "irish": "Failte",
    "italian": "Benvenuto",
    "latvian": "Gaidits",
    "lithuanian": "Laukiamas",
    "polish": "Witamy",
    "spanish": "Bienvenido",
    "swedish": "Valkommen",
    "welsh": "Croeso"
  };
  
  function greet(language) {
    if (languageDatabase.hasOwnProperty(language)) {
      return languageDatabase[language];
    }
    return languageDatabase["english"];
  }

/*
Make a function that returns the value multiplied by 50 and increased by 6.
If the value entered is a string it should return "Error".
*/

  //solution: 
  const problem = (a) => { 
    if (typeof a === 'string' || a === "") {
      return "Error";
    } else {
      return 50 * a + 6;
      }
    }