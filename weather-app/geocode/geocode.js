/**
 * Created by Bobby on 12/5/2017.
 */

const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);

    request({
        url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress} `,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Google server');
        }
        else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find results');
        }
        else if (body.status === 'OK') {
            var results = body.results[0];
            callback(undefined, {
                address: results.formatted_address,
                latitude: results.geometry.location.lat,
                longitude: results.geometry.location.lng
            });
        }
    });
};

module.exports = {
  geocodeAddress
};