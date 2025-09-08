const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'API-KEY';
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
    .then(data => showWeatherData(data))
}

function showWeatherData(data){
    const divResponseData = document.getElementById('responseData');
    divResponseData.innerHTML = '';

    const cityName = data.name;
    const countryName = data.sys.country;
    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    const icon = data.weather[0].icon

    const cityInfo = document.createElement('h2');
    cityInfo.textContent = `${cityName}, ${countryName}`;

    const tempInfor = document.createElement('p');
    tempInfor.textContent = `Temperatura: ${ (temp - diffKelvinCelsius).toFixed(2) } °C`;

    const humidityInfo = document.createElement('p');
    humidityInfo.textContent = `Humedad: ${humidity} %`;

    const iconInfo = document.createElement('img');
    iconInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement('p');
    descriptionInfo.textContent = `Descripción: ${capitalizar1eraLetra(description)}`;

    divResponseData.appendChild(cityInfo);
    divResponseData.appendChild(tempInfor);
    divResponseData.appendChild(humidityInfo);
    divResponseData.appendChild(iconInfo);
    divResponseData.appendChild(descriptionInfo);
}

function capitalizar1eraLetra(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}