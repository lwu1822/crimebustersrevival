<style>
    .userInfo {
        text-align: left !important;
    }

    .modal .modal-content .contact-form .box .deleteButton {
    background: #c90c0c !important;
    color: #ffffff;
    font-family: 'Dosis', sans-serif;
    font-size: large;
    border-radius: 8px;
    padding: 8px;
    }

    .modal .modal-content .contact-form .box .deleteButton:hover {
    background: #9c0b0b !important;
    color: #ffffff;
    font-family: 'Dosis', sans-serif;
    font-size: large;
    border-radius: 8px;
    padding: 8px;
    }


      .modal {
        display: none;
        position: fixed;
        z-index: 8;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.4);
      }
     
      .modal-content {
        margin: 50px auto;
        border: 1px solid #999;
        width: 60%;
      }
      
      span {
        color: #9E79AB;
        display: block;
        padding: 0 0 5px;
      }
      .box {
        padding: 25px;
        margin: 25px;
        box-shadow: 0 2px 5px #f5f5f5;
        background: #ffffff;
      }
      input,
      textarea {
        width: 90%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #1c87c9;
        outline: none;
      }
      .contact-form button {
        width: 100%;
        padding: 10px;
        border: none;
        background: #1c87c9;
        font-size: 16px;
        font-weight: 400;
        color: #fff;
      }
      button:hover {
        background: #2371a0;
      }
      .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }
      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
      
     button.button {
        background: #c90c0c;
        border-top: none;
        outline: none;
        border-right: none;
        border-left: none;
        border-bottom: #02274a 1px solid;
        padding: 5px 5px 5px 5px;
        font-size: 16px;
        cursor: pointer;
      }
      button.button:hover {
        background: #9c0b0b;
      }
</style>

# Settings

<br>

<!--populate with user info using JS-->
<div id="userInfo">
  <div id="email"></div>
  <div id="name"></div>
  <div id="dob"></div>
  <div id="roles"></div>
</div>
<br>

<button onclick="updateUsr()">Update settings</button>




<p>
<button class="button" data-modal="modalOne">Delete account</button>
</p>
 
  <div id="modalOne" class="modal">
  <div class="modal-content">
    <div style="color: black" class="contact-form">
      <a class="close">&times;</a>
      <div class="box">
        <p style="color: black">
        Warning! Are you sure you want to delete your account?
        </p>
        
          <button onclick="deleteUsr()" class="deleteButton">Delete account</button>
          </div>
        </div>
      </div>
    </div>


<script>
     let modalBtns = [...document.querySelectorAll(".button")];
      modalBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.getAttribute("data-modal");
          document.getElementById(modal).style.display = "block";
        };
      });
      let closeBtns = [...document.querySelectorAll(".close")];
      closeBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.closest(".modal");
          modal.style.display = "none";
        };
      });
      window.onclick = function (event) {
        if (event.target.className === "modal") {
          event.target.style.display = "none";
        }
      };



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

        var role = data.personrole[0].role;
        console.log("role" + role);

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
         
        //roles
        var br = document.createElement("br");
        p = document.createElement("p");
        p.appendChild(document.createTextNode("Roles: ")); 
        document.getElementById("roles").appendChild(p);
        for (var i = 0; i < data.personrole.length; i++) {

          p = document.createElement("p");
          p.appendChild(document.createTextNode(data.personrole[i].role)); 

          document.getElementById("roles").appendChild(p);
          document.getElementById("roles").appendChild(br);
        }
        

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