const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema(
    {
        organizationId: {
            type: Schema.Types.ObjectId,
            ref: 'Organization',
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        gpsLocation: {
            type: String,
            default: '',
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        linkSocial: [
            {
                name: {
                    type: String,
                    required: true,
                },
                link: {
                    type: String,
                    required: true,
                },
            },
        ],
        attendanceMode: {
            type: String,
            required: true,
            default: 'online',
            enum: ['online', 'offline', 'hybrid'],
        },
        eventSlug: {
            type: String,
            required: true,
        },
        meetingLink: {
            type: String,
        },
        banner: {
            type: String,
        },
        hasAddToCalendar: {
            type: Boolean,
            default: false,
        },
        eventType: {
            type: String,
            default: 'session',
            enum: [
                'session',
                'workshop',
                'hackathon',
                'conference',
                'meetup',
                'other',
            ],
        },
        timing: {
            startDate: {
                type: String,
                required: true,
            },
            endDate: {
                type: String,
                required: true,
            },
            timeZone: {
                type: String,
                default: 'Asia/Kolkata',
            },
        },

        isPaid: {
            type: Boolean,
            default: false,
        },
        amount: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
)

const Event = mongoose.model('Event', eventSchema)

module.exports = Event
