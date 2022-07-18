const express = require('express');
const runPuppeteer = require('./runPuppeteer')

const app = express();

app.get('/', async (req,res) => {

    res.status(200).send();
});



app.post('/', async (req,res) => {
    let result = await runPuppeteer();

    res.status(200).send(result);
});

app.listen(8080, () => console.log("Server running at port 8080"));