  //display the date in letters
   const date = new Date();
   function displayDate(){
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = date.toLocaleDateString('en-GB', options);
   }
   //display the weather
     function displayWeather(){
        const sunny = 'Sunny ☼';
        const cloudy = 'Cloudy ☁'; 
        const snowy = 'Snowy ❄';
        const stormy = 'Stormy ⚡';
        const rainy = 'Rainy ☂';
        const weather = stormy;
      document.getElementById('weather').textContent = weather;
     }

     
    function displayWeatherData(){
        const city = 'Paris'; // replace with your city
        const apiKey = '922510e5f839e31d61159f7ba01e6221'; // replace with your OpenWeatherMap API key
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = data.weather[0].main;
            const temperature = data.main.temp;
            const temperatureInCelsius = temperature - 273.15.toFixed(2);
            document.getElementById('temperature').textContent = temperatureInCelsius.toFixed(2) + '°C';
            document.getElementById('weather').textContent = weather;
        })
        .catch(error => console.error('Error:', error));
    }

    
     
     
     // call the displayDate and displayWeather functions
     displayDate();
     displayWeatherData();