const { checklist } = require('../models/m_checklist')
const jwt = require('jsonwebtoken')

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET)
  } catch (error) {
    return null;
  }
}

const getChecklists = async (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '')

  if (!token) {
    return res.status(401).json({ message: 'Token tidak ditemukan' })
  }

  const user = verifyToken(token); 
  if (!user) {
    return res.status(403).json({ message: 'Token tidak valid' })
  }

  try {
    const checklists = await checklist()
    return res.status(200).json(checklists); 
  } catch (error) {
    return res.status(500).json({ message: 'Terjadi kesalahan', error })
  }
};

module.exports = { getChecklists }
