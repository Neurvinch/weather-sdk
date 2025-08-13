class WeatherSDKError extends Error {
    constructor(message){
        super(message);
        this.name = 'WeatherSDKError';
    }
}

class InvalidApiKeyError extends WeatherSDKError {
    constructor() {
        super("Invalid API key provided")
        this.name = 'InvalidApiKeyError'
    }
}