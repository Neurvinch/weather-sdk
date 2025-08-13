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



      async _makeRequest(endpoint, params = {}) {

        try {

            this._log(`Making request to ${endpoint}`)

            const res = await axios({
                method: 'get' ,
                url: `${this.config.baseUrl} ${endpoint}`,

                params:{
                    key: this.apikey,
                    lang : this.config.language,
                    ...params
                },
                timeout: this.config.timeout

            });

            return res.data;
            
        } catch (error) {

            if(error.response) {
                throw new RequestFAiledError(error.response.status);
            } else if (error.request) {
                throw new WeatherSDKError("No response recieved from server")

            } else {
                throw new WeatherSDKError(error.message)
            }
            
        }
      }
 }