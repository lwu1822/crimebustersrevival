<style> @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Source+Sans+Pro:wght@200;700&display=swap'); </style>
<button onclick="getUserInfo()">User info</button>

<button onclick="createUser()">Create user</button>

<p>User info:</p>
<p id="userInfoName"></p>
<p id="userInfoEmail"></p>

<p id="userInfoPassword"></p>
<p id="userInfoDob"></p>
<p id="userInfoHeight"></p>
<p id="userInfoStats"></p>




<script>
  
  function getUserInfo() {
    let idInput = prompt("ID?");

    const urlStart = "https://crimebusterstest.tk/api/person/";
    const url = urlStart + idInput;

    console.log(url); 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        document.getElementById("userInfoName").innerHTML = 
        "name: " + data.name;

        document.getElementById("userInfoEmail").innerHTML = 
        "email: " + data.email;

        document.getElementById("userInfoPassword").innerHTML = 
        "password: " + data.password;

        document.getElementById("userInfoDob").innerHTML = 
        "dob: " + data.dob;      
          
        document.getElementById("userInfoHeight").innerHTML = 
        "height: " + data.height;
      
      })
  }


  function createUser() {
    let createUserInput = prompt("Create user info?");

    const urlStart = "https://crimebusterstest.tk/api/person/post";
    const url = urlStart;

    console.log(url); 

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
            email: 'test@gmail.com'
        })
    })
      .then(res => {
        return res.json()
    })
      .then(data => {
        console.log(data);
      
      })
  }
  
</script>
