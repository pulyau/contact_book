const { Pool } = require("pg");

const pool = new Pool({
  user: "contact_book_user",
  database: "contact_book",
  password: "password",
  port: 5432,
  host: "localhost",
});
module.exports = { pool };
