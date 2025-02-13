const { checklist } = require("../models/m_checklist")

const getChecklists = async (req, res) => {
  try {
    const checklists = await checklist();
    return res.status(200).json({message:'Berhasil mengambil checklist', checklists })
  } catch (error) {
    return res.status(500).json({ message: "Terjadi kesalahan", error })
  }
};

module.exports = { getChecklists }
