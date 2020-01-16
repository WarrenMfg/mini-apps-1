const routes = require('express').Router();
const db = require('../database/db');

// hoping to conserve time by not breaking out into a controller and model

routes.post('/F1', (req, res) => {
  let params = [req.body.name, req.body.email, req.body.password, 'temp_salt']; // add salt function
  db.query('INSERT INTO F1 (name, email, password, salt) VALUES (?, ?, ?, ?)', params, (err, success) => {
    if (err) {
      console.log('error at routes.post /F1', err);
    } else {
      console.log('success at routes.post /F1', success);
      res.status(200).json(success.insertId);
    }
  })
});

routes.post('/F2', (req, res) => {
  let params = [
    req.body.address1,
    req.body.address2,
    req.body.city,
    req.body.state,
    req.body.shippingZip,
    req.body.phone,
  ];
  db.query('INSERT INTO F2 (address1, address2, city, state, shipping_zip, phone) VALUES (?, ?, ?, ?, ?, ?)', params, (err, success) => {
    if (err) {
      console.log('error at routes.post /F2', err);
    } else {
      console.log('success at routes.post /F2', success);
      res.status(200).json(success.insertId);
    }
  })
});

routes.post('/F3', (req, res) => {
  let params = [
    req.body.cc,
    'temp_salt',
    req.body.expiry,
    'temp_salt',
    req.body.cvv,
    'temp_salt',
    req.body.billingZip
  ];
  db.query('INSERT INTO F3 (cc, salt_cc, exp, salt_exp, cvv, salt_cvv, billing_zip) VALUES (?, ?, ?, ?, ?, ?, ?)', params, (err, success) => {
    if (err) {
      console.log('error at routes.post /F3', err);
    } else {
      console.log('success at routes.post /F3', success);
      res.status(200).json(success.insertId);
    }
  })
});

// routes.get('/confirm', (req, res) => {

// });

module.exports = routes;