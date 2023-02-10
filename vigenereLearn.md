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
        color: #999;
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
    </script>
  </body>
</html>