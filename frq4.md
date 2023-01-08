<p>Red:</p>
<input type="text" id="red">

<p>Green:</p>
<input type="text" id="green">

<p>Blue:</p>
<input type="text" id="blue">

<button onclick="lightboard()">Generate</button>


<div id="light" style="width: 100px; height: 50px">
</div>

<p>{{ site.baseurl }}</p>

<script>


  function lightboard() {
    let redInput = document.getElementById("red").value;
    let greenInput = document.getElementById("green").value;
    let blueInput = document.getElementById("blue").value;
    

    const urlStart = "https://crimebusterstest.tk/api/lightboard/";
    const url = urlStart + redInput + "/" + greenInput + "/" + blueInput + "/" + "true";

    console.log(url); 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
       
          document.getElementById("light").style.backgroundColor = 'rgb(' + data.red + ',' + data.green + ',' + data.blue + ')';
        
      })
  }
</script>