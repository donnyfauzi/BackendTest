const pool = require('../config/database')

const dltChecklist = async (id) => {
    const query = 'DELETE FROM checklist WHERE id = $1 RETURNING *'
    const { rows } = await pool.query(query, [id])
    return rows[0]
}

module.exports = { dltChecklist }