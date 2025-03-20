const pool = require('../config/database')

const addChecklistItem = async (unit, ruang_meeting, tanggal_rapat, waktu_mulai, waktu_selesai, jumlah_peserta, jenis_konsumsi) => {
    const query = `
    INSERT INTO meeting (unit, ruang_meeting, tanggal_rapat, waktu_mulai, waktu_selesai, jumlah_peserta, jenis_konsumsi) 
    VALUES ($1, $2, $3, $4, $5, $6, $7) 
    RETURNING *;
`;
    const values = [unit, ruang_meeting, tanggal_rapat, waktu_mulai, waktu_selesai, jumlah_peserta, jenis_konsumsi]
    const { rows } = await pool.query(query, values)
    return rows[0]
}

module.exports = addChecklistItem