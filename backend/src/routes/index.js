const { Router } = require('express')

const router = Router()

const assetRoute = require('./asset.route')
const authRoute = require('./auth.route')
const eventRoute = require('./event.route')
const orgRoute = require('./org.route')

router.use('/assets', assetRoute)
router.use('/auth', authRoute)
router.use('/events', eventRoute)
router.use('/org', orgRoute)

module.exports = router
