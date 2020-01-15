// I would attempt to use Sequelize but I don't want to get hung up on potential troubleshooting due to a lack of familiarity, since this is only a one day mini app.

const db = require('mysql');
const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'checkout'
});

connection.connect();

module.exports = db;