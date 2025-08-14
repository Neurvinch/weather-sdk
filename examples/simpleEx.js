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

        if (error.name === "InvalidApiKeyError" ) {
            console.error("Invalid API Key. Please check your API key and try again.");


        }
           else if (error.name === " RequestFailedError") {
            console.error ('Api Request failed with status:', error.status)
           } 
           
        else {
            console.error("An unexpected error occurred:", error.message);
    }
}
}

main()