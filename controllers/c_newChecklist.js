const { createChecklist } = require("../models/m_newChecklist");

const addChecklist = async (req, res) => {
  const { name } = req.body

  // Validasi: Pastikan name ada
  if (!name) {
    return res.status(400).json({ message: "Nama checklist diperlukan" })
  }

  try {
    const newChecklist = await createChecklist(name)
    return res
      .status(201)
      .json({ message: "Checklist berhasil dibuat", checklist: newChecklist })
  } catch (err) {
    console.error(err)
    return res
      .status(500)
      .json({ message: "Terjadi kesalahan saat menambah checklist" })
  }
};

module.exports = { addChecklist }
