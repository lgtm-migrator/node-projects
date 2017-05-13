/**
 * Created by Bobby on 13/5/2017.
 */

const express = require('express');
const hbs = require('hbs');

let app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('home.hbs', {
        headerTitle: 'Home',
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my Home Page',
        currentYear: new Date().getFullYear()
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
   res.send({
      errorMessage: 'Unable to handle error'
   });
});

app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
});