const {Client} = require('pg');

const pgsql = new Client({
  user:'postgres',
  password:'root',
  host:'localhost',
  port:5432,
  database:'attendance'

});

module.exports = { pgsql };