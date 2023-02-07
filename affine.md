<style>
  @import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
</style>
<html>
<head>
    <title>Affine Cipher</title>
</head>
<body>
    <h1>Affine Cipher</h1>

    <p>Enter a message to be decrypyted:</p>
    <input type="text" id="message">
    <p>Shift:</p>
    <input type="number" id="shift">
    <br>
    <br>
    <button onclick="decrypt()">Decrypt</button>
    <br>
    <br>
    <p>Decrypted message:</p>
    <p id="decrypted"></p>

<!-- Include the JavaScript file -->
<script src="affine.js"></script>
</body>