var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors= require('cors');

const app = express();
app.use(express.static(__dirname+'/front-end'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect('mongodb://sashikodi:omsai28@ds151927.mlab.com:51927/whitebox');
var db= mongoose.connection;
db.once('open', function(){
    console.log('connection with mongo established');
})

app.use('/', require('./routes'));
app.listen(3000, ()=>{
     console.log('srver is listening on port 3000')
});
