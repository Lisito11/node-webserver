require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const hbs = require('hbs');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//Static content
app.use(express.static('public'));

app.get('/',  (req, res) => {
  res.render('home', {
    name: 'Lisanny',
    title: 'Web Programmer'
  });
})

app.get('/hello-world',  (req, res) => {
    res.send('Hello World from su ruta')
})

app.get('/generic',  (req, res) => {
  // res.sendFile(__dirname  + '/public/generic.html')
  res.render('generic', {
    name: 'Lisanny',
    title: 'Web Programmer'
  });
})

app.get('/elements',  (req, res) => {
  // res.sendFile(__dirname  + '/public/elements.html')
  res.render('elements', {
    name: 'Lisanny',
    title: 'Web Programmer'
  });
})

app.get('*',  (req, res) => {
    res.sendFile(__dirname  + '/public//back/404.html')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })