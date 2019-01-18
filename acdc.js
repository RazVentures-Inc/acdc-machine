var current = [{name: "AC", price: 50}, 
			   {name: "DC", price: 75}];
var volts = [{name: "110v", price: 25}, 
			 {name: "220v", price: 35}];

var i = 0; //------------------------------------//
var j = 1; //	Button wiring variables			 //	
var k = 0; //	Handle with care				 //	
var l = 1; //------------------------------------//					

//***Money Section

var totalCharge = document.querySelector("#money");

function moneyTotal() {
	var m = current[i].price + current[j].price + volts[k].price + volts[l].price;
	totalCharge.textContent = m;
}

//***BUTTON WIRING SECTION

//**Button Selectors
var currentInButton = document.querySelector("#currentInButton");
var voltsInButton = document.querySelector("#voltsInButton");
var voltsOutButton = document.querySelector("#voltsOutButton");
var currentOutButton = document.querySelector("#currentOutButton");
var buyButton = document.querySelector("#buy");

//***Text Modifiers
var currentIn = document.querySelector("#currentIn");
var voltsIn = document.querySelector("#voltsIn");
var voltsOut = document.querySelector("#voltsOut");
var currentOut = document.querySelector("#currentOut");

//***Mouse Click Events
currentInButton.addEventListener("click", changeCurrentIn);
currentOutButton.addEventListener("click", changeCurrentOut);
voltsInButton.addEventListener("click", changeVoltsIn);
voltsOutButton.addEventListener("click", changeVoltsOut);
buyButton.addEventListener("click", buyNow);

//***Mouse Click Functions

function buyNow(){
	alert("Your Cost Is: $" + totalCharge.textContent);
}

function changeCurrentIn(){
	i++;
	 
		if (i === current.length) {
			i = 0
			currentIn.textContent = current[i].name;
		} else {
			currentIn.textContent = current[i].name;
	}
	moneyTotal();
}	

function changeCurrentOut(){
	j++;
	
		if (j === current.length) {
			j = 0;
			currentOut.textContent = current[j].name;
		} else {
			currentOut.textContent = current[j].name;
	}
	moneyTotal();
}

function changeVoltsIn(){
	k++;
	
		if (k === volts.length) {
			k = 0;
			voltsIn.textContent = volts[k].name;
		} else {
			voltsIn.textContent = volts[k].name;
	}
	moneyTotal();
}	

function changeVoltsOut(){
	l++;
	
		if (l === volts.length) {
			l = 0;
			voltsOut.textContent = volts[l].name;
		} else {
			voltsOut.textContent = volts[l].name;
	}
	moneyTotal();
}	
//***Button Wiring Complete

//***ADD Items Functions

function addCurrent(name, price){
	current.push({name: name, price: price});
}

function addVoltage(name, price){
	volts.push({name: name, price: price});
}