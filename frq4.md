<style> @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Source+Sans+Pro:wght@200;700&display=swap'); </style>

# Create a light

<p>Red:</p>
<input type="text" id="red">

<p>Green:</p>
<input type="text" id="green">

<p>Blue:</p>
<input type="text" id="blue">

<button onclick="lightboard()">Generate</button>

<div id="light" style="width: 100px; height: 50px">
</div>

# Generate random lights


Rows: <input type="text" id="row">
<br>
Columns: <input type="text" id="column">
<button onclick="randomLightboard()">Generate</button>
<div class = "test" id="randomLight">
</div>


<style>
 .test {
  margin: 1rem;
  padding: 0rem 0rem;
  text-align: center;
}

</style>

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

   function randomLightboard() {
    document.getElementById("randomLight").innerHTML = ""; 

    let rowInput = document.getElementById("row").value;
    let columnInput = document.getElementById("column").value;

    const urlStart = "https://crimebusterstest.tk/api/lightboard/generate/";
    const url = urlStart + rowInput + "/" + columnInput;

    fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let redInput;
      let blueInput;
      let greenInput;

      let br = document.createElement("br");
      for (let i = 0; i < rowInput * columnInput; i++) {
        redInput = data[i].light.red;
        greenInput = data[i].light.green; 
        blueInput = data[i].light.blue;
        
        var div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "50px"; 
        div.style.backgroundColor = 'rgb(' + redInput + ',' + greenInput + ',' + blueInput + ')';
        div.style.display = "inline-block";
        div.style.padding = "0rem 0rem";
        document.getElementById("randomLight").appendChild(div); 

        if ((i+1)%rowInput == 0) {
          document.getElementById("randomLight").appendChild(br.cloneNode());
        }
      }
    
        //document.getElementById("randomLight").style.backgroundColor = 'rgb(' + data.red + ',' + data.green + ',' + data.blue + ')';
      
      
    }) 

   }
</script>

<output redInput, greenInput, blueInput></output>
