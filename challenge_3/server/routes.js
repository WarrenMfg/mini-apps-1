const routes = require('express').Router();

routes.get('/F1', (req, res) => {

});

routes.post('/F1', (req, res) => {
  res.sendStatus(200);
});

module.exports = routes;