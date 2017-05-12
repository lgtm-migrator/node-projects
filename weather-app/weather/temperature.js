/**
 * Created by Bobby on 12/5/2017.
 */

var fahrenheit_to_celsius = (temperature) => {
    return (Math.round( (temperature - 32 ) * 5/9 * 100)) / 100;
};

module.exports.fahrenheit_to_celsius = fahrenheit_to_celsius;