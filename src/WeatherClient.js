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
    }
 }