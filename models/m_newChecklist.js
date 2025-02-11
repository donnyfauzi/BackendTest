const pool = require('../config/database')

const createChecklist = async (name) => {
  const query = 'INSERT INTO checklist (name) VALUES ($1) RETURNING *'
  const { rows } = await pool.query(query, [name])
  return rows[0]
};

module.exports = { createChecklist }
