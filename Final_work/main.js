/* Calculator Function */

// change all characters into math operators
const getHistory = () => {
	return document.getElementById("history-value").innerText.replace("÷","/").replace("×","*");
}

// print on the history display
const printHistory = (num) => {
	document.getElementById("history-value").innerText = num;
}

const getOutput = () => {
	return document.getElementById("output-value").innerText;
}

// print on the main display
const printOutput = (num) => {
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}

//get number format using english format
const getFormattedNumber = (num) => {
	if(num=="-"){
		return "";
	}
	let n = Number(num);
	let value = n.toLocaleString("en");
	return value;
}


const reverseNumberFormat = (num) => {
	return Number(num.replace(/,/g,''));
}

// Main code for calculation
let operator = document.getElementsByClassName("operator");
for(let i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			let output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			let output=getOutput();
			let history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					let result= eval(history);
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

let number = document.getElementsByClassName("number");
for(let i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		let output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}

/* Background Changer */

//function to define a random color
const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  //function to call the background div and set the color
  const setRandomBackground = () => {
    let div = document.querySelector("body");
    let color = getRandomColor();
    div.style.transition = "background-color 2s ease-in-out";
    div.style.backgroundColor = color;
  }
  
  //initialize background color change function
  setInterval(setRandomBackground, 3000);

/* Metals Api */

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

const getMetal = getMetalPromise().then(data => {
  //console.log(data);
  for(i = 0; i < data.length; i++){
    //console.log(data[i])
    for(metal in data[i]){
        console.log(`${metal} is ${data[i][metal]}`)
        if(metal === 'gold'){
            let tablegold = document.querySelector('#gold')
            let existinggoldTd = tablegold.querySelector('td:last-child')
            let goldtd = document.createElement('td')
            goldtd.textContent = `$${data[i][metal]}`
            tablegold.insertBefore(goldtd, existinggoldTd.nextSibling);
            
        }else if(metal === 'silver'){
            let tablesilver = document.querySelector('#silver')
            let existingsilverTd = tablesilver.querySelector('td:last-child')
            let silvertd = document.createElement('td')
            silvertd.textContent = `$${data[i][metal]}`
            tablesilver.insertBefore(silvertd, existingsilverTd.nextSibling);

        }else if(metal === 'platinum'){
            let tableplatinum = document.querySelector('#platinum')
            let existingplatinumTd = tableplatinum.querySelector('td:last-child')
            let platinumtd = document.createElement('td')
            platinumtd.textContent = `$${data[i][metal]}`
            tableplatinum.insertBefore(platinumtd, existingplatinumTd.nextSibling);

        }else if(metal === 'palladium'){
            let tablepalladium = document.querySelector('#palladium')
            let existingpalladiumTd = tablepalladium.querySelector('td:last-child')
            let palladiumtd = document.createElement('td')
            palladiumtd.textContent = `$${data[i][metal]}`
            tablepalladium.insertBefore(palladiumtd, existingpalladiumTd.nextSibling);

        }else{
            let tabletimestamp = document.querySelector('#timestamp')
            let timestamptd = document.createElement('td')
            timestamptd.colSpan = 2;
            let date = new Date(data[i][metal])
            date = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });
            timestamptd.textContent = `Last Update on: ${date}`
            tabletimestamp.appendChild(timestamptd)
        }
    }
  }

})
.catch(error => {
  // Handle any errors
  console.error(error);
});


/* Currency Converter */

const convertCurrency = () => {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
  
    fetch(`https://api.exchangerate-api.com/v4/latest/MUR`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const exchangeRate = data.rates[currency];
        const convertedAmount = (amount * exchangeRate).toFixed(2);
        const result = `Rs.${amount} = ${convertedAmount} ${currency}`;
        document.getElementById('result-currency').textContent = result;
      })
      .catch(error => console.error(error));
  }