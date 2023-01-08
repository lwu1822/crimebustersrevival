<button onclick="year()">Year</button>


<p>Leap Year?:</p>
<p id="leapYear"></p>

<p>First day of year:</p>
<p id="firstDayOfYear"></p>

<button onclick="monthDayYear()">Month, day, year</button>

<p>Number of days since 1/1:</p>
<p id="dayOfYear"></p>

<p>Day of the week:</p>
<p id="dayOfWeek"></p>

<button onclick="year1And2()">Number of leap years</button>

<p>Number of leap years</p>
<p id="numLeapYear"></p>

<button onclick="monthDayYear1And2()">Month, day, year 1 and 2</button>
<p>Number of days between</p>
<p id="numDayBtw"></p>

<script>
  
  function year() {
    let yearInput = prompt("Year?");

    const urlStart = "https://crimebusterstest.tk/api/calendar/";
    let url = urlStart + "isLeapYear/" + yearInput;

    console.log(url); 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        document.getElementById("leapYear").innerHTML = data.isLeapYear; 
      
      })
      
    url = urlStart + "firstDayOfYear/" + yearInput;

    console.log(url); 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        document.getElementById("firstDayOfYear").innerHTML = data.firstDayOfYear; 
      
      })
  }

  function monthDayYear() {
    let monthInput = prompt("Month?");
    let dayInput = prompt("Day?");
    let yearInput = prompt("Year?");

    const urlStart = "https://crimebusterstest.tk/api/calendar/";
    let url = urlStart + "dayOfYear/" + monthInput + "/" + dayInput + "/" + yearInput;

    console.log(url); 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        document.getElementById("dayOfYear").innerHTML = data.dayOfYear; 
      
      })
     
     
    url = urlStart + "dayOfWeek/" + monthInput + "/" + dayInput + "/" + yearInput;

    console.log(url); 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        document.getElementById("dayOfWeek").innerHTML = data.dayOfWeek; 
      
      })
  }
 
  
  function year1And2() {
    let year1Input = prompt("Year 1?");
    let year2Input = prompt("Year 2?");

    const urlStart = "https://crimebusterstest.tk/api/calendar/";
    let url = urlStart + "numberOfLeapYears/" + year1Input + "/" + year2Input;
    console.log(url); 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        document.getElementById("numLeapYear").innerHTML = data.numberOfLeapYears; 
      
      })
     
     
  }
 
function monthDayYear1And2() {
    let month1Input = prompt("Month 1?");
    let day1Input = prompt("Day 1?");
    let year1Input = prompt("Year 1?");
    let month2Input = prompt("Month 2?");
    let day2Input = prompt("Day 2?");
    let year2Input = prompt("Year 2?");

    const urlStart = "https://crimebusterstest.tk/api/calendar/";
    let url = urlStart + "dayOfWeek/" + month1Input + "/" + day1Input+ "/" + year1Input+ "/" + month2Input+ "/" + day2Input+ "/" + year2Input;
    console.log(url); 

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        document.getElementById("numDayBtw").innerHTML = data.numDaysToDeadline; 
      
      })
     
     
  }
</script>
