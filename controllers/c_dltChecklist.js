const { dltChecklist } = require('../models/m_dltChecklis')

const deleteChecklist = async (req, res) => {
    const { id } = req.params

    if(!id) {
        return res.status(400).json({message: 'Masukan id yang mau dihapus'})
    }

    try {
        const deletedChecklist = await dltChecklist(id)
        
        if (!dltChecklist) {
        return res.status(404).json({ message: "Checklist tidak ditemukan" })
      }

        return res.status(200).json({ message: "Checklist berhasil dihapus", deletedChecklist })
        
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Terjadi kesalahan saat menghapus checklist" })
    }
}

module.exports = { deleteChecklist }