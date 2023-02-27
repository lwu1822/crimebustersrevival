<br>

<h1>Update Settings</h1>


Email: <input type="text" id="email">

Name: <input type="text" id="name">

Birthday: <input type="date" id="dob">


<button onclick="update()">Update info</button>

<div id="updateSuccess"></div>

<br>

Password: <input type="text" id="password">
<br>
Confirm password: <input type="text" id="password2">
<button onclick="changePassword()">Change password</button>
<div id="passwordMsg"></div>

<br>
<br>
<button onclick="backToSettings()">Go back to settings</button>

<script>
    
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
 
        response.json().then(data => {
            //if success
            console.log("User id successfully obtained");
            console.log(data); 

            var dob = data.dob;
            //original dob JSON looks like this: 2023-02-12 00:00:00.0, rm 
            //00:00:00.0
            dob = dob.slice(0, -10)

            document.getElementById("email").placeholder = data.email; 
            document.getElementById("name").placeholder = data.name; 
            document.getElementById("dob").placeholder = dob; 
           

        })
    })


    function update() {
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
    
            response.json().then(data => {
                //if success
                console.log("User id successfully obtained");
                console.log(data); 

                var id = data.id; 

                console.log(id);

                var dobOriginal = data.dob;
                //original dob JSON looks like this: 2023-02-12 00:00:00.0, rm 
                //00:00:00.0
                dobOriginal = dobOriginal.slice(0, -10)

                var email = document.getElementById("email").value;
                var name = document.getElementById("name").value;
                var dob = document.getElementById("dob").value;

                console.log(email);
                console.log(name);
                console.log(dob);

                if (email == "") {
                    email = data.email;
                }
                if (name == "") {
                    name = data.name;
                }
                if (dob == "") {
                    dob = dobOriginal;
                }


                var updateUrl = "https://crimebusters.tk/api/person/userupdate";

       
                var updateBody = {
                    id: id,
                    email: email,
                    name: name,
                    dob: dob
                };

       
                var updateOptions = {
                    method: 'POST',
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    //credentials: 'include', // include, *same-origin, omit
                    body: JSON.stringify(updateBody),
                    headers: {
                        "content-type": "application/json"
                    },
                };

       

                fetch(updateUrl, updateOptions)
                .then(response => {
                    // trap error response from Web API
                    if (!response.ok) {
                        const errorMsg = 'Login error: ' + response.status;
                        console.log(errorMsg);

                        document.getElementById("updateSuccess").innerHTML = "";


                        var p = document.createElement("p");
                        var msg = document.createTextNode("Info successfully updated!"); 
                        p.appendChild(msg); 
                        document.getElementById("updateSuccess").appendChild(p); 
                    }

                        document.getElementById("updateSuccess").innerHTML = "";

                        var p = document.createElement("p");
                        var msg = document.createTextNode("Info successfully updated!"); 
                        p.appendChild(msg); 
                        document.getElementById("updateSuccess").appendChild(p); 
                })

            }) 
            
        })
    }
        

    function changePassword() {
        document.getElementById("passwordMsg").innerHTML = ""; 
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
    
            response.json().then(data => {
                //if success
                console.log("User id successfully obtained");
                console.log(data); 

                var id = data.id; 

                console.log(id);

                var password = document.getElementById("password").value;
                var password2 = document.getElementById("password2").value;

                console.log(password);
                console.log(password2);

                if (password == password2) {
                    console.log("Match");
                    changePasswordToBackend(id, password); 
                } else {
                    console.log("No match"); 
                    var p = document.createElement("p");
                    var msg = document.createTextNode("Passwords do not match. Please try again"); 
                    p.appendChild(msg); 
                    document.getElementById("passwordMsg").appendChild(p); 
                }
                

            }) 
            
        })
    }


    function changePasswordToBackend(id, password) {
        var updateUrl = "https://crimebusters.tk/api/person/userupdate";
       
        var updateBody = {
            id: id,
            password: password
        };


        var updateOptions = {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'include', // include, *same-origin, omit
            body: JSON.stringify(updateBody),
            headers: {
                "content-type": "application/json"
            },
        };



        fetch(updateUrl, updateOptions)
        .then(response => {
            // trap error response from Web API
            if (!response.ok) {
                const errorMsg = 'Login error: ' + response.status;
                console.log(errorMsg);

                var p = document.createElement("p");
                var msg = document.createTextNode("Password successfully changed!"); 
                p.appendChild(msg); 
                document.getElementById("passwordMsg").appendChild(p); 
                return;
            }
            
            var p = document.createElement("p");
            var msg = document.createTextNode("Password successfully changed!"); 
            p.appendChild(msg); 
            document.getElementById("passwordMsg").appendChild(p); 
        })
    }

    function backToSettings() {
        window.location.href = "{{ site.baseurl }}/settings";
    }


      
</script>