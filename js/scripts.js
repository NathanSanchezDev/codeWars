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