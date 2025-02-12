const { getChecklistsItemByChecklistId } = require('../models/m_checklistItem')

const getChecklistItem = async (req, res) => {
    const checklist_id = req.params.id

    try {
        const item = await getChecklistsItemByChecklistId(checklist_id)

        if (item.length == 0) {
            return res.status(404).json({ message: 'Checklist items tidak ditemukan' })
        }
        res.status(200).json(item)
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan", error })
    }
}

module.exports = { getChecklistItem }