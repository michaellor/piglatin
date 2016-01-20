

describe("isVowel", function(){
  it("checks the value of the first character in the word to see if it's a vowel", function(){
     expect(isVowel("apple")).to.equal("appleay");
  });
});

describe("isNotVowel", function(){
  it("checks the value of the first character in the word to see if it's not a vowel", function(){
     expect(isNotVowel("plum")).to.equal("plumay");
  });
});

describe("firstConsonants", function(){
  it("counts the number of first consonants in a string", function(){
     expect(firstConsonants("plum")).to.equal(2);
  });
});

describe("addAy", function(){
  it("adds 'ay' to the end of a word beginning with a vowel", function(){
    expect(addAy("apple")).to.equal("appleay");
  });
});
