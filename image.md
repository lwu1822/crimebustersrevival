<html>
    <h1>
        Image Decryptor
    </h1>
    <br><br>
    <label> Choose the File to upload: </label>
    <input type="file" id="myFile" /> <br /><br />
     
    <input type="Submit" value="submit" />

    <p>Decrypted message:</p>
    <p id="decrypted"></p>

    
  <!-- <script>
    async function submitImage() {
      // get the file from input
      const file = document.getElementById("myFile").files[0];

      // create FormData to send the file to the API
      const formData = new FormData();
      formData.append("file", file);

      // call the API and get the response
      const response = await fetch("/api/decrypt", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      // show the decrypted message
      document.getElementById("decrypted").innerHTML = data.message;
    }
  </script> -->
</html>