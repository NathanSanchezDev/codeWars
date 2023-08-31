/*
Write a function that 
takes an array of words and smashes
 them together into a sentence and returns\
  the sentence. You can ignore 
  any need to sanitize words or 
  \add punctuation, but you should 
  add spaces between each word. 
  Be careful, there shouldn't be a
  \ space at the beginning or the end 
  of the sentence! */

//solution 
smash = function (words) {
    return words.join(" ");
  };

  //Test code
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

describe("smash", () =>  {

  it ("Should return empty string for empty array.", () => {
    assert.strictEqual(smash([]), "");
  });

  it ("One word example should return the word.", () => {
    assert.strictEqual(smash(["hello"]), "hello");
  });
    
  it ("Multiple words should be separated by spaces.", () =>  {
    assert.strictEqual(smash(["hello", "world"]), "hello world");
    assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
    assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");
  });
});
/*oposites attract: 
Timmy & Sarah think they are in love, but around 
where they live, they will only know once they pick a flower each. 
If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't. */
function lovefunc(flower1, flower2) {
    // Check if one flower has even petals and the other has odd petals
    if ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)) {
      return true; // They are in love
    } else {
      return false; // They are not in love
    }
  }

//   const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(lovefunc(1,4), true)
//     assert.strictEqual(lovefunc(2,2), false)
//     assert.strictEqual(lovefunc(0,1), true)
//     assert.strictEqual(lovefunc(0,0), false)
//   });
// });

/*Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/
//solution
class SmallestIntegerFinder {
    findSmallestInt(args) {
        args.sort(function(a, b) {
            return a - b;
        });
        return args[0];
    }
}
//testing code
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Smallest Integer Tests", () => {
//   let sif = new SmallestIntegerFinder();
//   it("Fixed Tests", () => {
//     assert.strictEqual(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
//     assert.strictEqual(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
//     assert.strictEqual(sif.findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
//     assert.strictEqual(sif.findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
//     assert.strictEqual(sif.findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');
//   });
// })

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
function solution(str, ending) {
  return str.endsWith(ending);
}
// Test cases
console.log(solution('abc', 'bc'));  // returns true
console.log(solution('abc', 'd'));   // returns false

// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?
// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"
function numberToString(num) {
  return num.toString();
}
//test code
const assert = require('chai').assert;
describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(numberToString(67), '67');
  });
});
// square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.
function squareDigits(num){
  //we check if num is 0
    if(num === 0){
        return 0;
    }
  
  //we define the result variable
  let result = ' '
  //create an iteration that will square the number
  while (num > 0){
    //define the whole digit
    const digit = num % 10
    //square the whole digit
    const squaredDigit = digit ** 2
    //formula to concat together
    result = squaredDigit + result
    //round to the nearest 10th
    num = Math.floor(num / 10)
  }
    return parseInt(result)
}
//test code
const { assert } = require("chai")

describe("Basic tests", () => {
  
  it("squareDigits(3212) should equal 9414", () => {
    assert.strictEqual(squareDigits(3212), 9414);
  });

  it("squareDigits(2112) should equal 4114", () => {
    assert.strictEqual(squareDigits(2112), 4114);
  });

  it("squareDigits(0) should equal 0", () => {
    assert.strictEqual(squareDigits(0), 0);
  });
})

function getCount(str) {
  const vowels = "aeiou";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}


//alrernative soulutions
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

const {assert} = require("chai");

describe("Vowels Count Tests",function(){
  it("should return 5 for 'abracadabra'",function(){
    assert.strictEqual(getCount("abracadabra"), 5) ;
  });
});

//add the sum of an array of numbers
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

//test case
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(sum([]), 0);
Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);
  });
});


//problem: 
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
//code
function makeNegative(num) {
  if (num > 0) {
    return -num;
  } else {
    return num;
  }
}

//test code
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(makeNegative(42), -42);
  });
});

//Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

//(In this case, all triangles must have surface greater than 0 to be accepted).
function isTriangle(a,b,c){
  if (a + b > c && a + c > b && b + c > a){
    return true
  } else{
  return false;}
  }
  //test
  const { assert } = require("chai")

describe("Public tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(isTriangle(1,2,2), true);
    assert.strictEqual(isTriangle(7,2,2), false);
  });
})

//Determine offspring sex based on genes XX and XY chromosomes
/*The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
*/
function chromosomeCheck(sperm) {
  if (sperm === 'XX'){
    return ("Congratulations! You're going to have a daughter.")
  }else{
    return ("Congratulations! You're going to have a son.")
  }
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(chromosomeCheck('XY'), "Congratulations! You're going to have a son.")
Test.assertEquals(chromosomeCheck('XX'), "Congratulations! You're going to have a daughter.")
  });
});
