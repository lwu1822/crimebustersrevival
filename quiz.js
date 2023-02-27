var quizNumber = 1;
var questionNumber = 0;
var error = false;


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const email = urlParams.get('email');

window.onload = getQuestion(quizNumber, questionNumber);
function getQuestion(quizNum, questionNum) {
  
  var url = "http://localhost:8085/api/quiz/1/";
  // Uncomment next line for localhost testing
  // url = "http://localhost:8085/api/person/";
  // set options for cross origin header request
  const options1 = {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "include", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
  };
  // fetch the API
  fetch(url, options1)
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
      response.json().then((data) => {
        console.log(data);
        document.getElementById("quizNum").innerHTML = quizNumber;
        document.getElementById("question").innerHTML =
          "Question " +
          data[questionNumber].questionNumber +
          "/10" +
          ": " +
          data[questionNumber].question;

          //quizOptions
          var quizOptions = data[questionNumber].quizOptions;
          console.log("quizOptions = " + quizOptions);

          var container = document.getElementById("options");
          container.innerHTML="";
          for (var i = 0; i < quizOptions.length; i++) {
              
          var labelString = quizOptions[i];
          
          var div = document.createElement("div");
          var radio = document.createElement("input");
          radio.type = "radio";
          radio.name = "q"; // set the name attribute to group the radio buttons together
          radio.value = labelString.substring(0,1); 
          // Create a label element for the radio button
          var label = document.createElement("label");
          label.appendChild(document.createTextNode(labelString)); // set the label text

          // Add the radio button and label elements to the container element
          container.appendChild(div);
          container.appendChild(radio);
          container.appendChild(label);

          }
          

      });
    });
}

function nextQuestion() {
  //Save the answer to the database
  submitAnswer(quizNumber, questionNumber);
  
  if(error){
      return;
  }
  questionNumber = questionNumber + 1;
     
  if(questionNumber == 10){
    document.getElementById('nextBtn').value ='Results';
     window.location = "http://localhost:4002/quizResults";
  } else {
    getQuestion(quizNumber, questionNumber);
  }
  
}

function submitAnswer(quizNum, questionNum) {
  error = false;
   var url = "http://localhost:8085/api/quiz/submit";
  // Uncomment next line for localhost testing
  // url = "http://localhost:8085/api/person/";
  /*
  {
    "quizNumber":"1",
    "questionNumber":"1",
    "answer":"A",
    "email":"test2@test.com"
}
  
*/
  console.log("QuizNumber" + quizNum);
  console.log("QuestionNum" + (questionNum + 1));
 
  var options = document.getElementsByName("q");
  var answer ="";
  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      answer = options[i].value;
      //return;
    }
  }
  document.getElementById('errors').innerHTML = '';
  if(answer.trim() == '') {
    error = true;
    document.getElementById('errors').innerHTML = 'Please select answer';
    return;
  }
  // Set body to include login data
  const body = {
    quizNumber: quizNum,
    questionNumber: questionNum + 1,
    answer: answer,
    email: email,
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
      response.json().then((data) => {
        console.log(data);
      });
    });
}
