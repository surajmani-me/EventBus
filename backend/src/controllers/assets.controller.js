const { uploadSv } = require('../services/assets.service')
const { makeResponse } = require('../helpers')

class AssetsController {
    upload = async (req, res) => {
        try {
            const msg = await uploadSv(req.file, req.body)
            res.status(200).send(makeResponse(msg))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }
}

module.exports = AssetsController