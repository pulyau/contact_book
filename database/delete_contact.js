const { pool } = require("./connection");

async function delete_contact(id) {
    try {
        const res = await pool.query(
            "DELETE FROM  contacts WHERE id = $1",[id]
        );
    } catch(error) {
        console.log(error);
    }
    
    
}

module.exports = {delete_contact};