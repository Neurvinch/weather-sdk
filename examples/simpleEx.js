const WeatherClient = require("../src/WeatherClient");

async function main () {

    try { 
        const weather = new WeatherClient("your-api-key-here", {
            debug: true,
            language: "en"
        });

         const current = await weather.getCureentWeather('Germany');

         console.log('Current Weather: ', current.current.temp_c, "°C");
        
    } catch (error) {
        
    }
}