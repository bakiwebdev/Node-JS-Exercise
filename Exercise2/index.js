const express = require("express")
const app = express();


app.get('/',function (req, res) {
    res.sendFile(__dirname + '/view/index.html');
})

app.get('/style.css',function(req, res){
    res.sendFile(__dirname + '/view/style.css');

});
// localhost port:3000
app.listen(3000)