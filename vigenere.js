  /**
 * Created by boyoung on 3/10/16.
 */

// steps
// ci = (pi + kj) % 26
// Ger user input with plain text, keyword
// mapping each letter from plain text with integer (A-Z, a-z, 0-26) - use ASCII code
// ASCII Code reference: A-Z (65-90), a-z (97-122)
// mapping each letter from keyword text with integer - use ASCII code
// preserve the case of each letter
// preserve non-alphabetical characters from input.

var encryptBtn = $("#encrypt");

function isUpperCase(letter){
  var l = letter.charCodeAt();
  if(l >= 65 && l <= 90){
    return true;
  }else{
    return false;
  }
};

function isLowerCase(letter){
  var l = letter.charCodeAt();
  if(l >= 97 && l <= 122){
    return true;
  }else{
    return false;
  }
};

var encrypt = function(plainMsg, key){
  var cypher = "";
  for(var i = 0, j = 0; i < plainMsg.length; i++){
    var currentLetter = plainMsg[i];

    if(isUpperCase(currentLetter)){
      var upperLetter = ((currentLetter.charCodeAt() - 65) + (key[j%key.length].toUpperCase().charCodeAt() - 65)) % 26;
      cypher += String.fromCharCode(upperLetter+65);
      j++;
    }else if(isLowerCase(currentLetter)){
      var lowerLetter = ((currentLetter.charCodeAt() - 97) + (key[j%key.length].toLowerCase().charCodeAt() - 97)) % 26;
      cypher += String.fromCharCode(lowerLetter+97);
      j++;
    }else{
      cypher += currentLetter;
    }
  }
  return cypher;
};

$(document).ready(function(){

  encryptBtn.on("click", function(){
    var plainMsg = $("#userText");
    var keyword = $("#keyword");

    if(plainMsg.val() == "" || keyword.val() == "" ){
      alert("Please type both secret message and keyword!");
    }else{
      plainMsg.val(encrypt(plainMsg.val(), keyword.val()));
    }
  });

});
