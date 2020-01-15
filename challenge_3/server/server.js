const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes.js');
const port = 8080;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use('/checkout', router);

module.exports.app = app;

app.listen(port, () => console.log(`Listening on port ${port}!`));