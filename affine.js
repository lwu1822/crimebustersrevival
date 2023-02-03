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