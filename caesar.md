<style>
  @import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
</style>
<html>
<head>
    <title>Caesar Cipher</title>
</head>
<body>
<h1>Caesar Cipher</h1>

<p>Enter a message to be decrypyted:</p>
<input type="text" id="message">
<br>
<br>
<button onclick="decrypt()">Decrypt</button>
<br>
<br>
<p>Decrypted message:</p>
<p id="decrypted"></p>

<!-- Include the JavaScript file -->
<script>
  
  function decrypt() {
    let expression = document.getElementById("message").value;

    const urlStart = "http://localhost:8085/api/decrypt/all/";
    const url = urlStart + expression;

    console.log(url); 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        document.getElementById("decrypted").innerHTML = data.result; 
      
      })
      
  }
</script>
</body>
</html>