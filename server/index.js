'use strict';
let express = require('express');
let bodyParser = require('body-parser');
let config = require('./config');

let app = express();

app.use(express.static(config.staticPath));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(config.port);
console.log(`Listening on port ${config.port}`);
