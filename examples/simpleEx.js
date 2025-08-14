const WeatherClient = require("../src/WeatherClient");

async function main () {

    try { 
        const weather = new WeatherClient("your-api-key-here", {
            debug: true,
            language: "en"
        });

         const current = await weather.getCureentWeather('Germany');

         console.log('Current Weather: ', current.current.temp_c, "°C");

         const forecast = await weather.getForecast('Chennai', 4);

         console.log("Forecast:", forecast.forecast.forecastday.length, 'days')
        
    } catch (error) {
        
        
    }
}