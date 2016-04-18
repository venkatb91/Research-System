var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');


app.listen(6060);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Allow all requests from all domains & localhost
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.get("/trades", function(req, resp){
    var trades = JSON.parse(fs.readFileSync('output.json', 'utf-8'));
    resp.status(200).json(trades);    
});
