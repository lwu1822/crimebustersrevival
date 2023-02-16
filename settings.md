<!--populate with user info using JS-->
<div id="email"></div>
<div id="name"></div>
<div id="dob"></div>

<script>
      // prepare URL
  var url = "https://crimebusters.tk/api/person/findEmail";
  

  
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
</script>