// I would attempt to use Sequelize but I don't want to get hung up on potential troubleshooting due to a lack of familiarity, since this is only a one day mini app.

const mysql = require('mysql');
const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'checkout'
});

db.connect();

module.exports = db;