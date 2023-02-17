<style>
    p {
        text-align: left !important;
    }
</style>

<!--populate with user info using JS-->
<div id="email"></div>
<div id="name"></div>
<div id="dob"></div>
<br>

<button onclick="deleteUsr()">Delete user</button>

<script>
      // prepare URL
  var url = "https://crimebusters.tk/api/person/findEmail";
  


  // set options for cross origin header request
    options = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // fetch the API
  fetch(url, options)
    // response is a RESTful "promise" on any successful fetch
    .then(response => {
      // check for response errors and display
      if (response.status !== 200) {
        const errorMsg = 'Database response error: ' + response.status;
        console.log(errorMsg);
    /**********************************************************/
        //HTML error output
        const p = document.createElement("p");
        p.appendChild(document.createTextNode("Oops! There seems to be an error with the server. Sorry for the inconvenience, please try again at a later time.")); 
        document.getElementById("loginError").appendChild(p);
    /********************************************************/
        return;
      }



      response.json().then(data => {
        console.log(data);
        var email = data.email;
        var name = data.name;
        var dob = data.dob;
        //original dob JSON looks like this: 2023-02-12 00:00:00.0, rm 
        //00:00:00.0
        dob = dob.slice(0, -10)

        //print user info (HTML)
        var p = document.createElement("p");
        p.appendChild(document.createTextNode("Email: " + email)); 
        document.getElementById("email").appendChild(p);

        //need to redeclare var p, else will print string on same line
        p = document.createElement("p");
        p.appendChild(document.createTextNode("Name: " + name)); 
        document.getElementById("name").appendChild(p);
        
        //dob
        p = document.createElement("p");
        p.appendChild(document.createTextNode("Birthday: " + dob)); 
        document.getElementById("dob").appendChild(p);
         
        })
      }
      )


    function deleteUsr() {
        var baseurl = "https://crimebusters.tk"

        /*************************************************
         * THIS IS PROBABLY NOT NEEDED
        // Comment out next line for local testing
        var  baseurl = "http://localhost:8085"
        **************************************************/


        // Authenticate endpoint
        const login_url = baseurl + '/api/person/delete/35';

        // Set body to include login data
        /*
        const body = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        };
        */
      
       
/*
        // Set Headers to support cross origin
        //IMPORTANT!!!!!!! TO SUCCESSFULLY POST, YOU NEED TO REMOVE
        // credentials:'include'
        const requestOptions = {
            method: 'DELETE',
            
            //mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'include', // include, *same-origin, omit
            
            //body: JSON.stringify(body),

            headers: {
                "content-type": "application/json"
            },
            
        };
        */

   options = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
  };
        
        // Fetch JWT
            fetch(login_url, options)
            .then(response => {
                // trap error response from Web API
                if (!response.ok) {
                    const errorMsg = 'Login error: ' + response.status;
                    console.log(errorMsg);
;
                
                    return;
                }

                console.log("User successfully created");
                // Success!!!
                // Redirect to Database location
                //window.location.href = "https://lwu1822.github.io/crimebustersrevival/homepage";
                //window.location.href = "{{ site.baseurl }}/homepage";
            })

    }
</script>