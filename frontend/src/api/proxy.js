const express = require('express');
const request = require('request');
const app = express();

app.get('/api/proxy', (req, res) => {
    const url = req.query.url;
    request.get(url).pipe(res);
});

module.exports = app;