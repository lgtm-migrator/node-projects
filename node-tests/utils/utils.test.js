/**
 * Created by Bobby on 14/5/2017.
 */

const utils = require('./utils');
const expect =require('expect');

it('should add two numbers', () => {
    let res = utils.add(4, 53);
    expect(res).toBe(57).toBeA('number');
});

it('should return the square of a number', () => {
   let res = utils.square(9);
   expect(res).toBe(81).toBeA('number');
});

it('should set firstName and lastName', () => {
    var user = {};
    let res = utils.setName(user, 'John Smith');
    expect(res).toEqual({
        firstName : "John",
        lastName: "Smith"
    }).toBeA('object');
});