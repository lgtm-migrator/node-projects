/**
 * Created by Bobby on 12/5/2017.
 */

const request = require('request');

request({
    url:'http://maps.googleapis.com/maps/api/geocode/json?address=%2210%20Bayfront%20Avenue,%20018956%22',
    json: true
}, (error, response, body) => {
    var results = body.results[0];
    console.log(`Address: ${results.formatted_address}`);
    console.log(`Latitude: ${results.geometry.location.lat}`);
    console.log(`Longitude: ${results.geometry.location.lng}`);
});