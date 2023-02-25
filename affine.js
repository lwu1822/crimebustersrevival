function decrypt() {
    // Get the message from the text box
    var message = document.getElementById("message").value;
    var shift = parseInt(document.getElementById("shift").value);

    // Shift each letter of the message by 3
    var decrypted = "";
    for (var i = 0; i < message.length; i++) {
        // Get the ASCII code of the current character
        var c = message.charCodeAt(i);

        // Shift the ASCII code by 3
        // If the character is a letter (uppercase or lowercase), wrap around if necessary
        if (c >= 65 && c <= 90) {  // uppercase letter
            c = (c - 65 + shift) % 26 + 65;
        } else if (c >= 97 && c <= 122) {  // lowercase letter
            c = (c - 97 + shift) % 26 + 97;
        }

        // Append the encrypted character to the encrypted message
        decrypted += String.fromCharCode(c);
    }

    // Update the HTML page with the encrypted message
    document.getElementById("decrypted").innerHTML = decrypted;


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
                    cipherType: "affine",
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

function encrypt() {
    // Get the message from the text box
    var message2 = document.getElementById("message2").value;
    var shift2 = parseInt(document.getElementById("shift2").value);

    // Shift each letter of the message by 3
    var encrypted = "";
    for (var i = 0; i < message2.length; i++) {
        // Get the ASCII code of the current character
        var c = message2.charCodeAt(i);

        // Shift the ASCII code by 3
        // If the character is a letter (uppercase or lowercase), wrap around if necessary
        if (c >= 65 && c <= 90) {  // uppercase letter
            c = (c - 65 - shift2 + 26) % 26 + 65;
        } else if (c >= 97 && c <= 122) {  // lowercase letter
            c = (c - 97 - shift2 + 26) % 26 + 97;
        }

        // Append the encrypted character to the encrypted message
        encrypted += String.fromCharCode(c);
    }

    // Update the HTML page with the encrypted message
    document.getElementById("encrypted").innerHTML = encrypted;
}