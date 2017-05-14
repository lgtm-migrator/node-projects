const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'John',
        age: 21
    }, {
        name: 'Simon',
        age: 24
    }, {
        name: 'Albert',
        age: 28
    }]);
});

app.listen(3000, ()=> {
    console.log('Running server on port 3000');
});

module.exports.app = app;