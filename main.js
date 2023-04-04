/* BG COLOR CHANGER */

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


/* METAL PRICE */

const getApi = () => {
    const url = 'https://api.metals.live/v1/spot';
    const corsUrl = 'https://corsproxy.io'; // have to make use of a proxy because of cors issues
  
    fetch(corsUrl + '/?' + url)
      .then(response => response.json())
      .then(data => {
        console.log(data[0]["gold"])
  
        for(let i = 0; i < data.length; i++){
          for(const key in data[i]){
            console.log(`${key} ${data[i][key]}`)
          }
        }
      })
      .catch(error => console.error(error));
  }