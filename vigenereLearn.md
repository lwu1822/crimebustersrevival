<html>
  <head>
    <title>Title of the document</title>
    <style>
      .modal {
        display: none;
        position: fixed;
        z-index: 8;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.4);
      }
      .modal-content {
        margin: 50px auto;
        border: 1px solid #999;
        width: 60%;
      }
      h2,
      p {
        margin: 0 0 20px;
        font-weight: 400;
        color: black;
      }
      span {
        color: #666;
        display: block;
        padding: 0 0 5px;
      }
      form {
        padding: 25px;
        margin: 25px;
        box-shadow: 0 2px 5px #f5f5f5;
        background: #eee;
      }
      input,
      textarea {
        width: 90%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #1c87c9;
        outline: none;
      }
      .contact-form button {
        width: 100%;
        padding: 10px;
        border: none;
        background: #1c87c9;
        font-size: 16px;
        font-weight: 400;
        color: #fff;
      }
      button:hover {
        background: #2371a0;
      }
      .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }
      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
      button.button {
        background: none;
        border-top: none;
        outline: none;
        border-right: none;
        border-left: none;
        border-bottom: #02274a 1px solid;
        padding: 0 0 3px 0;
        font-size: 16px;
        cursor: pointer;
      }
      button.button:hover {
        border-bottom: #a99567 1px solid;
        color: #a99567;
      }
    </style>
  </head>
  <body>
    <p>
      <button class="button" data-modal="modalOne">How to Encrypt Vigenere</button>
    </p>
    <p>
      <button class="button" data-modal="modalTwo">How to Decrypt Vigenere</button>
    </p>
    <p>
      <button class="button" data-modal="modalThree">Vigenere Sample Problem</button>
    </p>
    <div id="modalOne" class="modal">
      <div class="modal-content">
        <div class="contact-form">
          <a class="close">&times;</a>
          <form action="/">
            <h2>How to Encrypt Vigenere</h2>
            <p>
            The Vigenère cipher uses a 26×26 table with A to Z as the row heading and column heading This table is usually referred to as the Vigenère Tableau, Vigenère Table or Vigenère Square. We shall use Vigenère Table. The first row of this table has the 26 English letters. Starting with the second row, each row has the letters shifted to the left one position in a cyclic way. For example, when B is shifted to the first position on the second row, the letter A moves to the end.
            </p>
            <p>
            In addition to the plaintext, the Vigenère cipher also requires a keyword, which is repeated so that the total length is equal to that of the plaintext. For example, suppose the plaintext is MICHIGAN TECHNOLOGICAL UNIVERSITY and the keyword is HOUGHTON. Then, the keyword must be repeated as follows:
            </p>
            <p>
            MICHIGAN TECHNOLOGICAL UNIVERSITY
            </p> 
            <p>
            HOUGHTON HOUGHTONHOUGH TONHOUGNTO
            </p>
            <p>
            We follow the tradition by removing all spaces and punctuation, converting all letters to upper case, and dividing the result into 5-letter blocks. As a result, the above plaintext and keyword become the following:
            </p>
            <p>
            MICHI GANTE CHNOL OGICA LUNIV ERSIT Y
            </p>
            <p>
            HOUGH TONHO UGHTO NHOUG HTONH OUGHT O
            </p>
            <p>
            To encrypt, pick a letter in the plaintext and its corresponding letter in the keyword, use the keyword letter and the plaintext letter as the row index and column index, respectively, and the entry at the row-column intersection is the letter in the ciphertext. For example, the first letter in the plaintext is M and its corresponding keyword letter is H. This means that the row of H and the column of M are used, and the entry T at the intersection is the encrypted result.
            </p>
            <p>
            Repeating this process until all plaintext letters are processed, the ciphertext is TWWNPZOA ASWNUHZBNWWGS NBVCSLYPMM. The following has the plaintext, repeated keyword and ciphertext aligned together.
            </p>
            <p>MICHI GANTE CHNOL OGICA LUNIV ERSIT Y</p>
            <p>HOUGH TONHO UGHTO NHOUG HTONH OUGHT O</p>
            <p>TWWNP ZOAAS WNUHZ BNWWG SNBVC SLYPM M</p>
          </form>
        </div>
      </div>
    </div>
    <div id="modalTwo" class="modal">
      <div class="modal-content">
        <div class="contact-form">
          <span class="close">&times;</span>
          <form action="/">
            <h2>How to Decrypt Vigenere</h2>
            <p>To decrypt, pick a letter in the ciphertext and its corresponding letter in the keyword, use the keyword letter to find the corresponding row, and the letter heading of the column that contains the ciphertext letter is the needed plaintext letter. For example, to decrypt the first letter T in the ciphertext, we find the corresponding letter H in the keyword. Then, the row of H is used to find the corresponding letter T and the column that contains T provides the plaintext letter M (see the above figures). Consider the fifth letter P in the ciphertext. This letter corresponds to the keyword letter H and row H is used to find P. Since P is on column I, the corresponding plaintext letter is I.</p>
          </form>
        </div>
      </div>
    </div>
    <div id="modalThree" class="modal">
      <div class="modal-content">
        <div class="contact-form">
          <span class="close">&times;</span>
          <form action="/">
            <h2>Vigenere Sample Problem</h2>
            <div style='transform: scale(0.65); position: relative; top: -100px;'>
  <h2 style="color: black;">What fraction of a day is 6 hours?</h2><br>
  <p style="color: black;">Choose 1 answer</p><br>
  <hr />
  <div id='block-11' style='padding: 1px;'>
    <label for='option-11' style=' padding: 5px; font-size: 2.5rem; color: black;'>
      <input type='radio' name='option' value='6/24' id='option-11' style='transform: scale(1.6); margin-top: -2px;' />
      6/24</label>
    <span id='result-11'></span>
  </div>
  <hr />

  <div id='block-12' style='padding: 1px;'>
    <label for='option-12' style=' padding: 5px; font-size: 2.5rem; color: black;'>
      <input type='radio' name='option' value='6' id='option-12' style='transform: scale(1.6); margin-top: -2px;' />
      6</label>
    <span id='result-12'></span>
  </div>
  <hr />

  <div id='block-13' style='padding: 1px;'>
    <label for='option-13' style=' padding: 5px; font-size: 2.5rem; color: black;'>
      <input type='radio' name='option' value='1/3' id='option-13' style='transform: scale(1.6);  margin-top: -2px;' />
      1/3</label>
    <span id='result-13'></span>
  </div>
  <hr />

  <div id='block-14' style='padding: 1px;'>
    <label for='option-14' style=' padding: 5px; font-size: 2.5rem; color: black;'>
      <input type='radio' name='option' value='1/6' id='option-14' style='transform: scale(1.6); margin-top: -2px;' />
      1/6</label>
    <span id='result-14'></span>
  </div>
  <hr />
  <button type='button' onclick='displayAnswer1()' style='width: 100px; height: 40px; border-radius: 3px; background-color: lightblue; font-weight: 700;'>Submit</button>
</div>
<a id='showanswer1'></a>
          </form>
        </div>
      </div>
    </div>
    <script>
      let modalBtns = [...document.querySelectorAll(".button")];
      modalBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.getAttribute("data-modal");
          document.getElementById(modal).style.display = "block";
        };
      });
      let closeBtns = [...document.querySelectorAll(".close")];
      closeBtns.forEach(function (btn) {
        btn.onclick = function () {
          let modal = btn.closest(".modal");
          modal.style.display = "none";
        };
      });
      window.onclick = function (event) {
        if (event.target.className === "modal") {
          event.target.style.display = "none";
        }
      };
      //    The function evaluates the answer and displays result
  function displayAnswer1() {
    if (document.getElementById('option-11').checked) {
      document.getElementById('block-11').style.border = '3px solid limegreen'
      document.getElementById('result-11').style.color = 'limegreen'
      document.getElementById('result-11').innerHTML = 'Correct!'
    }
    if (document.getElementById('option-12').checked) {
      document.getElementById('block-12').style.border = '3px solid red'
      document.getElementById('result-12').style.color = 'red'
      document.getElementById('result-12').innerHTML = 'Incorrect!'
      showCorrectAnswer1()
    }
    if (document.getElementById('option-13').checked) {
      document.getElementById('block-13').style.border = '3px solid red'
      document.getElementById('result-13').style.color = 'red'
      document.getElementById('result-13').innerHTML = 'Incorrect!'
      showCorrectAnswer1()
    }
    if (document.getElementById('option-14').checked) {
      document.getElementById('block-14').style.border = '3px solid red'
      document.getElementById('result-14').style.color = 'red'
      document.getElementById('result-14').innerHTML = 'Incorrect!'
      showCorrectAnswer1()
    }
  }
  // the functon displays the link to the correct answer
  function showCorrectAnswer1() {
    let showAnswer1 = document.createElement('p')
    showAnswer1.innerHTML = 'Show Corrent Answer'
    showAnswer1.style.position = 'relative'
    showAnswer1.style.top = '-180px'
    showAnswer1.style.fontSize = '1.75rem'
    document.getElementById('showanswer1').appendChild(showAnswer1)
    showAnswer1.addEventListener('click', () => {
      document.getElementById('block-11').style.border = '3px solid limegreen'
      document.getElementById('result-11').style.color = 'limegreen'
      document.getElementById('result-11').innerHTML = 'Correct!'
      document.getElementById('showanswer1').removeChild(showAnswer1)
    })
  }
    </script>
  </body>
</html>