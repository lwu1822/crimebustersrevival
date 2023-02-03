function decrypt() {
    // Get the message from the text box
    var message = document.getElementById("message").value;

    // Shift each letter of the message by 3
    var decrypted = "";
    for (var i = 0; i < message.length; i++) {
        // Get the ASCII code of the current character
        var c = message.charCodeAt(i);

        if (c >= 65 && c <= 90) {  // uppercase letter
            c = (25 - (c - 65)) % 26 + 65;
        } else if (c >= 97 && c <= 122) {  // lowercase letter
            c = (25 - (c - 97)) % 26 + 97;
        }

        // Append the encrypted character to the encrypted message
        decrypted += String.fromCharCode(c);
    }

    // Update the HTML page with the encrypted message
    document.getElementById("decrypted").innerHTML = decrypted;
}