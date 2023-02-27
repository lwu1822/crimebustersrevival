<style>
  @import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
</style>
<html>
<head>
    <title>Atbash Cipher</title>
</head>
<body>
    <h1>Atbash Cipher</h1>

<p>Enter a message to be decrypyted/encrypted:</p>
    <input type="text" id="message">
    <br>
    <br>
    <button onclick="decrypt()">Decrypt</button>
    <br>
    <br>
    <p>Decrypted message:</p>
    <p id="decrypted"></p>

<div id="log"></div>
<div id="logSuccess"></div>

<!-- Include the JavaScript file -->
<script src="atbash.js"></script>
</body>
</html>