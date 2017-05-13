/**
 * Created by Bobby on 13/5/2017.
 */

const request = require('request');

let geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        let encodedAddress = encodeURIComponent(address);

        request({
            url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress} `,
            json: true
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google server');
            }
            else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find results');
            }
            else if (body.status === 'OK') {
                let results = body.results[0];
                resolve({
                    address: results.formatted_address,
                    latitude: results.geometry.location.lat,
                    longitude: results.geometry.location.lng
                });
            }
        });
    });
};

geocodeAddress('Telok Blangah Heights Blk 61').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errMsg) => {
    console.log(`Error : ${errMsg}`);
});