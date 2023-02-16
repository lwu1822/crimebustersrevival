
## Sign Up
<br>

<form action="signup()">
    Email: <input type="email" id="email" required>
    <br>
    <br>
    Password: <input type="password" id="password" required>
    <br>
    <br>
    Name: <input type="text" id="name" required>
    <br>
    <br>
    Confirm password: <input type="password" required>
    <br>
    <br>
    <button>Sign up</button>
    <br>
</form>

<br>


<script>
    //function login() {
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
            email: "b@gmail.com",
            password: "b",
            name: "b b",
            dob: "2023-02-15",
            personrole: [{"email": "b@gmail.com", "role": "user"}]
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
;
                
                    return;
                }

                console.log("hi");
                // Success!!!
                // Redirect to Database location
                //window.location.href = "https://lwu1822.github.io/crimebustersrevival/homepage";
                //window.location.href = "{{ site.baseurl }}/homepage";
            })

    //}


      
</script>