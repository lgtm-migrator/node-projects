/**
 * Created by Bobby on 12/5/2017.
 */

const request = require('request');
const yargs = require('yargs');

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

var encodedAddress = encodeURIComponent(argv.address);

request({
    url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress} `,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to Google server');
    }
    else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to find results');
    }
    else if (body.status === 'OK') {
        var results = body.results[0];
        console.log(`Address: ${results.formatted_address}`);
        console.log(`Latitude: ${results.geometry.location.lat}`);
        console.log(`Longitude: ${results.geometry.location.lng}`);
    }
});