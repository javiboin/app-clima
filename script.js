const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '2da6bd37813b8d2e290a62ee872e7ceb';
const diffKelvinCelsius = 273.15;

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

function fetchWeather(city) {
    fetch(`${urlBase}?q=${city}&appid=${apiKey}&lang=es`)
    .then(data => data.json())
    .then(data => console.log(data))
}