const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var functions = require('./functions');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, './') });
    //res.render('index.html');
    console.log('in get');
});
app.get('/load', (req, res) => {
    var j = functions.view();
    res.status(200).send(j);
});
app.post('/add', (req, res) => {
    console.log('in post');
    functions.add(req.body.value);
    res.status(200).send({ err: false, msg: 'added succchhkl', data: {} });
    // res.header('Content-Type', 'application/json');
});
app.delete('/:id', (req, res) => {
    console.log(req.params.id);
    functions.Del(req.params.id);
    res.status(200).send({ err: false, msg: 'added succchhkl', data: {} });
})
app.put('/', (req, res) => {
    console.log(req.body);
    functions.update(req.body);
    res.status(200).send({ err: false, msg: 'added succchhkl', data: {} });
})
app.listen(8081);
