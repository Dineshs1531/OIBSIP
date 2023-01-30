function convert() {
    var temp = document.getElementById("input");
    var t1=temp.value;
    var result = document.getElementById("output");
    var result1 = document.getElementById("output1");

    var e = document.getElementById("degree");
    var optionSelIndex = e.options[e.selectedIndex].value;
    var optionSelectedText = e.options[e.selectedIndex].text;
  
    if (temp.value !== "") {
      if (optionSelIndex == 0) {
        alert("Please select a unit");
      } else {
        if (optionSelectedText === "Fahrenheit") {
          result.value = ((temp.value - 32) * 5 / 9 )+ "°C";
          result1.value = ((temp.value - 32) * 5 / 9) + 273.15+"°K";
        }

        if (optionSelectedText === "Celcius") {
          result.value = (temp.value * 9/5 )+ 32 + "°F";
          result1.value= ((t1*1)+273.15)+"°K";
        }
      }
    } else {
      alert("Please enter temperature to convert");
    }
  }