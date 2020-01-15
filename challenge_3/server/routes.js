// const router = express.Router();
const routes = require('express').Router();

routes.post('/F1', (req, res) => {
  res.sendStatus(200);
});

module.exports = routes;