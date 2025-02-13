const express = require('express')
const { loginUser } = require('../controllers/c_login')

const router = express.Router()

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Proses Login 
 *     description: Login user dengan email, password dan mengembalikan token JWT
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "donnyfauzi55@gmail.com"
 *               password:
 *                 type: string
 *                 example: "donny123"
 *     responses:
 *       200:
 *         description: Login berhasil, mengembalikan token JWT
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "your.jwt.token"
 *       401:
 *         description: Email atau password salah
 *       400:
 *         description: Input tidak valid
 */

router.post('/login', loginUser)

module.exports = router