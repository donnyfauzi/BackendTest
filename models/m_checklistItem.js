const pool = require('../config/database')

const getChecklistsItemByChecklistId = async (checklist_id) => {
    const query = 'SELECT * FROM checklist_items WHERE checklist_id = $1'
    const { rows } = await pool.query(query, [checklist_id])
    return rows
}

module.exports = { getChecklistsItemByChecklistId }