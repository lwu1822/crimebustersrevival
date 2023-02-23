<html>
  <head>
    <meta charset="UTF-8">
    <title>Quiz</title>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <h1>Quiz</h1>
    <form>
      <ol>
        <li>
          <h2>Question 1: What is the name of the cipher that involves shifting each letter of the alphabet by a certain number of positions?</h2>
          <div>
            <input type="radio" name="q1" value="A">
            <label for="q1A">A. Caesar cipher</label>
          </div>
          <div>
            <input type="radio" name="q1" value="B">
            <label for="q1B">B. Vigenère cipher</label>
          </div>
          <div>
            <input type="radio" name="q1" value="C">
            <label for="q1C">C. Rail fence cipher</label>
          </div>
          <div>
            <input type="radio" name="q1" value="D">
            <label for="q1D">D. Atbash cipher</label>
          </div>
        </li>
        <li>
          <h2>Question 2: What is the name of the cipher that involves replacing each letter with a different letter, number, or symbol according to a specific code?</h2>
          <div>
            <input type="radio" name="q2" value="A">
            <label for="q2A">A. Substitution cipher</label>
          </div>
          <div>
            <input type="radio" name="q2" value="B">
            <label for="q2B">B. Transposition cipher</label>
          </div>
          <div>
            <input type="radio" name="q2" value="C">
            <label for="q2C">C. Playfair cipher</label>
          </div>
          <div>
            <input type="radio" name="q2" value="D">
            <label for="q2D">D. Enigma cipher</label>
          </div>
        </li>
        <!-- Repeat for all questions -->
        <li>
          <h3>Question 3: In the Vigenère cipher, what is the key used to encrypt and decrypt the message?</h3>
          <div>
            <input type="radio" name="q3" value="A">
            <label for="q3A">A. A keyword</label>
          </div>
          <div>
            <input type="radio" name="q3" value="B">
            <label for="q3B">B. A shift</label>
          </div>
          <div>
            <input type="radio" name="q3" value="C">
            <label for="q3C">C. A matrix</label>
          </div>
          <div>
            <input type="radio" name="q3" value="D">
            <label for="q3D">D. A hash function</label>
          </div>
        </li>
      </ol>
      <input type="submit" value="Submit">
    </form>
    <script src="quiz.js"></script>
  </body>
</html>
