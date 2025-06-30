async function getweather() {
    const city = document.getElementById("cityInput").value; 
    const apikey = "1153a3cf429e2c5ae8449be71b317a6b";

    if (!city) {
        alert("Enter city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {


            const result = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;
            document.getElementById("weather-result").innerHTML = result;
        } else {
            document.getElementById("weather-result").innerHTML = `<p>${data.message}</p>`; 
        }
    } catch (error) {
        console.log("Error fetching weather", error);
        document.getElementById("weather-result").innerHTML = `<p>Something went wrong. Please try again.</p>`;
    }
}
