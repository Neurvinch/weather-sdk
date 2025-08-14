const WeatherClient = require("../src/WeatherClient")

const axios = require('axios')

//  this make our jest thing to fully use the control of axios behavior

jest.mock('axios');


// create a client before use and clear before axios mocks
describe('WeatherClient', () => {
    let client;
    
    beforeEach( () => {
        client = new WeatherClient('test-api-key')
        axios.mockClear()
    })

});



