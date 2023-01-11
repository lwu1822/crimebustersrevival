<style> @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Source+Sans+Pro:wght@200;700&display=swap'); </style>

Current user IDs: 
<div id="currentUser"></div>

<br>
User id: <input type="text" id="userId">
<button onclick="getUserInfo()">Get user info</button>


<p id="userInfoName"></p>
<p id="userInfoEmail"></p>

<p id="userInfoPassword"></p>
<p id="userInfoDob"></p>
<p id="userInfoHeight"></p>
<p id="userInfoWeight"></p>
<p id="userInfoIncome"></p>
<p id="userInfoStats"></p>


<button onclick="createUser()">Create user</button>


<script>
  
  

const url = "https://crimebusterstest.tk/api/person/";
  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        for (let i = 0; i < data.length; i++) {
          let userID = data[i].id;
           let currentUserList = document.createElement("p");

  currentUserList.appendChild(document.createTextNode(userID));
            document.getElementById("currentUser").appendChild(currentUserList);
        }
      })

  function getUserInfo() {
    let idInput = document.getElementById("userId").value;

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
  
         document.getElementById("userInfoWeight").innerHTML = 
        "weight: " + data.weight;
  
          document.getElementById("userInfoIncome").innerHTML = 
        "income: " + data.income;
      
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
