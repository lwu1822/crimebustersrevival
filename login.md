## Login
<br>

<form action="login()">
    Email: <input type="email" required>
    <br>
    <br>
    Password: <input type="password" required>
    <br>
    <br>
    <button>Login</button>
    <br>
    <a href="signup">No account? Sign up here</a>
</form>

<br>

<script>

var url = "https://crimebusters.tk"
//var url = "http://localhost:8085"
// Comment out next line for local testing
// url = "http://localhost:8085"
// Authenticate endpoint
const login_url = url + '/authenticate';


    // Set body to include login data
    const body = {
        email: "a@gmail.com",
        password: "a",
    };

    // Set Headers to support cross origin
    const requestOptions = {
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
    fetch(login_url, requestOptions);

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
  fetch("http://localhost:8085/api/person/19", options)
  .then(response => {
      // check for response errors and display
      response.json().then(data => {
        console.log(data);
      })
      });


    /*
data = {email:"a@gmail.com", password:"a"};
fetch("https://crimebusters.tk/authenticate", 
{method: 'POST', 
mode: 'cors', 
cache: 'no-cache', 
//credentials: 'include', 
withCredentials: 'true',
body: JSON.stringify(data),
headers: {'content-type':'application/json',
}, 
});
*/



    /*
data = {email:"a@gmail.com",password:"a"};
fetch("https://crimebusterstest.tk/login/authenticate", {method: 'POST', mode: 'no-cors', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}, body: JSON.stringify(data)})
*/

/*
    data = {email:"a@gmail.com",password:"a"};
fetch("https://crimebusters.tk/login/authenticate", {method: 'POST',  headers: {'Accept': 'application/json', 'Content-Type':'application/json'}, body: JSON.stringify(data)})
*/
</script>