const express = require('express');
const app = express();

app.use(express.static('./client/dist'));

module.exports.app = app;
app.listen(process.env.PORT || 8080, () => console.log('Listening on port 8080!'));

