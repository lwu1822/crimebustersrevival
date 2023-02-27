<style>
body {
  font-family: sans-serif;
}

h1 {
  text-align: center;
}

h3 {
  text-align: center;
}

form {
  max-width: 500px;
  margin: 0 auto;
}

ol {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 10px;
}

div {
  margin-bottom: 5px;
}

input[type="radio"] {
  margin-right: 10px;
}
 @import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
</style>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Quiz </title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <h1><div>Welcome to our Code Busters Quiz</div></h1>
    <h3>Register to the quiz and test your knowledge!!</h3>
    <br>
    <form>
    <div id="errors" style="color:red">
    </div>
      <div>
         <label>name :</label>
         <input id="pName" type = "input" placeholder="your name">
      </div>
      <p/>
      <div>
         <label>email :</label>
        <input id="email" type = "input" placeholder ="your email">
      </div>
       <p/> <p/>           
      <div><input id="enterQuizBtn" type="button" value="Enter the Quiz!" onclick="enterQuiz()"></div>
    </form>
    <script src="quizEntry.js"></script>
  </body>
</html>
