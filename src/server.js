const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const fh = require('./modules/fh');
const fh2 = require('./modules/fh2');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/onu', async (req, res, next) => {res.json(await fh.fh_onu())});
app.get('/onu2', async (req, res, next) => {res.json(await fh2.fh_onu())});

app.listen(8080);