/**
 * Created by Bobby on 12/5/2017.
 */

const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
const temp = require('./weather/temperature');

const argv = yargs
    .options({
    a: {
        alias: 'address',
        demand: true,
        describe: 'The address used to fetch weather',
        string: true
       }
    })
    .help()
    .alias('help','h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage);
    }
    else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
            if(errorMessage) {
                console.log(errorMessage);
            }
            else {
                console.log(`Current temp is ${temp.fahrenheit_to_celsius(weatherResults.temperature)} celsius. ` +
                    `But it feels like ${temp.fahrenheit_to_celsius(weatherResults.apparentTemperature)} celsius.`);
            }
        });
    }
});

