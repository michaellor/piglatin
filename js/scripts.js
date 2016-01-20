
   var firstCharacter;

  var isVowel = function(string){
   firstCharacter = string.charAt(0);

  if ((firstCharacter === "a") || (firstCharacter === "e") || (firstCharacter === "i") || (firstCharacter === "o") || (firstCharacter === "u") || (firstCharacter === "A") || (firstCharacter === "E") || (firstCharacter === "I") || (firstCharacter === "O") || (firstCharacter === "U")) {
     return addAy(string);
    } else{
      return isNotVowel(string);
    }
  }

  var isNotVowel = function(string){
   firstCharacter = string.charAt(0);


    if ((firstCharacter !== "a") && (firstCharacter !== "e") && (firstCharacter !== "i") && (firstCharacter !== "o") && (firstCharacter !== "u") && (firstCharacter !== "A") && (firstCharacter !== "E") && (firstCharacter !== "I") && (firstCharacter !== "O") && (firstCharacter !== "U")){
     return firstConsonants(string);
   }else{
     return false;
   }

  }

  var firstConsonants = function(string){
    var i = 0;
    for(i, i === , i++)
    firstCharacter = string.charAt(0);
  }

  var addAy = function(string) {
    string = string + "ay";
    return string;
  }



  $(document).ready(function() {



          });
