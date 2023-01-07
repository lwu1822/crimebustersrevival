<button onclick="lightboard()">Lightboard</button>

<p>Red:</p>
<p id="red"></p>

<p>Green:</p>
<p id="green"></p>

<p>Blue:</p>
<p id="blue"></p>

<p>On/off:</p>
<p id="onOff"></p>

<div id="light" style="width: 100px; height: 50px">
</div>

<!-- Script is layed out in a sequence (without a function) and will execute when page is loaded -->
<script>
  
  function lightboard() {
    let redInput = prompt("Red?");
    let greenInput = prompt("Green?");
    let blueInput = prompt("Blue?");
    let onOffInput = prompt("On/Off?");

    const urlStart = "https://crimebusterstest.tk/api/lightboard/";
    const url = urlStart + redInput + "/" + greenInput + "/" + blueInput + "/" + onOffInput;

    console.log(url); 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        document.getElementById("red").innerHTML = data.red; 
        document.getElementById("green").innerHTML = data.green; 
        document.getElementById("blue").innerHTML = data.blue; 
        document.getElementById("onOff").innerHTML = data.on; 
        
        if (data.on == true) {
          document.getElementById("light").style.backgroundColor = 'rgb(' + data.red + ',' + data.green + ',' + data.blue + ')';
        }
      })
  }
</script>