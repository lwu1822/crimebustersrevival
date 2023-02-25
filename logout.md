User successfully logged out!


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

                var id = data.id; 

                console.log(id);

                var updateUrl = "https://crimebusters.tk/api/person/userupdate";

       
                var updateBody = {
                    id: id,
                    loginStatus: "out"
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
                    
                        return;
                    }
                })

            }) 
            
        })

</script>