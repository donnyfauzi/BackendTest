const pool = require("../config/database")

const checklist = async () => {
const query ="SELECT * FROM checklist";
const { rows } = await pool.query(query);
return rows[0];
}

module.exports = { checklist }