const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.status(200).send({ msg: 'This is a dev route !!' })
})

module.exports = router
