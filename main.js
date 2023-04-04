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