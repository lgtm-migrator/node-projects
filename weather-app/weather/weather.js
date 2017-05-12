/**
 * Created by Bobby on 12/5/2017.
 */

const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/7a515097ba9b3b1bc2055aec31165230/${lat},${lng}`,
        json: true
    }, (error, response, body)=> {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
        else{
            callback('Unable to fetch weather forecast');
        }

    });
};

module.exports.getWeather = getWeather;
