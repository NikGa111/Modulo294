// Mappa dei codici meteo -> icona e descrizione
var weatherData = {
    0:  { icon: "☀️", desc: "Cielo sereno" },
    1:  { icon: "🌤️", desc: "Poco nuvoloso" },
    2:  { icon: "⛅", desc: "Poco nuvoloso" },
    3:  { icon: "☁️", desc: "Nuvoloso" },
    45: { icon: "🌫️", desc: "Nebbia" },
    48: { icon: "🌫️", desc: "Nebbia" },
    51: { icon: "🌦️", desc: "Pioviggine" },
    53: { icon: "🌦️", desc: "Pioviggine" },
    55: { icon: "🌧️", desc: "Pioviggine" },
    61: { icon: "🌧️", desc: "Pioggia" },
    63: { icon: "🌧️", desc: "Pioggia" },
    65: { icon: "🌧️", desc: "Pioggia" },
    71: { icon: "❄️", desc: "Neve" },
    73: { icon: "❄️", desc: "Neve" },
    75: { icon: "❄️", desc: "Neve" },
    85: { icon: "🌨️", desc: "Rovesci di neve" },
    86: { icon: "🌨️", desc: "Rovesci di neve" },
    95: { icon: "⛈️", desc: "Temporale" },
    96: { icon: "🌩️", desc: "Temporale con grandine" },
    99: { icon: "🌩️", desc: "Temporale con grandine" }
};
// Ho controllato ciò che forniva l'api e l'ho data in pasto a deepseek per generare questa lista con le icone.

// Riferimenti DOM
var cityInput = document.getElementById("cityInput");
var searchBtn = document.getElementById("searchBtn");
var weatherResult = document.getElementById("weatherResult");
var errorMessage = document.getElementById("errorMessage");
var weatherIcon = document.getElementById("weatherIcon");
var cityNameSpan = document.getElementById("cityName");
var temperatureSpan = document.getElementById("temperature");
var descriptionSpan = document.getElementById("description");

// Nasconde i messaggi di errore e mostra/nasconde card meteo
function showWeatherCard() {
    weatherResult.classList.remove("hidden");
    errorMessage.classList.add("hidden");
}

function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.classList.remove("hidden");
    weatherResult.classList.add("hidden");
}

function hideError() {
    errorMessage.classList.add("hidden");
}

// Ottiene info meteo dal codice
function getWeatherInfo(code) {
    if (weatherData[code]) {
        return weatherData[code];
    }
    return { icon: "🌡️", desc: "Condizioni miste" };
}

// Funzione principale: cerca meteo per città
async function searchWeather() {
    var cityName = cityInput.value.trim();
    
    if (cityName === "") {
        showError("Inserisci il nome di una città");
        return;
    }
    
    hideError();
    weatherResult.classList.add("hidden");
    
    try {

        // La soluzione delle coordinate mi sembrava quella più utile per la mia idea che era aggiungere una mappa :)


        // Ottiene le cordinate longitudine e latitudine. Deepseek mi ha aiutato a capire come costruire la url per ottenere le coordinate, e poi con quelle coordinate posso ottenere la meteo.
        var geoUrl = "https://geocoding-api.open-meteo.com/v1/search?name=" + encodeURIComponent(cityName) + "&count=1";
        var geoResponse = await fetch(geoUrl);
        var geoData = await geoResponse.json();
        
        // Controllo se città esiste
        if (!geoData.results || geoData.results.length === 0) {
            showError("Città non trovata: \"" + cityName + "\"");
            return;
        }
        
        var lat = geoData.results[0].latitude;
        var lon = geoData.results[0].longitude;
        var realCityName = geoData.results[0].name;
        var country = geoData.results[0].country || "";
        
        var displayName = country ? realCityName + ", " + country : realCityName;
        
        // Dalle coordinate ricava la meteo della regione, dà anche venti e altre info, ma io prendo solo la temperatura e il weathercode
        var weatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current_weather=true";
        var weatherResponse = await fetch(weatherUrl);
        var weatherDataJson = await weatherResponse.json();
        
        if (!weatherDataJson.current_weather) {
            showError("Dati meteo non disponibili");
            return;
        }
        // weathercode serve per l'icona
        var current = weatherDataJson.current_weather; // contiene temperature e weathercode correnti
        var temperature = Math.round(current.temperature); // arrotonda la temp
        var weatherCode = current.weathercode; // weathercode
        var weatherInfo = getWeatherInfo(weatherCode);
        
        // Aggiorna l'interfaccia
        weatherIcon.textContent = weatherInfo.icon;
        cityNameSpan.textContent = displayName;
        temperatureSpan.textContent = temperature + "°C";
        descriptionSpan.textContent = weatherInfo.desc;
        
        showWeatherCard();
        
    } catch (err) {
        console.error("Errore:", err);
        showError("Errore di connession. Riprova più tardi."); // catcha eventuali errori e li generalizza come errore di connessione
    }
}

// Eventi 
searchBtn.addEventListener("click", function() {
    searchWeather();
});

cityInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") { // se premo invio, cerca
        searchWeather();
    }
});