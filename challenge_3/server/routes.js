const routes = require('express').Router();

routes.post('/F1', (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

module.exports = routes;