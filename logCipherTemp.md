<input type="text" id="cipher">

<button onclick="logCipher()">Log cipher</button>


<script>
    function logCipher() {
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

            //get id and email from cookie
            var id = data.id;
            var email = data.email; 

            console.log("id: " + id);


            var baseurl = "https://crimebusters.tk"
       
            // Authenticate endpoint
            const login_url = baseurl + '/api/person/log';

            const body = {
                email: email,
                log: document.getElementById("cipher").value,
                userId: id
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

        
                fetch(login_url, requestOptions)
                .then(response => {
                    // trap error response from Web API
                    if (!response.ok) {
                        const errorMsg = 'Login error: ' + response.status;
                        console.log(errorMsg);
                    
                        return;
                    }

                    console.log("Log success");

                })

         
        })
    })







        

    }
</script>