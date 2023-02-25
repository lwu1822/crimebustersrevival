<style>
    .userInfo {
        text-align: left !important;
    }

    .deleteButton {
    background: #c90c0c;
    color: #001535;
    font-family: 'Dosis', sans-serif;
    font-size: large;
    border-radius: 8px;
    padding: 8px;
    }
</style>

# Settings

<br>

<!--populate with user info using JS-->
<div id="userInfo">
  <div id="email"></div>
  <div id="name"></div>
  <div id="dob"></div>
</div>
<br>

<button onclick="updateUsr()">Update settings</button>

<button onclick="deleteUsr()" class="deleteButton">Delete user</button>

<script>
  //show user information (email, dob, name, etc.) on settings page
  
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
        const p = document.createElement("p");
        p.appendChild(document.createTextNode("Oops! There seems to be an error with the server. Sorry for the inconvenience, please try again at a later time.")); 
        document.getElementById("loginError").appendChild(p);
        return;
      }

      //show user info if success
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
    })
  
  //update user button
  function updateUsr() {
    window.location.href = "{{ site.baseurl }}/updateinfo";
  }

  //delete user button
  function deleteUsr() {
    //get user id from cookie (need id to delete user)
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

          //get id from cookie
          var id = data.id;

          console.log("id: " + id);

          //delete user based on id
          var deleteBaseURL = "https://crimebusters.tk";
          var deleteURL = deleteBaseURL + '/api/person/delete/' + id;

          console.log("delete user url: " + deleteURL);

          var deleteOptions = {
            method: 'GET', 
            mode: 'cors', 
            cache: 'default', 
            credentials: 'include', 
            headers: {
              'Content-Type': 'application/json',
            },
          };
              
          fetch(deleteURL, deleteOptions)
          .then(response => {
              //error
              if (!response.ok) {
                  const errorMsg = 'Login error: ' + response.status;
                  console.log(errorMsg);
                  return;
              }

              console.log("User successfully deleted");

              window.location.href = "{{ site.baseurl }}/homepage";
            
            })


         
        })
    })
       

/*
    var baseurl = "https://crimebusters.tk"
    const login_url = baseurl + '/api/person/delete/38';

    var deleteOptions = {
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
            return;
        }

        console.log("User successfully created");
       
      })
*/


    /*
    function deleteUsr() {
        var baseurl = "https://crimebusters.tk"

         //THIS IS PROBABLY NOT NEEDED
        // Comment out next line for local testing
        var  baseurl = "http://localhost:8085"


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

/*
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
            */

    }
</script>