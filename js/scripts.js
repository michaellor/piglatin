// var vowelArray = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
 var firstCharacter;

var isVowel = function(string){
 firstCharacter = string.charAt(0);

if ((firstCharacter === "a") || (firstCharacter === "e") || (firstCharacter === "i") || (firstCharacter === "o") || (firstCharacter === "u") || (firstCharacter === "A") || (firstCharacter === "E") || (firstCharacter === "I") || (firstCharacter === "O") || (firstCharacter === "U")) {
   return true;
  } else{
    return false;
  }
}

var isNotVowel = function(string){
 firstCharacter = string.charAt(0);

  if ((firstCharacter !== "a") && (firstCharacter !== "e") && (firstCharacter !== "i") && (firstCharacter !== "o") && (firstCharacter !== "u") && (firstCharacter !== "A") && (firstCharacter !== "E") && (firstCharacter !== "I") && (firstCharacter !== "O") && (firstCharacter !== "U")){
   return true;
 }else{
   return false;
 }
}

var addAy = function(string) {
  var theWord = string;
  theWord = theWord + "ay";
  return theWord;
}

$(document).ready(function() {



});
