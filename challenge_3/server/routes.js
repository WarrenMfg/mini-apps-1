const routes = require('express').Router();
const db = require('../database/db');

// hoping to conserve time by not breaking out into a controller and model

routes.post('/F1', (req, res) => {
  let params = [req.body.name, req.body.email, req.body.password, 'temp_salt']; // add salt function
  db.query('INSERT INTO F1 (name, email, password, salt) VALUES (?, ?, ?, ?)', params, (err, success) => {
    if (err) {
      console.log('error at routes.post /F1', err);
    } else {
      // console.log('success at routes.post /F1', success);
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
      // console.log('success at routes.post /F2', success);
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
  ]; // add salt function
  db.query('INSERT INTO F3 (cc, salt_cc, exp, salt_exp, cvv, salt_cvv, billing_zip) VALUES (?, ?, ?, ?, ?, ?, ?)', params, (err, success) => {
    if (err) {
      console.log('error at routes.post /F3', err);
    } else {
      // console.log('success at routes.post /F3', success);
      res.status(200).json(success.insertId);
    }
  })
});

routes.get('/confirm/:id', (req, res) => {
  let id = req.originalUrl.slice(req.originalUrl.indexOf('=') + 1);
  db.query('SELECT F1.name, F1.email, F1.password, F2.address1, F2.address2, F2.city, F2.state, F2.shipping_zip, F2.phone, F3.cc, F3.exp, F3.cvv, F3.billing_zip FROM F1 INNER JOIN F2 ON F1.id=F2.id INNER JOIN F3 ON F2.id=F3.id WHERE F1.id=(?)', [id, id, id], (err, data) => {
    if (err) {
      console.log('error at routes.get /confirm/:id', err);
    } else {
      res.status(200).json(data);
    }
  });
});

module.exports = routes;