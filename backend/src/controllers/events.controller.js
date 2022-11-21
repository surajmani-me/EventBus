const EventService = require('../services/event.service')
const { makeResponse } = require('../helpers')

class EventController extends EventService {
    constructor() {
        super()
    }

    createEvent = async (req, res) => {
        try {
            const msg = await this.createEventSv(req.body)
            res.status(200).send(makeResponse(msg))
        } catch (err) {
            console.log(err)
            res.status(400).send({ msg: err.message })
        }
    }

    getEvent = async (req, res) => {
        try {
            const event = await this.getEventSv(req.params.id)
            res.status(200).send(makeResponse(event))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    getEvents = async (req, res) => {
        try {
            const events = await this.getEventsSv()
            res.status(200).send(makeResponse(events))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    updateEvent = async (req, res) => {
        try {
            const msg = await this.updateEventSv(req.body)
            res.status(200).send(makeResponse(msg))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    deleteEvent = async (req, res) => {
        try {
            const msg = await this.deleteEventSv(req.params.slug)
            res.status(200).send(makeResponse(msg))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    getEventsByOrganization = async (req, res) => {
        try {
            const events = await this.getEventsByOrganizationSv(req.params.id)
            res.status(200).send(makeResponse(events))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    getEventsByUser = async (req, res) => {
        try {
            const events = await this.getEventsByUserSv(req.params.id)
            res.status(200).send(makeResponse(events))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }
    getEventsByCity = async (req, res) => {
        try {
            const events = await this.getEventsByCitySv(req.params.city)
            res.status(200).send(makeResponse(events))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    getEventsByState = async (req, res) => {
        try {
            const events = await this.getEventsByStateSv(req.params.state)
            res.status(200).send(makeResponse(events))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    getEventByType = async (req, res) => {
        try {
            const events = await this.getEventByTypeSv(req.params.type)
            res.status(200).send(makeResponse(events))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    getEventsByAttendanceMode = async (req, res) => {
        try {
            const events = await this.getEventsByAttendanceModeSv(
                req.params.attendanceMode
            )
            res.status(200).send(makeResponse(events))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    getEventsByAmount = async (req, res) => {
        try {
            const events = await this.getEventsByAmountSv(req.params.amount)
            res.status(200).send(makeResponse(events))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }

    getEventsByIsPaid = async (req, res) => {
        try {
            const events = await this.getEventsByIsPaidSv(req.params.isPaid)
            res.status(200).send(makeResponse(events))
        } catch (err) {
            res.status(400).send({ msg: err.message })
        }
    }
}

module.exports = EventController
