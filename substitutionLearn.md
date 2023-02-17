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
      p {
        color: black;
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
        color: #9E79AB;
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
      <button style="color: ghostwhite" class="button" data-modal="modalOne">How to Encrypt Substitution</button>
    </p>
    <p>
      <button style="color: ghostwhite" class="button" data-modal="modalTwo">How to Decrypt Substitution</button>
    </p>
    <p>
      <button style="color: ghostwhite" class="button" data-modal="modalThree">Substitution Sample Problem</button>
    </p>
    <div id="modalOne" class="modal">
      <div class="modal-content">
        <div style="color: black" class="contact-form">
          <a class="close">&times;</a>
          <form action="/">
            <h2>How to Encrypt Substitution</h2>
            <p style="color: black">
            For a substitution to be correct, it is necessary for the same element to be substituted by only one other (valid in both cases, for encryption and decryption) so that there is never more than one possibility of encryption or decryption.</p>

<p style="color: black">Example: The Caesar cipher is an alphabetical substitution which replaces each letter by the following in the alphabet: ABC becomes 'BCD'.</p>
          </form>
        </div>
      </div>
    </div>
    <div id="modalTwo" class="modal">
      <div class="modal-content">
        <div style="color: black" class="contact-form">
          <span class="close">&times;</span>
          <form action="/">
            <h2>How to Decrypt Substitution</h2>
            <p style="color: black">
            The condition for a successful substitution decryption is to know the correspondence table used.</p>
          </form>
        </div>
      </div>
    </div>
    <div id="modalThree" class="modal">
      <div class="modal-content">
        <div style="color: black" class="contact-form">
          <span class="close">&times;</span>
          <form action="/">
            <h2>Substitution Sample Problem</h2>
            <div style='transform: scale(0.65); position: relative; top: -100px;'>
  <h2 style="color: black;">Encrypt the sample text DATA ENCRYPTION using a key of 4!</h2><br>
  <p style="color: black;">Choose the best answer:</p><br>
  <hr />
  <div id='block-11' style='padding: 1px;'>
    <label for='option-11' style=' padding: 5px; font-size: 1.5rem; color: black;'>
      <input type='radio' name='option' value='DNHANG PRAK' id='option-11' style='transform: scale(1.6); margin-top: -2px;' />
      HEXE IRGVCTXMSR</label>
    <span id='result-11'></span>
  </div>
  <hr />

  <div id='block-12' style='padding: 1px;'>
    <label for='option-12' style=' padding: 5px; font-size: 1.5rem; color: black;'>
      <input type='radio' name='option' value='DEHANG ERAK' id='option-12' style='transform: scale(1.6); margin-top: -2px;' />
      WEXE IRGWCTXMSR</label>
    <span id='result-12'></span>
  </div>
  <hr />

  <div id='block-13' style='padding: 1px;'>
    <label for='option-13' style=' padding: 5px; font-size: 1.5rem; color: black;'>
      <input type='radio' name='option' value='DNHAG PRA' id='option-13' style='transform: scale(1.6);  margin-top: -2px;' />
      HEQE IRGQCTXMSQ</label>
    <span id='result-13'></span>
  </div>
  <hr />

  <div id='block-14' style='padding: 1px;'>
    <label for='option-14' style=' padding: 5px; font-size: 1.5rem; color: black;'>
      <input type='radio' name='option' value='WNHANG PWAK' id='option-14' style='transform: scale(1.6); margin-top: -2px;' />
      HCXE IRCVCTXMSR</label>
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
    <br>
    <center>
    <a href="{{ site.baseurl }}/substitution">
            <button style="padding: 2%; font-size: small" class="btn btn-primary btn-lg">Decrypt something with Substitution Cipher!</button>
        </a>
    </center>
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
      incrementCount()
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
    showAnswer1.innerHTML = 'Show Correct Answer'
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