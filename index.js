const express = require('express');
const axios = require('axios');

const api = axios.create({
    baseURL: 'http://10.238.83.84/bopmpe/api'
})

const timeout = ms => new Promise(res => setTimeout(res, ms))

const app = express();

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const num = getRandomIntInclusive(1, 10);

app.get('/', async (req, res) => {

    let response = await api.get('/unidades', {
        headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsIm1hdHJpY3VsYSI6MTEzNzIwNCwibmFtZSI6Ik1hcmxvbiBkZSBMaW1hIENhc3RybyIsImdyYWR1YWNhbyI6IlNvbGRhZG8iLCJleHBpcmVkX2F0IjoiMjAyMC0wMi0yMiAwOS0xMC0wNCJ9.A4ZNbaXjrQx8er7_LkesKSCv9zFwFdsTWUIOyygD92w`
        }
    });
    console.log(response.data);

    return res.status(200).json({
        'Server id': num,
        'dados 10.238.83.84': response.data
    });
});

app.listen(8080);