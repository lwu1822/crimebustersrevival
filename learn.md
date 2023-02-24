<style>
  @import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');
  
  .borderless tbody tr td, .borderless tbody tr th, .borderless thead tr th {
    border: none;
    }
</style>
<html>
<head>
    <title>Learn</title>
</head>
<body>
<h1>Learn Manual Codebusting</h1>

<p>Choose a cipher to learn:</p>
    <title>Button</title>
<body>
<table class='table borderless' style="width: 75%; border: hidden; align: center">
  <tr>
    <td><div class="text-center">
        <a href="{{ site.baseurl }}/caesarLearn">
            <button>Caesar</button>
        </a>
    <br>
    <br>
    </div></td>
    <td>    <div class="text-center">
        <a href="{{ site.baseurl }}/atbashLearn">
            <button>Atbash</button>
        </a>
    <br>
    <br>
    </div></td>
  </tr>
  <tr>
    <td><div class="text-center">
        <a href="{{ site.baseurl }}/vigenereLearn">
            <button>Vignere</button>
        </a>
        <br>
    <br>
    </div></td>
    <td><div class="text-center">
        <a href="{{ site.baseurl }}/affineLearn">
            <button>Affine</button>
        </a>
        <br>
    <br>
    </div></td>
  </tr>
</table>
    <div class="text-center">
        <a href="{{ site.baseurl }}/substitutionLearn">
            <button>Substitution</button>
        </a>
    </div>
</body>
