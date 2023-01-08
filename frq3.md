<button onclick="calculator()">Calculator</button>

<p>Answer:</p>
<p id="answer"></p>




<script>
  
  function calculator() {
    let expression = prompt("Equation?");

    const urlStart = "https://crimebusterstest.tk/api/calculator/";
    const url = urlStart + expression;

    console.log(url); 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        document.getElementById("answer").innerHTML = data.result; 
      
      })
      
  }
</script>

<style> 
button {
	width: 100px;
	height: 35px;
	font-size: 16px;
	background-color: #333;
	color: #fff;
	border: none;
	cursor: pointer;
}

p {
  font-size: 18px;
}
</style>