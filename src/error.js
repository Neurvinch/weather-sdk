class WeatherSDKError extends Error {
    constructor(message){
        super(message);
        this.name = 'WeatherSDKError';
    }
}