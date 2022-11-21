const { Router } = require('express')
const { uploadSv, parser } = require('../services/assets.service')
const AssetsController = require('../controllers/assets.controller')

const { upload } = new AssetsController()
const router = Router()

router.post('/', parser.single('image'), upload)

module.exports = router
