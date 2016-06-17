var express = require('express');
var port = process.env.port || 8000;

var app = express();

app.use(express.static('./public'));
app.use(express.static('./dist'));

app.listen(port, function(err, res) {
  if(err)
    console.log('Error on connecting port ', port);
  console.log("Connected on port : ", port);
});
