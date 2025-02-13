const express = require('express')
const { getChecklists } = require('../controllers/c_checklist')
const { verifyToken } = require("../middlewares/login")

const router = express.Router()

/**
 * @swagger
 * /api/checklist:
 *   get:
 *     tags:
 *       - Get Checklist
 *     summary: Mengambil semua data checklist
 *     description: Endpoint ini hanya bisa diakses oleh user yang sudah login (membutuhkan Bearer Token).
 *     security:
 *       - BearerAuth: []  
 *     responses:
 *       200:
 *         description: Berhasil mengambil daftar checklist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 checklists:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       name:
 *                         type: string
 *       500:
 *         description: Terjadi kesalahan
 *       401:
 *         description: Unauthorized, token tidak valid atau tidak diberikan
*/

router.get('/checklist',verifyToken, getChecklists)

module.exports = router
