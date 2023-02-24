## Login
<br>

<form action="javascript:login()">
    Email: <input type="email" id="email" required>
    <br>
    <br>
    Password: <input type="password" id="password" required>
    <br>
    <br>
    <div id="loginError"></div>
    <button>Login</button>
    <br>
    <a href="signup">No account? Sign up here</a>
</form>

<br>

<script>
    function login() {
        var baseurl = "https://crimebusters.tk"

        /*************************************************
         * THIS IS PROBABLY NOT NEEDED
        // Comment out next line for local testing
        //var  baseurl = "http://localhost:8085"
        **************************************************/


        // Authenticate endpoint
        const login_url = baseurl + '/authenticate';

        // Set body to include login data
        const body = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
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

        // Fetch JWT
            fetch(login_url, requestOptions)
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
                //window.location.href = "https://lwu1822.github.io/crimebustersrevival/homepage";
                window.location.href = "{{ site.baseurl }}/homepageLoginSuccess";
            })

    }


        /**********************************************************
         Test if JWT is working on localhost:
         Steps: 
         1. Uncomment the lines below and comment the lines above
         2. Edit /etc/nginx/sites-available/[nginx file]
         * *******************************************************/

        /*
        var baseurl = "https://crimebusters.tk"
        // Authenticate endpoint
        const login_url = baseurl + '/authenticate';

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

        // Fetch JWT
            fetch(login_url, requestOptions)
            .then(response => {
                // trap error response from Web API
                if (!response.ok) {
                    const errorMsg = 'Login error: ' + response.status;
                    console.log(errorMsg);
                    return;
                }
                // Success!!!
                // Redirect to Database location
                window.location.href = "http://localhost:4002/homepage";
            })

        */





/************************************************************
Previous testing code, probably no use anymore
*************************************************************/
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