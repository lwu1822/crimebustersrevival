<style>
  @import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
</style>
<html>
<head>
    <title>Affine Cipher</title>
</head>
<body>
    <h1>Affine Cipher</h1>

  <p>Enter a message to be encrypted:</p>
    <input type="text" id="message">
    <p>Key:</p>
    <input type="text" id="key">
    <br>
    <br>
    <button onclick="subscrypt()">Encrypt</button>
    <br>
    <br>
    <p>Encrypted message:</p>
    <p id="encrypted"></p>
<script>
  function subscrypt() {
    let expression = document.getElementById("message").value;
    let expression2 = document.getElementById("key").value;
    const urlStart = "https://crimebusters.tk/api/subsc/all/";
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
    
<div id="log"></div>
<div id="logSuccess"></div>
</body>