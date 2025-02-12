const pool = require('../config/database')

const addChecklistItem = async (checklist_id, item_text, is_checked = false) => {
    const query = 'INSERT INTO checklist_items (checklist_id, item_text, is_checked) VALUES ($1, $2, $3) RETURNING *;'
    const values = [checklist_id, item_text, is_checked]
    const { rows } = await pool.query(query, values)
    return rows[0]
}

module.exports = addChecklistItem