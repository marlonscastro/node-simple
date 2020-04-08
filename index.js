const express = require('express');

const PORT = process.env.PORT || 8080;

const app = express();

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const num = getRandomIntInclusive(1, 10);

app.get('/', async (req, res) => {
    return res.status(200).json({
        'Server id': num,
        'message': 'uma mensagem qualquer v2'
    });
});

app.listen(PORT);