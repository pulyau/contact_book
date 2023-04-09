const { pool } = require("./connection");

async function create_contacts_table() {
  try {
    const res = await pool.query(
      "CREATE TABLE IF NOT EXISTS contacts (\
        id serial PRIMARY KEY,\
        first_name VARCHAR(50),\
        last_name VARCHAR(50),\
        email VARCHAR(50),\
        phone_number VARCHAR(15),\
        CONSTRAINT non_empty_name CHECK(first_name is not null or last_name is not null));"
     );
      console.log(res.rows);
  } catch (error) {
    console.error(error)
  }
}

create_contacts_table();