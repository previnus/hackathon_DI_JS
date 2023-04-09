/* Calculator Function */

function getHistory(){
	return document.getElementById("history-value").innerText.replace("÷","/").replace("×","*");
}
function printHistory(num){
	document.getElementById("history-value").innerText = num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result= eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}

/* Background Changer */

//function to define a random color
const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  //function to call the background div and set the color
  const setRandomBackground = () => {
    var div = document.querySelector("body");
    var color = getRandomColor();
    div.style.transition = "background-color 2s ease-in-out";
    div.style.backgroundColor = color;
  }
  
  //initialize background color change function
  setInterval(setRandomBackground, 3000);

  /* Metals Api */

  /* METAL PRICE */

const getMetalPromise = () => {
    const url = 'https://api.metals.live/v1/spot';
    const corsUrl = 'https://corsproxy.io'; // have to make use of a proxy because of cors issues

      return fetch(url)
      //fetch(corsUrl + '/?' + url)
      .then(response => response.json())
      .then(data => {
        // Return the data
        return data;
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });

  }

let gold, silver, platinum, palladium, timestamp

const getMetal = getMetalPromise().then(data => {
  // Do something with the data
  //console.log(data);
  for(i = 0; i < data.length; i++){
    //console.log(data[i])
    for(metal in data[i]){
        console.log(`${metal} is ${data[i][metal]}`)
        if(metal === 'gold'){
            let tablegold = document.querySelector('#gold')
            let existinggoldTd = tablegold.querySelector('td:last-child')
            let goldtd = document.createElement('td')
            goldtd.textContent = data[i][metal]
            tablegold.insertBefore(goldtd, existinggoldTd.nextSibling);
            
        }else if(metal === 'silver'){
            let tablesilver = document.querySelector('#silver')
            let existingsilverTd = tablesilver.querySelector('td:last-child')
            let silvertd = document.createElement('td')
            silvertd.textContent = data[i][metal]
            tablesilver.insertBefore(silvertd, existingsilverTd.nextSibling);

        }else if(metal === 'platinum'){
            let tableplatinum = document.querySelector('#platinum')
            let existingplatinumTd = tableplatinum.querySelector('td:last-child')
            let platinumtd = document.createElement('td')
            platinumtd.textContent = data[i][metal]
            tableplatinum.insertBefore(platinumtd, existingplatinumTd.nextSibling);

        }else if(metal === 'palladium'){
            let tablepalladium = document.querySelector('#palladium')
            let existingpalladiumTd = tablepalladium.querySelector('td:last-child')
            let palladiumtd = document.createElement('td')
            palladiumtd.textContent = data[i][metal]
            tablepalladium.insertBefore(palladiumtd, existingpalladiumTd.nextSibling);

        }else{
            timestamp = data[i][metal]
        }
    }
  }

})
.catch(error => {
  // Handle any errors
  console.error(error);
});

//console.log(gold, silver, platinum, palladium, timestamp)


//calculate time difference

const timeCompare  = (timestamp) => {
  const date = new Date(timestamp)
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const threeHoursInMs = 10800000 // check if time difference is more than 3hrs

  if (diff > threeHoursInMs) {
    return true
  }

  return false
}