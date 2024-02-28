function showweatherDetails(event) { try{
    const city = document.getElementById('city').value;
    const apiKey = '9ebf33dbce90a2c5aa8c6a9319899201'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${'Istanbul'}&appid=${'9ebf33dbce90a2c5aa8c6a9319899201'}&units=metric`;
    event.preventDefault();
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                              <p>Temperature: ${data.main.temp} &#8451;</p>
                              <p>Weather: ${data.weather[0].description}</p>`;
    })
}  catch (error) {
    console.error('Error fetching weather:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '<p>Failed to fetch weather. Please try again.</p>';
}

};    
                              

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );