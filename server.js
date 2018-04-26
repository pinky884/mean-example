var express  = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app      = express();  

mongoose.connect('mongodb://localhost/mean-db');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));


app.use('/bower_components',express.static(__dirname + '/bower_components'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/partials',express.static(__dirname + '/partials'));

app.get('/index.html',function(req,res){
    console.log(__dirname);
    res.sendfile('index.html');
});


  
app.listen(3000, function() {
console.log('listenning on port:3000');
});

//dev01
// timestamp with nano seconds.
// invoke rest call to SubmitJob.java, submitJobWithOptions