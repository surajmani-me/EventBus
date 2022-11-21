const Organisation = require('../model/organizations.model')

class OrganisationService {
    createOrganisationSv = async (organisationReq) => {
        const {
            slug,
            username,
            name,
            gpsLocation,
            address,
            state,
            city,
            description,
            picture,
            banner,
            linkSocial,
            country,
        } = organisationReq

        const organisation = new Organisation({
            slug,
            username,
            name,
            gpsLocation,
            address,
            state,
            city,
            description,
            picture,
            banner,
            linkSocial,
            country,
        })
        organisation.members.push({
            user: organisationReq.user,
            role: 'admin',
        })
        return await organisation.save()
    }

    getOrganisationSv = async (organisationId) => {
        return await Organisation.findById(organisationId)
    }

    updateOrganisationSv = async (organisationId, organisationReq) => {
        return await Organisation.findByIdAndUpdate(
            organisationId,
            organisationReq
        )
    }

    deleteOrganisationSv = async (organisationId) => {
        return await Organisation.findByIdAndDelete(organisationId)
    }

    getOrganisationMembersSv = async (organisationId) => {
        return await Organisation.findById(organisationId).populate('members')
    }

    addOrganisationMemberSv = async (organisationId, memberId, roleName) => {
        let organisation = await Organisation.findById(organisationId)
        organisation.members.push({
            user: memberId,
            role: roleName,
        })
        return await organisation.save()
    }

    updateOrganistionUserRoleSv = async (
        organisationId,
        memberId,
        roleName
    ) => {
        let organisation = await Organisation.findById(organisationId)
        let member = organisation.members.find(
            (member) => member.user == memberId
        )
        organisation.members = organisation.members.filter(
            (member) => member.user != memberId
        )
        member.role = roleName
        organisation.members.push(member)
        return await organisation.save()
    }

    removeOrganisationMemberSv = async (organisationId, memberId) => {
        let organisation = await Organisation.findById(organisationId)
        organisation.members = organisation.members.filter(
            (member) => member.user != memberId
        )
        return await organisation.save()
    }

    getOrganisationByUserSv = async (userId) => {
        return await Organisation.find({
            members: {
                $elemMatch: {
                    user: userId,
                },
            },
        })
    }

    getAllOrganisationSv = async (name, page = 0, limit = 10) => {
        let query = {}
        name = name ? name : ''
        if (name) {
            query.name = new RegExp(name, 'i')
        }        
        return await Organisation.find(query).skip(page * limit).limit(limit)
    }
}

module.exports = OrganisationService
