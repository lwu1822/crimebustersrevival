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
    <p>Shift:</p>
    <input type="number" id="shift">
    <br>
    <br>
    <button onclick="encrypt()">Encrypt</button>
    <br>
    <br>
    <p>Encrypted message:</p>
    <p id="encrypted"></p>
<!-- Include the JavaScript file -->
<script>
  
  function encrypt() {
    let expression = document.getElementById("message").value;

    const urlStart = "http://localhost:8085/api/vigenc/all/";
    const url = urlStart + expression;

    console.log(url); 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        document.getElementById("encrypted").innerHTML = data.result; 
      
      })
      
  }
</script>
</body>
</html>