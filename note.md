<style>
    .tablelines table, .tablelines td, .tablelines th {
    border: 1px solid white;
    }
</style>


<html>
<body>
<p>Enter a note:</p>
    <input type="text" id="note">
    <br>
    <br>
    <button onclick="addnote()">AddNote</button>
    <br>
    <br>
<div id="note"></div>
<div id="noteSuccess"></div>

<!-- Include the JavaScript file -->
<script src="note.js"></script>
</body>
</html>

<br>

<h1>Notes for a person</h1>

<table class="tablelines">
    <tr>
        <th>Person Name</th>
             <th>Note</th>
    </tr>
<tbody id="noteTable">

</tbody>
    
</table> 


<script>

    //get user info based on cookie
    var usrSettingsUrl = "https://crimebusters.tk/api/person/findEmail";

    var usrSettingsOptions = {
        method: 'GET', 
        mode: 'cors', 
        cache: 'default', 
        credentials: 'include', 
        headers: {
        'Content-Type': 'application/json',
        },
    };

    fetch(usrSettingsUrl, usrSettingsOptions)
        .then(response => {
        //error message
        if (response.status !== 200) {
            const errorMsg = 'Database response error: ' + response.status;
            console.log(errorMsg);
            //HTML error output
            return;
        }

        //show user info if success
        response.json().then(data => {
            console.log(data);
            var id = data.id;

            //get note for the person 
            var getNoteURL = "https://crimebusters.tk/api/person/getnote";

            var getNoteOptions = {
                method: 'GET', 
                mode: 'cors', 
                cache: 'default', 
                credentials: 'include', 
                headers: {
                'Content-Type': 'application/json',
                },
            };
                
            fetch(getNoteURL, getNoteOptions)
            .then(response => {
                //error
                if (!response.ok) {
                    const errorMsg = 'Login error: ' + response.status;
                    console.log(errorMsg);
                    return;
                }
                
                response.json().then(data => {

                    console.log(data);

                
                for (const row of data) {
                    if (id == row.userId) {
                    // make "tr element" for each "row of data"
                      const tr = document.createElement("tr");
                      
                      // td for joke cell
                      const personName = document.createElement("td");
                      personName.innerHTML = row.personName;  // add fetched data to innerHTML

                       // td for joke cell
                      const noteText = document.createElement("td");
                      noteText.innerHTML = row.noteText;  // add fetched data to innerHTML
          
                                            
                      // this builds ALL td's (cells) into tr (row) element
                      tr.appendChild(personName);
                      //tr.appendChild(plaintext);
                      tr.appendChild(noteText);
          
                      // this adds all the tr (row) work above to the HTML "result" container
                      document.getElementById("noteTable").appendChild(tr);
                    }                 
                    }               

                })
                
                })
            })
        }) 

</script>