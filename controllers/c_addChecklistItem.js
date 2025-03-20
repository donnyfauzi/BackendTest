const addChecklist = require('../models/m_addChecklistItem')

const createChecklistItem = async (req, res) => {
    const { unit, ruang_meeting, tanggal_rapat, waktu_mulai, waktu_selesai, jumlah_peserta, jenis_konsumsi } = req.body


    try {
        const newItem = await addChecklist(unit, ruang_meeting, tanggal_rapat, waktu_mulai, waktu_selesai, jumlah_peserta, jenis_konsumsi)
        res.status(200).json({ message: 'Berhasil Input Data', newItem })
    } catch (error) {
        res.status(200).json({message:'Terjadi kesalahan', error});
    }
}

module.exports = createChecklistItem