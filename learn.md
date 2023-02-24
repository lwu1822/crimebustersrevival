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
<br>
<table class='table borderless' style="width: 55%; margin-left: auto; margin-right: auto">
  <tr>
    <td><div class="text-center">
        <a href="{{ site.baseurl }}/caesarLearn">
            <button>Caesar</button>
        </a>
    </div></td>
    <td>    <div class="text-center">
        <a href="{{ site.baseurl }}/atbashLearn">
            <button>Atbash</button>
        </a>
    </div></td>
    <td><div class="text-center">
        <a href="{{ site.baseurl }}/vigenereLearn">
            <button>Vignere</button>
        </a>
    </div></td>
  </tr>
</table>
<br>
<table class='table borderless' style="width: 55%; margin-left: auto; margin-right: auto">
  <tr>
    <td><div class="text-center">
        <a href="{{ site.baseurl }}/substitutionLearn">
            <button>Substitution</button>
        </a>
    </div></td>
    <td><div class="text-center">
        <a href="{{ site.baseurl }}/affineLearn">
            <button>Affine</button>
        </a>
    </div></td>
  </tr>
</table>
    
</body>
