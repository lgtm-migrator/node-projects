/**
 * Created by Bobby on 14/5/2017.
 */

const expect = require('expect');
const request = require('supertest');
let app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect('Hello World')
                .end(done);
        });
    });

    describe('GET /users', () => {
        it('should return user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'John',
                        age: 21
                    });
                })
                .end(done);
        });
    });
});
