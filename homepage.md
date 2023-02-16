<style>
.dropdown {
  float: right;
  overflow: hidden;
  background-color: #D1A3CE;
}

.dropdown .dropbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: #ffffff;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin-top: 3%;
}

.navbar a:hover, .dropdown:hover .dropbtn {
  color: #005b96;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #D1A3CE;
  padding-top: 1%;
  padding-bottom: 2%;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: #001535;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #D1A3CE;
}

.dropdown:hover .dropdown-content {
  display: block;
}

 .align-right {
  text-align: right;
  border: 0;
}
</style>




<div class="dropdown">
  <!--button says: [email]-->
  <!--SEE JS (JS EDITS THE NAME IN [email])-->
  <button class="dropbtn" id="dropbtn"></button>

  <!--dropdown says: Settings-->
  <div class="dropdown-content">
      <a href="{{ site.baseurl }}/settings">Settings</a>
  </div>
</div>


<br>
<br>
<br>

<br>

<p> Codebusters Revival!
The return of our awesome website. </p>

<div id="error"></div>





<script>

  

   // prepare URL
  var url = "https://crimebusters.tk/api/person/findEmail";



  /*************************************************
  * THIS IS PROBABLY NOT NEEDED
  // Uncomment next line for localhost testing 
  // url = "http://localhost:8085/api/person/";
  *****************************************************/


  // set options for cross origin header request
  const options = {
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



       // valid response will contain json data
      response.json().then(data => {
          console.log(data.email);
          var email = data.email;

          //make button on the right side of the screen with email
          var p = document.createElement("p");
          p.appendChild(document.createTextNode(email)); 
          document.getElementById("dropbtn").appendChild(p);

   
          
         
        })
      }
      )
</script>
