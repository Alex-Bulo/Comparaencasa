const fs = require('fs');
const Sequelize = require('sequelize');


var sql_string = fs.readFileSync('./docs/query.sql', 'utf8');
const sequelize = new Sequelize(null, 'root', null, {
  host: '127.0.0.1',
  dialect: 'mysql',
  dialectOptions: {
    multipleStatements: true
  }
});

sequelize.query(sql_string);