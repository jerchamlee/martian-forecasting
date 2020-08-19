// https://api.nasa.gov/insight_weather/?api_key=xiJjadwGqm6JsIw4X5ePFHM0We8K9ePJ7i7cKsmz&feedtype=json&ver=1.0

async function getMarsData() {
    try {
      // What's wrong with this request URL?
      let response = await axios.get(`https://api.nasa.gov/insight_weather/?api_key=xiJjadwGqm6JsIw4X5ePFHM0We8K9ePJ7i7cKsmz&feedtype=json&ver=1.0`);
      console.log(response.data);
      displayData(response.data);
    } catch (error) {
      console.log(`Oops! There was an error: ${error}`);
    }
  }

  getMarsData()

  function displayData(data) {
    const main = document.querySelector(".at")
    for(const sol in data) {
        const li = document.createElement("li")
        li.textContent = data[sol].First_UTC
        main.append(li)
    } 
  };