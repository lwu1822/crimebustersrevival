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

<div id="log"></div>
<div id="logSuccess"></div>

<!-- Include the JavaScript file -->
<script>
  
function decrypt() {
  let expression = document.getElementById("message").value;

  const urlStart = "https://crimebusters.tk/api/decrypt/all/";
  const url = urlStart + expression;

  console.log(url); 

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      const decryptedMessage = data.result;
      
      document.getElementById("decrypted").innerHTML = decryptedMessage; 

      //log button
    var logButton = document.createElement("button"); 
    var logText = document.createTextNode("Log?"); 
    logButton.appendChild(logText);

    logButton.onclick = function() {
        console.log("hi");

        var getUrl = "https://crimebusters.tk/api/person/findEmail";

        var getOptions = {
            method: 'GET', 
            mode: 'cors', 
            cache: 'default', 
            credentials: 'include', 
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(getUrl, getOptions)
        .then(response => {
            //error message
            if (!response.ok) {
                const errorMsg = 'Login error: ' + response.status;
                console.log(errorMsg);
                return;
            }

            //if success
            console.log("User id successfully obtained");

            response.json().then(data => {
                console.log(data);

                //get id and email from cookie
                var id = data.id;
                var email = data.email; 

                console.log("id: " + id);


                var baseurl = "https://crimebusters.tk"
        
                // Authenticate endpoint
                const login_url = baseurl + '/api/person/log';

                const body = {
                    email: email,
                    cipherType: "caesar",
                    ciphertext: message, 
                    plaintext: decrypted,
                    userId: id
                };

            

                // Set Headers to support cross origin
                //IMPORTANT!!!!!!! TO SUCCESSFULLY POST, YOU NEED TO REMOVE
                // credentials:'include'
                const requestOptions = {
                    method: 'POST',
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    //credentials: 'include', // include, *same-origin, omit
                    body: JSON.stringify(body),
                    headers: {
                        "content-type": "application/json"
                    },
                };

            
                fetch(login_url, requestOptions)
                .then(response => {
                    // trap error response from Web API
                    if (!response.ok) {
                        const errorMsg = 'Login error: ' + response.status;
                        console.log(errorMsg);
                    
                        return;
                    }

                    console.log("Log success");

                    var p = document.createElement("p"); 
                    var logSuccessMsg = document.createTextNode("Cipher successfully saved!"); 
                    p.appendChild(logSuccessMsg);
                    document.getElementById("logSuccess").appendChild(logSuccessMsg); 

                })

            
            })
        })
    };

    document.getElementById("log").appendChild(logButton);
}

</script>
</body>
</html>