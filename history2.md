<style>
    .tablelines table, .tablelines td, .tablelines th {
    border: 1px solid white;
    }
</style>

<br>

<h1>Saved Ciphers</h1>

<table class="tablelines">
    <tr>
        <th>Cipher type</th>
        <th>Plaintext</th>
        <th>Ciphertext</th>
    </tr>
<tbody id="history">

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




            //delete user based on id
            var getLogURL = "https://crimebusters.tk/api/log/getlog";

            var getLogOptions = {
                method: 'GET', 
                mode: 'cors', 
                cache: 'default', 
                credentials: 'include', 
                headers: {
                'Content-Type': 'application/json',
                },
            };
                
            fetch(getLogURL, getLogOptions)
            .then(response => {
                //error
                if (!response.ok) {
                    const errorMsg = 'Login error: ' + response.status;
                    console.log(errorMsg);
                     var tr = document.createElement("tr");
                      
                      // td for joke cell
                      var cipherType = document.createElement("td");
                      cipherType.innerHTML = "You must login to view history!";  // add fetched data to innerHTML

                     tr.appendChild(cipherType);
                      
                      document.getElementById("history").appendChild(tr);
                    return;
                }
                
                response.json().then(data => {

                    console.log(data);

                
                for (const row of data) {
                    if (id == row.userId) {
                    // make "tr element" for each "row of data"
                      const tr = document.createElement("tr");
                      
                      // td for joke cell
                      const cipherType = document.createElement("td");
                      cipherType.innerHTML = "test";  // add fetched data to innerHTML
          
                      // td for haha cell with onclick actions
                      const plaintext= document.createElement("td");
                      plaintext.innerHTML = row.plaintext; 
          
                      // td for boohoo cell with onclick actions
                      const ciphertext= document.createElement("td");
                      ciphertext.innerHTML = row.ciphertext; 

                      
                      // this builds ALL td's (cells) into tr (row) element
                      tr.appendChild(cipherType);
                      tr.appendChild(plaintext);
                      tr.appendChild(ciphertext);
          
                      // this adds all the tr (row) work above to the HTML "result" container
                      document.getElementById("history").appendChild(tr);
                    }

                 
                    }
                

                })
                
                })



            })
        }) 

  

</script>