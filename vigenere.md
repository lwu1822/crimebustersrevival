<style>
  @import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
</style>
<html>
<head>
    <title>Vigenere Cipher</title>
</head>
<body>
<h1>Vigenere Cipher</h1>

<p>Enter a message to be encrrypted:</p>
    <input type="text" id="message">
    <p>Key:</p>
    <input type="text" id="key">
    <br>
    <br>
    <button onclick="encrypt()">Encrypt</button>
    <br>
    <br>
    <p>Encrypted message:</p>
    <p id="encrypted"></p>
<!-- Include the JavaScript file -->
<script>
function encrypt{
    var message = document.getElementById("message").value;
    var key = parseInt(document.getElementById("key").value);
  var cypher = "";
  for(var i = 0, j = 0; i < message.length; i++){
    var currentLetter = message[i];
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
  document.getElementById("encrypted").innerHTML = cypher;
};

</script>
</body>
</html>