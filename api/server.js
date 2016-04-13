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
  //console.log(req.query) // populated!
  next()
})


app.post('/auth',function(req,res){
  console.log('requset',req.body)
  var response = {"code":200,"message":"success","data":{"name":"React"}}
    res.send(response);
  
})
app.get('/users', function(req, res){
  
  var response = [{"lastName":"Chinna","firstName":"Arun","id":1},{"lastName":"Raj","firstName":"Chinna","id":2},{"lastName":"YYY","firstName":"XXX","id":3},{"lastName":"JJJJ","firstName":"ZZZZ","id":3}]; 
  res.send(response);
});

app.get('/student', function(req, res){

console.log('asdas',req.query)

  var response = [{"lastName":"Chinna","firstName":"Arun","id":1},{"lastName":"Raj","firstName":"Chinna","id":2},{"lastName":"YYY","firstName":"XXX","id":3},{"lastName":"JJJJ","firstName":"ZZZZ","id":3}]; 
  res.send(response);
});

app.get('/student/:id', function(req, res){

var studentID = req.params.id
var studentDetails = [{"lastName":"Chinna","firstName":"Arun","id":1},{"lastName":"Raj","firstName":"Chinna","id":2},{"lastName":"YYY","firstName":"XXX","id":3},{"lastName":"JJJJ","firstName":"ZZZZ","id":3}]; 
var response = {};
  for(var i=0;i<studentDetails.length;i++){
    if(studentID == studentDetails[i].id){
        response = studentDetails[i];
        break;
    }
  }
  
  res.send(response);
});


app.get('/menu', function(req, res){
  
  var response = [{"name":"DashBoard","route":"/app"},{"name":"Students","route":"/app/students"},{"name":"Teachers","route":"/app/teachers"},{"name":"Account","route":"/app/account"}]; 
  res.send(response);
});


app.get('/', function(req, res){
    var response = 'Welcome to Mock Server'; 
  res.send(response);
});

app.listen(8011, function() {
    console.log('Listening on port 8011');
});

