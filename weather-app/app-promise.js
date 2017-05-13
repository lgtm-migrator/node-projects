/**
 * Created by Bobby on 13/5/2017.
 */

const axios = require('axios');
const yargs = require('yargs');

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

let encodedAddress = encodeURIComponent(argv.address);
let url_address = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios(url_address)
    .then((response)=> {
        console.log(response.data.results[0].formatted_address);
        let lat = response.data.results[0].geometry.location.lat;
        let lng = response.data.results[0].geometry.location.lng;
        return axios(`https://api.darksky.net/forecast/7a515097ba9b3b1bc2055aec31165230/${lat},${lng}`);
    })
    .then((response)=> {
        console.log(`Current temp is ${temp.fahrenheit_to_celsius(response.data.currently.temperature)} celsius. ` +
            `But it feels like ${temp.fahrenheit_to_celsius(response.data.currently.apparentTemperature)} celsius.`);
    })
    .catch((e) => {
        if (e.code === 'ENOTFOUND') {
            console.log('Cannot connect to APIs server.');
        }
        else {
            console.log(e);
        }
});