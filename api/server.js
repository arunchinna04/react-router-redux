var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use(function (req, res, next) {
  console.log(req.query) // populated!
  next()
})


app.post('/auth',function(req,res){
  console.log('requset',req.body)
  var response = {"code":200,"message":"success","data":{"name":"React"}}
    res.send(response);
  
})

app.get('/', function(req, res){
    var response = 'Welcome to Chola Module Generate <br>'+ 
                   '  1. To create module          ->   /generate?module= module name<br>'+
                   '  2. To Zip the module created ->   /zip<br>'; 
  res.send(response);
});

app.listen(8011, function() {
    console.log('Listening on port 8011');
});

