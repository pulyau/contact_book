const { pool } = require("./connection");

function get_contacts() {
    return new Promise((resolve, reject) => {
      // Use query to retrieve data from the database
      const query = 'SELECT * FROM contacts';
      pool.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.rows);
        }
      });
    });
  }

module.exports = {get_contacts};