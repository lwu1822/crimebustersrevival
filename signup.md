
## Sign Up
<br>

<form action="javascript:signup()">
    Email: <input type="email" id="email" required>
    <br>
    <br>
    Password: <input type="password" id="password" required>
    <br>
    <br>
    Name: <input type="text" id="name" required>
    <br>
    <br>
    Birthday: <input type="date" id="dob" required>
    <br>
    <br>
    Confirm password: <input type="password" id="password2" required>
    <br>
    <br>
    <button>Sign up</button>
    <br>
</form>

<br>
<br>

<div id="nameMsg"></div>
<div id="passwordMsg"></div>
<div id="successMsg" class="test"></div>

<style>
    p {
        text-align: left !important;
    }
</style>



<script>

    var today = new Date().toISOString().split('T')[0];
    document.getElementById("dob").setAttribute('max', today);

    function signup() {

        document.getElementById("passwordMsg").innerHTML = ""; 

        var password = document.getElementById("password").value;
        var password2 = document.getElementById("password2").value;

        console.log(password);
        console.log(password2);

        if (password == password2) {
            console.log("Match");
            createUser(password); 
        } else {
            console.log("No match"); 

            var p = document.createElement("p");
            var msg = document.createTextNode("Passwords do not match. Please try again"); 
            p.appendChild(msg); 
            document.getElementById("passwordMsg").appendChild(p); 
        }

    }

    function createUser(password) {

        var baseurl = "https://crimebusters.tk"

        /*************************************************
         * THIS IS PROBABLY NOT NEEDED
        // Comment out next line for local testing
        //var  baseurl = "http://localhost:8085"
        **************************************************/


        // Authenticate endpoint
        const login_url = baseurl + '/api/person/post';

        // Set body to include login data
        /*
        const body = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        };
        */
        const body = {
            email: document.getElementById("email").value,
            password: password,
            name: document.getElementById("name").value,
            dob: document.getElementById("dob").value,
            personrole: [{"email": document.getElementById("email").value, "role": "user"}],
        };

       

        // Set Headers to support cross origin
        //IMPORTANT!!!!!!! TO SUCCESSFULLY POST, YOU NEED TO REMOVE
        // credentials:'include'
        const requestOptions = {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'include', // include, *same-origin, omit
            body: JSON.stringify(body),
            headers: {
                "content-type": "application/json"
            },
        };

        // Fetch JWT
        /*
        fetch(login_url, requestOptions);
        */

        // Fetch JWT
            fetch(login_url, requestOptions)
            .then(response => {
                // trap error response from Web API
                if (!response.ok) {
                    const errorMsg = 'Login error: ' + response.status;
                    console.log(errorMsg);

                    if (response.status == 400) {
                        console.log("Name format incorrect");
                        var p = document.createElement("p");
                        var msg = document.createTextNode("Please enter your full name."); 
                        p.appendChild(msg); 
                        document.getElementById("nameMsg").appendChild(p); 
                    }
                
                    return;
                }

                console.log("User successfully created");

                var p = document.createElement("p");
                p.appendChild(document.createTextNode("User successfully created!")); 
                document.getElementById("successMsg").appendChild(p);

                var a = document.createElement('a');
                var loginLink = document.createTextNode("Go back to login");
                a.appendChild(loginLink);
                a.href = "{{ site.baseurl }}/login";
                document.getElementById("successMsg").appendChild(a);

                // Success!!!
                // Redirect to Database location
                //window.location.href = "https://lwu1822.github.io/crimebustersrevival/homepage";
                //window.location.href = "{{ site.baseurl }}/homepage";
            })

    }


      
</script>