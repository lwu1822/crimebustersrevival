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
  function encrypted() {
    // Get the message from the text box
    var message = document.getElementById("message").value;
    var key = parseInt(document.getElementById("key").value);
    // Shift
    var encrypted = "";
  for (let i = 0, j = 0; i < message.length; i++) {
    const c = message.charAt(i)
    if (isLetter(c)) {
      if (isUpperCase(c)) {
        encrypted += String.fromCharCode((c.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26 + 65) // A: 65
      } else {
        encrypted += String.fromCharCode((c.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26 + 97) // a: 97
      }
    } else {
      encrypted += c
    }
    j = ++j % key.length
  }
  return encrypted
  document.getElementById("encrypted").innerHTML = encrypted;
}
      
</script>
</body>
</html>