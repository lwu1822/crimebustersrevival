<style>
  @import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
</style>
<html>
<head>
    <title>Substitution Cipher</title>
</head>
<body>
<h1>Substitution Cipher</h1>

<p>Enter a message to be decrypted:</p>
    <input type="text" id="message">
    <p>Key:</p>
    <input type="text" id="key">
    <br>
    <br>
    <button onclick="subscrypt()">Decrypt</button>
    <br>
    <br>
    <p>Decrypted message:</p>
    <p id="encrypted"></p>
<!-- Include the JavaScript file -->
<script>
  function subscrypt() {
    let expression = document.getElementById("message").value;
    let expression2 = document.getElementById("key").value;
    const urlStart = "https://crimebusters.tk/api/substitution/all/";
    const url = urlStart + expression + "/" + expression2;
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