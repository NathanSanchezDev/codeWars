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

  const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(lovefunc(1,4), true)
    assert.strictEqual(lovefunc(2,2), false)
    assert.strictEqual(lovefunc(0,1), true)
    assert.strictEqual(lovefunc(0,0), false)
  });
});
