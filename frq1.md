<style> @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Source+Sans+Pro:wght@200;700&display=swap'); </style>
<h1>Calendar</h1>

<button onclick="showYear()">Year</button>
<button onclick="showMdy()">Month, Day, Year</button>
<button onclick="showTwoYears()">Two Years</button>
<button onclick="showTwoMdy()">Two Months, Days, Years</button>



<div id="yearCalendar">
</div>

<div id="yearCalendarHTMLInfo">
</div>

<div id="mdyCalendar">
</div>

<div id="mdyCalendarHTMLInfo">
</div>

<div id="twoYearsCalendar">
</div>

<div id="twoYearsCalendarHTMLInfo">
</div>

<div id="twoMdyCalendar">
</div>

<div id="twoMdyCalendarHTMLInfo">
</div>



<script>
 
  function showYear() {

    // clear the other divs
    document.getElementById("mdyCalendar").innerHTML = "";
    document.getElementById("mdyCalendarHTMLInfo").innerHTML = "";
    document.getElementById("twoYearsCalendar").innerHTML = "";
    document.getElementById("twoYearsCalendarHTMLInfo").innerHTML = "";
    document.getElementById("twoMdyCalendar").innerHTML = "";
    document.getElementById("twoMdyCalendarHTMLInfo").innerHTML = "";

    document.getElementById("yearCalendar").innerHTML = "";
    document.getElementById("yearCalendarHTMLInfo").innerHTML = "";

    // create a para element and paste "Year" onto html
    let title = document.createElement("p");
    title.appendChild(document.createTextNode("Year:"));
    document.getElementById("yearCalendar").appendChild(title);

    // input text box
    let yearText = document.createElement("INPUT");
    yearText.setAttribute("id", "yearTextBoxId");
    yearText.setAttribute("type", "text"); 
    document.getElementById("yearCalendar").appendChild(yearText);

    // button
    let yearFactsButton = document.createElement("BUTTON");
    //yearFactsButton.setAttribute("id", "yearFactsButtonId");
    yearFactsButton.appendChild(document.createTextNode("Get facts")); 
    // API stuff
    yearFactsButton.onclick = function() {
      // clear contents
      document.getElementById("yearCalendarHTMLInfo").innerHTML = "";

      // get the year inputted in the text box
      let yearInput = document.getElementById("yearTextBoxId").value;

      const urlStart = "https://crimebusterstest.tk/api/calendar/";
      let url = urlStart + "isLeapYear/" + yearInput;

      console.log(url); 

      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data);

          let yearInfo = document.createElement("p");
          yearInfo.appendChild(document.createTextNode("Leap Year? "));
          yearInfo.appendChild(document.createTextNode(data.isLeapYear));
          document.getElementById("yearCalendarHTMLInfo").appendChild(yearInfo);
        
        })

          // 2nd API endpoint
          url = urlStart + "firstDayOfYear/" + yearInput;

          console.log(url); 

          fetch(url)
            .then(res => res.json())
            .then(data => {
              console.log(data);
              
              let yearInfo = document.createElement("p");
              yearInfo.appendChild(document.createTextNode("First day of year: "));
              yearInfo.appendChild(document.createTextNode(data.firstDayOfYear));
              document.getElementById("yearCalendarHTMLInfo").appendChild(yearInfo);
            
            })
    };
    // add button to HTML
    document.getElementById("yearCalendar").appendChild(yearFactsButton);


    
  }
  
  function showMdy() {
    let br = document.createElement("br");

    document.getElementById("yearCalendar").innerHTML = "";
    document.getElementById("twoYearsCalendar").innerHTML = "";
    document.getElementById("twoMdyCalendar").innerHTML = "";
    document.getElementById("yearCalendarHTMLInfo").innerHTML = "";
    document.getElementById("mdyCalendarHTMLInfo").innerHTML = "";
    document.getElementById("twoYearsCalendarHTMLInfo").innerHTML = "";
    document.getElementById("twoMdyCalendarHTMLInfo").innerHTML = "";

    document.getElementById("mdyCalendar").innerHTML = "";

    let title = document.createElement("p");
    title.appendChild(document.createTextNode("Month, Day, Year:"));
    document.getElementById("mdyCalendar").appendChild(title);

    let mdyMDYText = document.createElement("input");
    mdyMDYText.setAttribute("id", "mdyMDYBoxId");
    mdyMDYText.setAttribute("type", "date");
    document.getElementById("mdyCalendar").appendChild(mdyMDYText);
/*
    let mdyMText = document.createElement("INPUT");
    mdyMText.setAttribute("id", "mdyMTextBoxId");
    mdyMText.setAttribute("type", "text"); 
    document.getElementById("mdyCalendar").appendChild(mdyMText);

    document.getElementById("mdyCalendar").appendChild(br);

    let mdyDText = document.createElement("INPUT");
    mdyDText.setAttribute("id", "mdyDTextBoxId");
    mdyDText.setAttribute("type", "text"); 
    document.getElementById("mdyCalendar").appendChild(mdyDText);

    document.getElementById("mdyCalendar").appendChild(br.cloneNode());

    let mdyYText = document.createElement("INPUT");
    mdyYText.setAttribute("id", "mdyYTextBoxId");
    mdyYText.setAttribute("type", "text"); 
    document.getElementById("mdyCalendar").appendChild(mdyYText);
*/

    let mdyFactsButton = document.createElement("BUTTON");
    mdyFactsButton.appendChild(document.createTextNode("Get facts")); 
    
    // API stuff
    mdyFactsButton.onclick = function() {
      document.getElementById("mdyCalendarHTMLInfo").innerHTML = "";

      let mdyMDYInput = document.getElementById("mdyMDYBoxId").value;
      console.log(mdyMDYInput);

      let mdyMInput = mdyMDYInput.split(/-/s)[1];
      let mdyDInput = mdyMDYInput.split(/-/s)[2];
      let mdyYInput = mdyMDYInput.split(/-/s)[0];
      /*
      let mdyMInput = document.getElementById("mdyMTextBoxId").value;
      let mdyDInput = document.getElementById("mdyDTextBoxId").value;
      let mdyYInput = document.getElementById("mdyYTextBoxId").value;
      */


      const urlStart = "https://crimebusterstest.tk/api/calendar/";
      let url = urlStart + "dayOfYear/" + mdyMInput + "/" + mdyDInput + "/" + mdyYInput;

      console.log(url); 

      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data);
           
          let mdyInfo = document.createElement("p");
          mdyInfo.appendChild(document.createTextNode("Number of days since Jan. 1st: "));
          mdyInfo.appendChild(document.createTextNode(data.dayOfYear));
          document.getElementById("mdyCalendarHTMLInfo").appendChild(mdyInfo);
        
        })
      

          // 2nd API endpoint

        url = urlStart + "dayOfWeek/" + mdyMInput + "/" + mdyDInput + "/" + mdyYInput;

          console.log(url); 

          fetch(url)
            .then(res => res.json())
            .then(data => {
              console.log(data);
              
              let mdyInfo = document.createElement("p");
              mdyInfo.appendChild(document.createTextNode("Day of the week: "));
              mdyInfo.appendChild(document.createTextNode(data.dayOfWeek));
              document.getElementById("mdyCalendarHTMLInfo").appendChild(mdyInfo);
            
            })
           
    }
    
    // add button to HTML
    document.getElementById("mdyCalendar").appendChild(mdyFactsButton);

  } 

  
  
function showTwoYears() {
    let br = document.createElement("br");

    document.getElementById("yearCalendar").innerHTML = "";
    document.getElementById("mdyCalendar").innerHTML = "";
    document.getElementById("twoMdyCalendar").innerHTML = "";
    document.getElementById("yearCalendarHTMLInfo").innerHTML = "";
    document.getElementById("mdyCalendarHTMLInfo").innerHTML = "";
    document.getElementById("twoYearsCalendarHTMLInfo").innerHTML = "";
    document.getElementById("twoMdyCalendarHTMLInfo").innerHTML = "";

    document.getElementById("twoYearsCalendar").innerHTML = "";

    let title = document.createElement("p");
    title.appendChild(document.createTextNode("Two Years:"));
    document.getElementById("twoYearsCalendar").appendChild(title);

    let twoYearsY1Text = document.createElement("INPUT");
    twoYearsY1Text.setAttribute("id", "twoYearsY1TextBoxId");
    twoYearsY1Text.setAttribute("type", "text"); 
    document.getElementById("twoYearsCalendar").appendChild(twoYearsY1Text);

    document.getElementById("twoYearsCalendar").appendChild(br);

    let twoYearsY2Text = document.createElement("INPUT");
    twoYearsY2Text.setAttribute("id", "twoYearsY2TextBoxId");
    twoYearsY2Text.setAttribute("type", "text"); 
    document.getElementById("twoYearsCalendar").appendChild(twoYearsY2Text);

    document.getElementById("mdyCalendar").appendChild(br.cloneNode());


    let twoYearsFactsButton = document.createElement("BUTTON");
    twoYearsFactsButton.appendChild(document.createTextNode("Get facts")); 
    
    // API stuff
    twoYearsFactsButton.onclick = function() {
      document.getElementById("twoYearsCalendarHTMLInfo").innerHTML = "";

      let twoYearsY1Input = document.getElementById("twoYearsY1TextBoxId").value;
      let twoYearsY2Input = document.getElementById("twoYearsY2TextBoxId").value;

      const urlStart = "https://crimebusterstest.tk/api/calendar/";
      let url = urlStart + "numberOfLeapYears/" + twoYearsY1Input + "/" + twoYearsY2Input;
      console.log(url); 

      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data);
           
          let twoYearsInfo = document.createElement("p");
          twoYearsInfo.appendChild(document.createTextNode("Number of leap years between Year 1 and Year 2: "));
          twoYearsInfo.appendChild(document.createTextNode(data.numberOfLeapYears));
          document.getElementById("twoYearsCalendarHTMLInfo").appendChild(twoYearsInfo);
        
        })
             
    };
    
    // add button to HTML
    document.getElementById("twoYearsCalendar").appendChild(twoYearsFactsButton);

  } 

  
  function showTwoMdy() {
    let br = document.createElement("br");

    document.getElementById("yearCalendar").innerHTML = "";
    document.getElementById("twoYearsCalendar").innerHTML = "";
    document.getElementById("mdyCalendar").innerHTML = "";
    document.getElementById("yearCalendarHTMLInfo").innerHTML = "";
    document.getElementById("mdyCalendarHTMLInfo").innerHTML = "";
    document.getElementById("twoYearsCalendarHTMLInfo").innerHTML = "";
    document.getElementById("twoMdyCalendarHTMLInfo").innerHTML = "";

    document.getElementById("twoMdyCalendar").innerHTML = "";

    let title = document.createElement("p");
    title.appendChild(document.createTextNode("Month 1, Day 1, Year 1, Month 2, Day 2, Year 2"));
    document.getElementById("twoMdyCalendar").appendChild(title);

    let twoMdyMDY1Text = document.createElement("input");
    twoMdyMDY1Text.setAttribute("id", "twoMdyMDY1BoxId");
    twoMdyMDY1Text.setAttribute("type", "date");
    document.getElementById("twoMdyCalendar").appendChild(twoMdyMDY1Text);

    document.getElementById("twoMdyCalendar").appendChild(br.cloneNode());

    let twoMdyMDY2Text = document.createElement("input");
    twoMdyMDY2Text.setAttribute("id", "twoMdyMDY2BoxId");
    twoMdyMDY2Text.setAttribute("type", "date");
    document.getElementById("twoMdyCalendar").appendChild(twoMdyMDY2Text);

    /*
    let twoMdyM1Text = document.createElement("INPUT");
    twoMdyM1Text.setAttribute("id", "twoMdyM1TextBoxId");
    twoMdyM1Text.setAttribute("type", "text"); 
    document.getElementById("twoMdyCalendar").appendChild(twoMdyM1Text);

    document.getElementById("twoMdyCalendar").appendChild(br.cloneNode());

    let twoMdyD1Text = document.createElement("INPUT");
    twoMdyD1Text.setAttribute("id", "twoMdyD1TextBoxId");
    twoMdyD1Text.setAttribute("type", "text"); 
    document.getElementById("twoMdyCalendar").appendChild(twoMdyD1Text);

    document.getElementById("twoMdyCalendar").appendChild(br.cloneNode());

    let twoMdyY1Text = document.createElement("INPUT");
    twoMdyY1Text.setAttribute("id", "twoMdyY1TextBoxId");
    twoMdyY1Text.setAttribute("type", "text"); 
    document.getElementById("twoMdyCalendar").appendChild(twoMdyY1Text);

    document.getElementById("twoMdyCalendar").appendChild(br.cloneNode());
    
    let twoMdyM2Text = document.createElement("INPUT");
    twoMdyM2Text.setAttribute("id", "twoMdyM2TextBoxId");
    twoMdyM2Text.setAttribute("type", "text"); 
    document.getElementById("twoMdyCalendar").appendChild(twoMdyM2Text);

    document.getElementById("twoMdyCalendar").appendChild(br);

    let twoMdyD2Text = document.createElement("INPUT");
    twoMdyD2Text.setAttribute("id", "twoMdyD2TextBoxId");
    twoMdyD2Text.setAttribute("type", "text"); 
    document.getElementById("twoMdyCalendar").appendChild(twoMdyD2Text);

    document.getElementById("twoMdyCalendar").appendChild(br.cloneNode());

    let twoMdyY2Text = document.createElement("INPUT");
    twoMdyY2Text.setAttribute("id", "twoMdyY2TextBoxId");
    twoMdyY2Text.setAttribute("type", "text"); 
    document.getElementById("twoMdyCalendar").appendChild(twoMdyY2Text);
    */

    let twoMdyFactsButton = document.createElement("BUTTON");
    twoMdyFactsButton.appendChild(document.createTextNode("Get facts")); 
    
    // API stuff
    twoMdyFactsButton.onclick = function() {
      document.getElementById("twoMdyCalendarHTMLInfo").innerHTML = "";

      let twoMdyMDY1Input = document.getElementById("twoMdyMDY1BoxId").value;

      let twoMdyM1Input = twoMdyMDY1Input.split(/-/s)[1];
      let twoMdyD1Input = twoMdyMDY1Input.split(/-/s)[2];
      let twoMdyY1Input = twoMdyMDY1Input.split(/-/s)[0];


      let twoMdyMDY2Input = document.getElementById("twoMdyMDY2BoxId").value;

      let twoMdyM2Input = twoMdyMDY2Input.split(/-/s)[1];
      let twoMdyD2Input = twoMdyMDY2Input.split(/-/s)[2];
      let twoMdyY2Input = twoMdyMDY2Input.split(/-/s)[0];

/*
      let twoMdyM1Input = document.getElementById("twoMdyM1TextBoxId").value;
      let twoMdyD1Input = document.getElementById("twoMdyD1TextBoxId").value;
      let twoMdyY1Input = document.getElementById("twoMdyY1TextBoxId").value;
      let twoMdyM2Input = document.getElementById("twoMdyM2TextBoxId").value;
      let twoMdyD2Input = document.getElementById("twoMdyD2TextBoxId").value;
      let twoMdyY2Input = document.getElementById("twoMdyY2TextBoxId").value;
*/ 
    const urlStart = "https://crimebusterstest.tk/api/calendar/";
    let url = urlStart + "dayOfWeek/" + twoMdyM1Input + "/" + twoMdyD1Input+ "/" + twoMdyY1Input+ "/" + twoMdyM2Input+ "/" + twoMdyD2Input+ "/" + twoMdyY2Input;
    console.log(url);

      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data);
           
          let twoMdyInfo = document.createElement("p");
          twoMdyInfo.appendChild(document.createTextNode("Number of days between two dates: "));
          twoMdyInfo.appendChild(document.createTextNode(data.numDaysToDeadline));
          document.getElementById("twoMdyCalendarHTMLInfo").appendChild(twoMdyInfo);
        
        })
             
    };
    
    // add button to HTML
    document.getElementById("twoMdyCalendar").appendChild(twoMdyFactsButton);

  } 

 
     
     
  
</script>
