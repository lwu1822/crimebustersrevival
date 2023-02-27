function enterQuiz() {
  var url = "https://crimebusters.tk/api/quiz/quizTaker";
  // Uncomment next line for localhost testing
 /*
  {
    "email":"test2@test.com"
}
  
*/
  var pName = document.getElementById("pName").value;
  var email = document.getElementById("email").value;
  document.getElementById('errors').innerHTML='';
  if(pName.trim() == '') {
    document.getElementById('errors').innerHTML = 'Please enter your name';
    return;
  }
  
  if(email.trim() == '') {
    document.getElementById('errors').innerHTML = 'Please enter your email';
    return;
  }
  // Set body to include login data
  const body = {
    name: pName,
    email: email
  };

  // Set Headers to support cross origin
  const requestOptions = {
    method: "POST",
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, *same-origin, omit
    body: JSON.stringify(body),
    headers: {
      "content-type": "application/json",
    },
  };

  // fetch the API
  fetch(url, requestOptions)
    // response is a RESTful "promise" on any successful fetch
    .then((response) => {
      // check for response errors and display
      if (response.status !== 200) {
        const errorMsg = "Database response error: " + response.status;
        console.log(errorMsg);
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.innerHTML = errorMsg;
        tr.appendChild(td);
        resultContainer.appendChild(tr);
        return;
      }
      // valid response will contain json data
      console.log(response);
      window.location = "http://localhost:4002/quiz?email="+email;
    
    });
}
