const mongoose = require('mongoose')
const Schema = mongoose.Schema

const OrganizationSchema = new Schema(
    {
        slug: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        gpsLocation: {
            type: String,
        },
        address: {
            type: String,
        },
        state: {
            type: String,
        },
        city: {
            type: String,
        },
        description: {
            type: String,
        },
        picture: {
            type: String,
        },
        banner: {
            type: String,
        },
        linkSocial: [
            {
                name: {
                    type: String,
                },
                link: {
                    type: String,
                },
            },
        ],
        isBlocked: {
            type: Boolean,
            default: false,
        },
        bankDetails: {
            type: String,
        },
        members: [
            {
                userId: {
                    type: Schema.Types.ObjectId,
                    ref: 'User',
                },
                roles: [
                    {
                        type: String,
                    },
                ],
            },
        ],
        country: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

const Organization = mongoose.model('Organization', OrganizationSchema)

module.exports = Organization
