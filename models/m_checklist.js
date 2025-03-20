const pool = require('../config/database')

const checklist = async () => {
const query ='SELECT * FROM meeting'
const { rows } = await pool.query(query)
return rows
}

module.exports = { checklist }