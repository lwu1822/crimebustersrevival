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
        /*
        const p = document.createElement("p");
        p.appendChild(document.createTextNode("Oops! There seems to be an error with the server. Sorry for the inconvenience, please try again at a later time.")); 
        document.getElementById("loginError").appendChild(p);
        */
        return;
      }

      //show user info if success
      response.json().then(data => {
        console.log(data);
        
        var id = data.id;

        console.log("home.html id: " + id); 


        var baseUrl = "https://crimebusters.tk/api/person/";

        var idUrl = id.toString(); 

        var specificUsrUrl = baseUrl + idUrl; 

        var specificUsrOptions = {
          method: 'GET', 
          mode: 'cors', 
          cache: 'default', 
          credentials: 'include', 
          headers: {
            'Content-Type': 'application/json',
          },
        };

        fetch(specificUsrUrl, specificUsrOptions)
          .then(response => {
            //error message
            if (response.status !== 200) {
              const errorMsg = 'Database response error: ' + response.status;
              console.log(errorMsg);
              //HTML error output
              /*
              const p = document.createElement("p");
              p.appendChild(document.createTextNode("Oops! There seems to be an error with the server. Sorry for the inconvenience, please try again at a later time.")); 
              document.getElementById("loginError").appendChild(p);
              */
              return;
            }

            //show user info if success
            response.json().then(data => {
              console.log(data);
              
              console.log(data.loginStatus);

              var loginStatus = data.loginStatus; 

              if (loginStatus == "in") {

                    getHistory();

                showUserMenu();
              } else {
                


                    showError();


               

              }
             
              
            })
          })
         
      })
    })
 

function showError() {
    var anonUrl = "https://crimebusters.tk/authenticate"

                /*************************************************
                * THIS IS PROBABLY NOT NEEDED
                // Comment out next line for local testing
                //var  baseurl = "http://localhost:8085"
                **************************************************/


                // Set body to include login data
                var body = {
                    email: "anon@gmail.com",
                    password: "a",
                };

              

                // Set Headers to support cross origin
                var anonOptions = {
                    method: 'POST',
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: 'include', // include, *same-origin, omit
                    body: JSON.stringify(body),
                    headers: {
                        "content-type": "application/json",
                    },
                };

                // Fetch JWT
                fetch(anonUrl, anonOptions);

                // Fetch JWT
                    fetch(anonUrl, anonOptions)
                    .then(response => {
                        // trap error response from Web API
                        if (!response.ok) {
                            const errorMsg = 'Login error: ' + response.status;
                            console.log(errorMsg);

                            //HTML error output
                            const p = document.createElement("p");
                            p.appendChild(document.createTextNode("Login unsuccessful. Please try again")); 
                            document.getElementById("loginError").appendChild(p);
                            return;
                        }


                        // Success!!!
                        // Redirect to Database location
                        window.location.href = "{{ site.baseurl }}/history2";
                        //window.location.href = window.location.href;
                    })
}


function getHistory() {
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
            var getLogURL = "https://crimebusters.tk/api/person/getlog";

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
                      cipherType.innerHTML = row.cipherType;  // add fetched data to innerHTML
          
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
}
  

  

</script>