const pool = require('../config/database')

const checklistsItemByChecklist = async (checklist_id) => {
    const query =
        `SELECT checklist_items.*, checklist.name
        FROM checklist_items
        JOIN checklist ON checklist_items.checklist_id = checklist.id
        WHERE checklist.id = $1;`
    const { rows } = await pool.query(query, [checklist_id])
    return rows
    
}

module.exports = checklistsItemByChecklist