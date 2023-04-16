const { pool } = require("./connection");

async function insert_contact(fname, lname, email, phone) {
    try {
        const res = await pool.query(
            "INSERT INTO contacts (first_name, last_name, email, phone_number) \
             VALUES ($1, $2, $3, $4)", [fname, lname, email, phone]
        );
    } catch(error) {
        console.log(error);
    }
    
    
}

module.exports = {insert_contact};