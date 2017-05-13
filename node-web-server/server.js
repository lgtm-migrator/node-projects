/**
 * Created by Bobby on 13/5/2017.
 */

const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

let app = express();

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', ()=> {
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizeText', (text) => {
    return text.toUpperCase();
});

app.set('view engine', 'hbs');

// Logging
app.use((req, res, next) => {
   let now = new Date().toString();
   let log = `${now}: ${req.method} ${req.url}`;
   console.log(log);
   fs.appendFile('server.log', log+'\n', (err) => {
       if (err) {
           console.log('Unable to append to log.')
       }
   });
   next();
});

//Maintenance Middle-ware
app.use((req, res) => {
   res.render('maintenance.hbs', {
       pageTitle: 'Maintenance Page',
       maintenanceMessage: 'Website under maintenance. Will be right back.'
   })
});

app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my Home Page'
    })
});

app.get('/about', (req, res) => {
    res.render('about.hbs',{
        pageTitle: 'About Page'
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