const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "faztpassword",
  host: "localhost",
  port: 5432,
  database: "curpdb",
});

module.exports = pool;
