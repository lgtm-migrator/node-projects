/**
 * Created by Bobby on 14/5/2017.
 */

const utils = require('./utils');
const expect =require('expect');

describe('Utils', () => {

    describe('async functions', () => {
        it('should async add two numbers', (done) => {
            utils.asyncAdd(8, 7, (sum)=> {
                expect(sum).toBe(15).toBeA('number');
                done();
            })
        });

        it('should return async square of a number', (done) => {
            utils.asyncSquare(9, (res) => {
                expect(res).toBe(81).toBeA('number');
                done();
            });
        });
    });

    describe('add function', () => {
        it('should add two numbers', () => {
            let res = utils.add(4, 53);
            expect(res).toBe(57).toBeA('number');
        });
    });

    describe('square function', () => {
        it('should return the square of a number', () => {
            let res = utils.square(9);
            expect(res).toBe(81).toBeA('number');
        });
    });

    describe('set name', () => {
        it('should set firstName and lastName', () => {
            var user = {};
            let res = utils.setName(user, 'John Smith');
            expect(res).toEqual({
                firstName : "John",
                lastName: "Smith"
            }).toBeA('object');
        });
    });
});
