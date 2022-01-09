// const express = require("express");
// const axios = require("axios")
// const url = 'https://randomfox.ca/floof/'
// import { engine } from 'express-handlebars';

// const app = express();

// // Connect express to handlebars
// app.engine('handlebars', engine());
// app.set('view engine', 'handlebars');
// app.set('views', './views');

import express from 'express';
import axios from 'axios';
import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const url = 'https://randomfox.ca/floof/'

app.get('/', (req, res) => {
    axios.get(url)
    .then(response => {
        res.render('home', {
            imageURL: response.data.image,
        });
    })
    .catch(err => {
        res.send(err);
    })
})

app.listen(3000);
