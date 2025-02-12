const addChecklist = require('../models/m_addChecklistItem')

const createChecklistItem = async (req, res) => {
    const checklist_id = req.params.id
    const { item_text, is_checked } = req.body

    if (!item_text) {
        return res.status(400).json({message: 'Nama item harus diisi !'})
    }

    try {
        const newItem = await addChecklist(checklist_id, item_text, is_checked || false)
        res.status(200).json(newItem)
    } catch (error) {
        res.status(200).json({message:'Terjadi kesalahan', error});
    }
}

module.exports = createChecklistItem