<button onclick="getUserInfo()">User info</button>

<button onclick="createUser()">Create user</button>

<p>User info:</p>
<p id="userInfo"></p>




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
        
        document.getElementById("userInfo").innerHTML = 
        "name: " + data.name + 
        "\nemail: " + data.email +
        "\npassword: " + data.password +
        "\ndob: " + data.dob +
        "\nheight: " + data.height +
        "\nstats: " + data.stats +
        "\nsleep: " + data.sleep +
        "\ncalories: " + data.calories;
      
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