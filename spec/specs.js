describe("isVowel", function(){
  it("checks the value of the first character in the word to see if it's a vowel", function(){
     expect(isVowel("apple")).to.equal(true);
  });
});

describe("isNotVowel", function(){
  it("checks the value of the first character in the word to see if it's not a vowel", function(){
     expect(isNotVowel("plum")).to.equal(true);
  });
});
describe("addAy", function(){
  it("adds 'ay' to the end of a word beginning with a vowel", function(){
    expect(addAy("apple")).to.equal("appleay");
  });
});
