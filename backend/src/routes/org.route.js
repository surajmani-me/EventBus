const { Router } = require('express')
const OrgController = require('../controllers/organisation.controller')

const {
    createOrganisation,
    getOrganisation,
    updateOrganisation,
    deleteOrganisation,
    getOrganisationMembers,
    addOrganisationMember,
    removeOrganisationMember,
    updateOrganistionUserRole,
    getOrganisationByUser,
    getAllOrganisation
} = new OrgController()

const router = Router()

router.post('/', createOrganisation)
router.get('/', getAllOrganisation)
router.get('/getByUser', getOrganisationByUser)
router.get('/:id', getOrganisation)
router.put('/:id', updateOrganisation)
router.delete('/:id', deleteOrganisation)
router.get('/:id/members', getOrganisationMembers)
router.post('/:id/member', addOrganisationMember)
router.delete('/:id/member', removeOrganisationMember)
router.patch('/:id/member', updateOrganistionUserRole)

module.exports = router
