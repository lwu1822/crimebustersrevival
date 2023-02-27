<style>
body {
  font-family: sans-serif;
}

h1 {
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
    <h1>Quiz #<div id="quizNum"></div></h1>
    <br>
    <div id="errors" style="color:red"></div>
    <form>
      <ol>
        <li>
          <h3><div id="question"></div></h3>
            <div id="options"> </div>
        </li>
      </ol>
      <input id="nextBtn" type="button" value="next" onclick="nextQuestion()">
    </form>
    <script src="quiz.js"></script>
  </body>
</html>
