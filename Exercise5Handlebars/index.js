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
