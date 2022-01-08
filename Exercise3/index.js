const express = require("express")
const app = express()
const axios = require("axios")
const { response } = require("express")
const url = 'https://randomfox.ca/floof/'
app.get('/', function(req, res) {
    axios.get(url).then(response => {
        res.redirect(response.data.image);
    })
    .catch( err => {
        res.send(err.message);
    })
})


app.listen(3000)