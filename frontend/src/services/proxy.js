const express = require('express');
const request = require('request');
const app = express();

app.get('/proxy', (req, res) => {
    const url = req.query.url;
    request.get(url).pipe(res);
});

app.listen(3001, () => {
    console.log('Proxy server running on port 3001');
});
