var pigLatin = function(string) {

  if (isVowel = true) {
    string = string + "ay";
    return string;
  } else {
    return firstConsonants(string);
  }

}



  var isVowel = function(string){
  var firstCharacter = string.charAt(0);

  if ((firstCharacter === "a") || (firstCharacter === "e") || (firstCharacter === "i") || (firstCharacter === "o") || (firstCharacter === "u") || (firstCharacter === "A") || (firstCharacter === "E") || (firstCharacter === "I") || (firstCharacter === "O") || (firstCharacter === "U")) {
     return true;
    } else{
      return false;
    }
  }

  var isNotVowel = function(string){
   firstCharacter = string.charAt(0);


    if ((firstCharacter !== "a") && (firstCharacter !== "e") && (firstCharacter !== "i") && (firstCharacter !== "o") && (firstCharacter !== "u") && (firstCharacter !== "A") && (firstCharacter !== "E") && (firstCharacter !== "I") && (firstCharacter !== "O") && (firstCharacter !== "U")){
     return firstConsonants(string); //ultimately splice

   }else{
     return false;
   }

  }


  var firstConsonants = function(string){
    var index = 0;

    for(index ;; index++ ){
      if ((string.charAt(index) === "u") || (string.charAt(index) === "U") || (string.charAt(index) === "a") || (string.charAt(index) === "A") || (string.charAt(index) === "e") || (string.charAt(index) === "E") || (string.charAt(index) === "i") || (string.charAt(index) === "I") || (string.charAt(index) === "O") || (string.charAt(index) === "o")) {

        console.log(index);
        return index;


      }
    }

    var sliceFront = string.slice(0,index);
    string = string.slice(index);


    var sliceAy = sliceFront + "ay";
    alert(sliceFront);
    console.log(sliceFront);

  }





  $(document).ready(function() {



          });
