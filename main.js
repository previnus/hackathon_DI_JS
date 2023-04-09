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
  
    fetch( url)
    // fetch(corsUrl + '/?' + url)
      .then(response => {
        console.log(response)
        return response.json()
      
      }).then(data => {
        localStorage.setItem('metalData', JSON.stringify(data))
      
      }).catch(error => console.error(error));
  }

  getApi()

    // set local storage

      /* let value = 20
      localStorage.setItem("calcMemory", value);
      const cat = localStorage.getItem("calcMemory")
      console.log(cat)
      localStorage.removeItem("myCat") 
      localStorage.clear()

    */

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