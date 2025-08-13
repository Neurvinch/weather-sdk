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

class RequestFAiledError extends WeatherSDKError {

    constructor(status) {
        super(`API request failed with status ${status}`)

        this.name = "RequestFailedError";
        this.status = status
    }
}