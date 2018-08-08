const express = require('express');
const fortunes = require('./data/fortunes.json');
const app = express();

app.get('/fortunes', (req, res) => {
    res.json(fortunes);
});

app.get('/fortunes/:id', (req, res) => {
    res.json(fortunes.find(fortune => fortune.id == req.params.id));
});

app.get('/fortunes/random', (req, res) => {
    res.json(fortunes[Math.floor(Math.random() * fortunes.length)]);
});

module.exports = app;