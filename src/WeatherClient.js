const axios = require('axios');

const {
 WeatherSDKError,
 InvalidApiKeyError,
 RequestFAiledError
} = require("./error")

 class WeatherClient {
    constructor(apikey, options={}) {
        if(!apikey || typeof apikey != 'string') {
            throw new InvalidApiKeyError();
        }


        this.apikey = apikey;

        this.config = {
            baseUrl: options.baseUrl || 'https://api.weatherapi.com/v1',
            timeout: options.timeout || 5000,
            language : options.language || 'en',
            debug : options.debug || false

        }

        this._log("SDK initialized")
    }
      _log(message) {
        if(this.config.debug) {
            console.log(`[WeatherSDK]  ${message}`)
        }
      }

 }