const express = require('express')
const { loginUser } = require('../controllers/c_login')

const router = express.Router()

/**
 * @swagger
 * /api/login:
 *   post:
 *     tags:
 *       - Login
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
 *                 message:
 *                   type: string
 *                 token:
 *                   type: string
 *                   example: "your JWT Token"
 *       401:
 *         description: Email atau password salah
 *       400:
 *         description: Input tidak valid
*/

router.post('/login', loginUser)

module.exports = router