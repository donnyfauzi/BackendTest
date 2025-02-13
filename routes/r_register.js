const express = require('express')
const { registerUser } = require('../controllers/c_register')

const router = express.Router()

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Registrasi user baru
 *     description: Mendaftarkan user baru dengan email dan password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "User Baru"
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: User berhasil didaftarkan
 *       400:
 *         description: Input tidak valid
 */

router.post('/register', registerUser)

module.exports = router