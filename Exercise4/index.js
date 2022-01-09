const express = require("express")
const cors = require("cors")
const app = express();
const axios = require("axios");
const url = 'https://randomfox.ca/floof/'

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
})

app.get('source.js', (req, res) => {
    res.sendFile(__dirname + '/view/index.html');
})

app.get('/image', (req, res) => {
    axios.get(url)
    .then(response => {
        res.send(response.data)
    })
    .catch(err => { 
        res.send(err)
    })
})

app.get('/source.js', (req, res) => {
    res.sendFile(__dirname + '/view/source.js');
})


app.listen(3000);