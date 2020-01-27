var express = require('express');
var app = express();
app.get(function(req,res){
    console.log('in /');
    
});
app.get('/rinu/:id',function(req,res){
    console.log('in /');
    res.send(req.params.id);
    
});


app.listen(8080);
console.log('server is working on port 8080')