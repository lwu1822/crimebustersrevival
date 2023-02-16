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
      <button style="color: ghostwhite" class="button" data-modal="modalOne">How to Encrypt Affine</button>
    </p>
    <p>
      <button style="color: ghostwhite" class="button" data-modal="modalTwo">How to Decrypt Affine</button>
    </p>
    <p>
      <button style="color: ghostwhite" class="button" data-modal="modalThree">Affine Sample Problem</button>
    </p>
    <div id="modalOne" class="modal">
      <div class="modal-content">
        <div style="color: black" class="contact-form">
          <a class="close">&times;</a>
          <form action="/">
            <h2>How to Encrypt Affine</h2>
            <p style="color: black">
            Encryption uses a classic alphabet, and two integers, called coefficients or keys A and B, these are the parameters of the affine function Ax+B (which is a straight line/linear equation).</p>

<p style="color: black">Example: Encrypt DCODE with the keys A=5, B=3 and the English/latin alphabet ABCDEFGHIJKLMNOPQRSTUVWXYZ.</p>

<p style="color: black">For each letter of the alphabet is associated to the value of its position in the alphabet (starting at 0).</p>

<p style="color: black">Example: By default, A=0, B=1, …, Z=25, it is possible (but not recommended) to use A=1, …, Y=25, Z=0 using the alphabet ZABCDEFGHIJKLMNOPQRSTUVWXY.</p>

<p style="color: black">For each letter of value x of the plain text, is associated a value y, result of the affine function y = A * x + B mod 26 (with 26 the alphabet size). Each computed value y corresponds to a letter with the same position in the alphabet, it is the ciphered letter. The Affine ciphertext is the replacement of all the letters by the new ones.
            </p>
          </form>
        </div>
      </div>
    </div>
    <div id="modalTwo" class="modal">
      <div class="modal-content">
        <div style="color: black" class="contact-form">
          <span class="close">&times;</span>
          <form action="/">
            <h2>How to Decrypt Affine</h2>
            <p style="color: black">
            Affine decryption requires to know the two keys A and B (the one from encryption) and the used alphabet.</p>

<p style="color: black">Example: Decrypt the ciphered message SNVSX with keys A=5 and B=3</p>

<p style="color: black">For each letter of the alphabet, associate the value of its position in the alphabet.</p>

<p style="color: black">Example: The alphabet ABCDEFGHIJKLMNOPQRSTUVWXYZ, starting at 0 gives A=0, B=1, …, Z=25.</p>

<p style="color: black">Each letter of value y of the message corresponds to a value x, result of the inverse function x = A′ × (y − B) mod 26 (with 26 the alphabet size)</p>

<p style="color: black">The value A′ is an integer such as A × A′ = 1 mod 26 (with 26 the alphabet size). To find A′, calculate its modular inverse.</p>

<p style="color: black">Example: A coefficient A′ for A =5 with an alphabet size of 26 is 21 because 5 * 21 = 105 ≡ 1 mod 26.
For S (y = 18), x = A′ × (18 − B) = 21 × (18 − 3) ≡ 315 mod 26 = 3 For each value x, associate the letter with the same position in the alphabet: the coded letter. The plain text is the replacement of all characters with calculated new letters.</p>

<p style="color: black">Example: For S (x = 3) associate the letter at position 3: D, etc. The original plain text is DCODE.
 </p>
          </form>
        </div>
      </div>
    </div>
    <div id="modalThree" class="modal">
      <div class="modal-content">
        <div style="color: black" class="contact-form">
          <span class="close">&times;</span>
          <form action="/">
            <h2>Affine Sample Problem</h2>
            <div style='transform: scale(0.65); position: relative; top: -100px;'>
  <h2 style="color: black;">Encrypt the sample text SECRET WORD using A coefficient 3 and B coefficient 1!</h2><br>
  <p style="color: black;">Choose the best answer:</p><br>
  <hr />
  <div id='block-11' style='padding: 1px;'>
    <label for='option-11' style=' padding: 5px; font-size: 1.5rem; color: black;'>
      <input type='radio' name='option' value='DNHANG PRAK' id='option-11' style='transform: scale(1.6); margin-top: -2px;' />
      DNHANG PRAK</label>
    <span id='result-11'></span>
  </div>
  <hr />

  <div id='block-12' style='padding: 1px;'>
    <label for='option-12' style=' padding: 5px; font-size: 1.5rem; color: black;'>
      <input type='radio' name='option' value='DEHANG ERAK' id='option-12' style='transform: scale(1.6); margin-top: -2px;' />
      DEHANG ERAK</label>
    <span id='result-12'></span>
  </div>
  <hr />

  <div id='block-13' style='padding: 1px;'>
    <label for='option-13' style=' padding: 5px; font-size: 1.5rem; color: black;'>
      <input type='radio' name='option' value='DNHAG PRA' id='option-13' style='transform: scale(1.6);  margin-top: -2px;' />
      DNHAG PRA</label>
    <span id='result-13'></span>
  </div>
  <hr />

  <div id='block-14' style='padding: 1px;'>
    <label for='option-14' style=' padding: 5px; font-size: 1.5rem; color: black;'>
      <input type='radio' name='option' value='WNHANG PWAK' id='option-14' style='transform: scale(1.6); margin-top: -2px;' />
      WNHANG PWAK</label>
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
    <a href="{{ site.baseurl }}/affine">
            <button style="padding: 2%; font-size: small" class="btn btn-primary btn-lg">Decrypt something with Affine Cipher!</button>
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