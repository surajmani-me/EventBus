const { Router } = require('express')
const AuthController = require('../controllers/auth.controller')

const {
    register,
    login,
    verifyEmail,
    forgotPassword,
    resetPasswordCheck,
    resetPassword,
    githubLoginInit,
    githubLoginCallback,
    callbackLoginSuccess,
    linkedLoginCallback,
    linkedLoginInit,
} = new AuthController()

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.get('/verify/:token', verifyEmail)
router.post('/forgot-password', forgotPassword)
router.get('/reset-password/:token', resetPasswordCheck)
router.post('/reset-password/:token', resetPassword)
router.get('/github', githubLoginInit)
router.get('/github/callback', githubLoginCallback)
router.get('/linkedin', linkedLoginInit)
router.get('/linkedin/callback', linkedLoginCallback)

module.exports = router
