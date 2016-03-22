// create main div and append to DOM
var div_element = document.createElement("div");
document.body.appendChild(div_element);

// create new h2 element and append to main div
var h2_element = document.createElement("h2");
h2_element.innerText = "Press My Buttons";
div_element.appendChild(h2_element);

// create new calculator div and append to main div
var cal_div_elem = document.createElement("div");
cal_div_elem.id = "calculator";
div_element.appendChild(cal_div_elem);

// create array that stores calculator button display text
var arr = [1,2,3,"+",4,5,6,"-",7,8,9,"="];

// create labeled calculator button divs and append to calculator div
for (var i=0; i<arr.length; i++) {
  var num_elem = document.createElement("div");
  num_elem.innerText = arr[i];
  num_elem.addEventListener("click", getText);
  cal_div_elem.appendChild(num_elem);
}

// create new solution bar div and append to main div
var sol_element = document.createElement("div");
sol_element.id ="solution_bar";
div_element.appendChild(sol_element);

// create new clear button and append to main div
var clear_element = document.createElement("span");
clear_element.id = "clear_button";
clear_element.innerText = "Clear";
clear_element.addEventListener("click", clear);
div_element.appendChild(clear_element);


// get innerText of numeric button pressed and send to display or calculate
function getText(event) {
	var text = event.target.innerText;
	if (text !== "+" && text !== "-" && text !== "=") {
		displayNum(text);
	} else calculate(text);
}

// display digit in solution bar when number button pressed
function displayNum(text) {
	sol_element.innerText += text;
}

function count(text) {
	var counter = 0;
	var entry = parseFloat((sol_element).innerText);
	function countInner(text) {
		if (text === "+") {
			return counter += entry;
		} else if (text === "-") {
			return counter -= entry;
		} else if (text === "=") {
			return counter;
		}
    }
	return countInner();
}

function calculate(text) {
	sol_element.innerText = count();
}

function clear(count) {
	sol_element.innerText = "";
	count = 0;
}