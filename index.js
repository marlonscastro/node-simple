const express = require('express');

const app = express();

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const num = getRandomIntInclusive(1,200);

app.get('/', (req, res) => {
    return res.status(200).json({
        'message': 'Hello World. num = ' + num
    })
});

app.listen(8080);