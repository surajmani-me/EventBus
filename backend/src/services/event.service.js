const Event = require('../model/events.model')

class EventService {
    createEventSv = async (eventReq) => {
        const {
            name,
            organizationId,
            description,
            address,
            city,
            state,
            linkSocial,
            attendanceMode,
            meetingLink,
            banner,
            hasAddToCalendar,
            eventType,
            isPaid,
            amount,
            timing,
        } = eventReq

        if (
            !name ||
            !organizationId ||
            !description ||
            !address ||
            !city ||
            !state ||
            !attendanceMode ||
            !timing ||
            !eventType
        ) {
            throw new Error('Please fill all the required fields')
        }

        const event = new Event({
            name,
            organizationId,
            description,
            address,
            city,
            state,
            linkSocial,
            attendanceMode,
            eventSlug: name.toLowerCase().split(' ').join('-'),
            meetingLink,
            banner,
            hasAddToCalendar,
            eventType,
            isPaid,
            amount,
            timing,
        })

        // check out attendanceMode

        if (attendanceMode === 'online') {
            if (!meetingLink) {
                throw new Error('Please fill all the required fields')
            } else {
                event.meetingLink = meetingLink
            }
        } else if (attendanceMode === 'offline') {
            event.meetingLink = null
        } else if (attendanceMode === 'hybrid') {
            if (!meetingLink) {
                throw new Error('Please fill all the required fields')
            } else {
                event.meetingLink = meetingLink
            }
        }

        try {
            const savedEvent = await event.save()
            return savedEvent
        } catch (err) {
            throw new Error(err)
        }
    }

    getEventSv = async (eventSlug) => {
        const event = await Event.findOne({ eventSlug })

        if (!event) {
            throw new Error('Event not found')
        }

        return event
    }

    getEventsSv = async () => {
        const events = await Event.find({})

        return events
    }

    updateEventSv = async (eventReq) => {
        const {
            name,
            organizationId,
            description,
            address,
            city,
            state,
            linkSocial,
            attendanceMode,
            eventSlug,
            meetingLink,
            banner,
            hasAddToCalendar,
            eventType,
            isPaid,
            amount,
            timing,
        } = eventReq

        if (
            !name ||
            !organizationId ||
            !description ||
            !address ||
            !city ||
            !state ||
            !attendanceMode ||
            !timing ||
            !eventSlug ||
            !hasAddToCalendar ||
            !eventType ||
            !isPaid ||
            !amount
        ) {
            throw new Error('Please fill all the required fields')
        }

        const event = await Event.findOne({ eventSlug })

        if (!event) {
            throw new Error('Event not found')
        }

        event.name = name
        event.organizationId = organizationId
        event.description = description
        event.address = address
        event.city = city
        event.state = state
        event.linkSocial = linkSocial
        event.attendanceMode = attendanceMode
        event.eventSlug = name.toLowerCase().split(' ').join('-')
        event.meetingLink = meetingLink
        event.banner = banner
        event.hasAddToCalendar = hasAddToCalendar
        event.eventType = eventType
        event.isPaid = isPaid
        event.amount = amount
        event.timing = timing

        // check out attendanceMode

        if (attendanceMode === 'online') {
            if (!meetingLink) {
                throw new Error('Please fill all the required fields')
            } else {
                event.meetingLink = meetingLink
            }
        } else if (attendanceMode === 'offline') {
            event.meetingLink = null
        } else if (attendanceMode === 'hybrid') {
            if (!meetingLink) {
                throw new Error('Please fill all the required fields')
            } else {
                event.meetingLink = meetingLink
            }
        }

        try {
            const savedEvent = await event.save()
            return savedEvent
        } catch (err) {
            throw new Error(err)
        }
    }

    deleteEventSv = async (eventSlug) => {
        const event = await Event.findOne({ eventSlug })

        if (!event) {
            throw new Error('Event not found')
        }

        try {
            await event.remove()
            return event
        } catch (err) {
            throw new Error(err)
        }
    }

    getEventsByOrganizationSv = async (organizationId) => {
        const events = await Event.find({ organizationId })

        if (!events) {
            throw new Error('Events not found')
        }

        return events
    }

    getEventsByUserSv = async (userId) => {
        const events = await Event.find({ userId })

        if (!events) {
            throw new Error('Events not found')
        }

        return events
    }

    getEventsByCitySv = async (city) => {
        const events = await Event.find({ city })

        if (!events) {
            throw new Error('Events not found')
        }

        return events
    }

    getEventsByStateSv = async (state) => {
        const events = await Event.find({ state })

        if (!events) {
            throw new Error('Events not found')
        }

        return events
    }

    getEventsByTypeSv = async (eventType) => {
        const events = await Event.find({ eventType })

        if (!events) {
            throw new Error('Events not found')
        }

        return events
    }

    getEventsByAttendanceModeSv = async (attendanceMode) => {
        const events = await Event.find({ attendanceMode })

        if (!events) {
            throw new Error('Events not found')
        }

        return events
    }

    getEventsByDateSv = async (date) => {
        const events = await Event.find({ date })

        if (!events) {
            throw new Error('Events not found')
        }

        return events
    }

    getEventsByAmountSv = async (amount) => {
        const events = await Event.find({ amount })

        if (!events) {
            throw new Error('Events not found')
        }

        return events
    }

    getEventsByIsPaidSv = async (isPaid) => {
        const events = await Event.find({ isPaid })

        if (!events) {
            throw new Error('Events not found')
        }

        return events
    }
}

module.exports = EventService
