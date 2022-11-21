const OrganisationService = require('../services/organisation.service')

class OrganisationController extends OrganisationService {
    constructor() {
        super()
    }

    createOrganisation = async (req, res) => {
        try {
            const organisation = await this.createOrganisationSv(req.body)
            res.status(200).send(organisation)
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    getOrganisation = async (req, res) => {
        try {
            const organisation = await this.getOrganisationSv(req.params.id)
            res.status(200).send(organisation)
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    updateOrganisation = async (req, res) => {
        try {
            const organisation = await this.updateOrganisationSv(
                req.params.id,
                req.body
            )
            res.status(200).send(organisation)
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    deleteOrganisation = async (req, res) => {
        try {
            const organisation = await this.deleteOrganisationSv(req.params.id)
            res.status(200).send(organisation)
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    getOrganisationMembers = async (req, res) => {
        try {
            const organisation = await this.getOrganisationMembersSv(
                req.params.id
            )
            res.status(200).send(organisation)
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    addOrganisationMember = async (req, res) => {
        try {
            const organisation = await this.addOrganisationMemberSv(
                req.params.id,
                req.body.user_id,
                req.body.organisation_role
            )
            res.status(200).send(organisation)
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    removeOrganisationMember = async (req, res) => {
        try {
            const organisation = await this.removeOrganisationMemberSv(
                req.params.id,
                req.body.user_id
            )
            res.status(200).send(organisation)
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    updateOrganistionUserRole = async (req, res) => {
        try {
            const organisation = await this.updateOrganistionUserRoleSv(
                req.params.id,
                req.body.user_id,
                req.body.organisation_role
            )
            res.status(200).send(organisation)
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    getOrganisationByUser = async (req, res) => {
        try {
            const organisation = await this.getOrganisationByUserSv(req.body.id)
            res.status(200).send(organisation)
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    getAllOrganisation = async (req, res) => {
        try {
            const organisation = await this.getAllOrganisationSv(req.query.name, req.query.page, req.query.limit)
            res.status(200).send(organisation)
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }
}

module.exports = OrganisationController
