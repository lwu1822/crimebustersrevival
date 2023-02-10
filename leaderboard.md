<table id="leaderboard">
    <tr>
        <th>Name</th>
        <th>Score</th>
    </tr>
    <tbody id="userInfo"></tbody>

</table>

<script>
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
  fetch("http://localhost:8085/api/person/", options)
  .then(response => {
        let tr = document.createElement("tr"); 
        let name = document.createElement("td"); 
        //let age = document.createElement("td");
        //age.innerHTML = info._age; 
        //let phoneNum = document.createElement("td");
        //phoneNum.innerHTML = info._phoneNum; 
        //let coming = document.createElement("td");
      response.json().then(data => {
        for (let i = 0; i < data.length; i++) {
            //name.innerHTML = data[i]["score"]; 
            //console.log(name);
            //console.log(data[i]["score"]);
            //tr.appendChild(name);
            //document.getElementById("userInfo").appendChild(tr);
            //console.log(data[i]);
        }



        console.log(data);
      })
      });
</script>
