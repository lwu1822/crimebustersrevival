function decrypt() 
    // Get the message from the text box
    var message = document.getElementById("message").value;

// Non-linear unicode rotate
Cipher.keyRotate = function(text, key, reverse)
    // Surrogate pair limit
    var bound = 0x10000;

    // Create string from character codes
    return String.fromCharCode.apply(null,
        // Turn string to character codes
        text.split('').map(function(v, i) {
            // Get rotation from key
            var rotation = key[i % key.length].charCodeAt();

            // Are we decrypting?
            if(reverse) rotation = -rotation;

            // Return current character code + rotation
         // Append the encrypted character to the encrypted message
            decrypted += String.fromCharCode(String);
        })