const { Router } = require('express')

const EventController = require('../controllers/events.controller')

const {
    createEvent,
    getEvent,
    getEvents,
    updateEvent,
    deleteEvent,
    getEventsByOrganization,
    getEventsByUser,
    getEventsByCity,
    getEventsByState,
    getEventByType,
    getEventsByAttendanceMode,
    getEventsByAmount,
    getEventsByIsPaid,
} = new EventController()

const router = Router()

router.post('/create', createEvent)
router.get('/get', getEvents)
router.get('/get/:id', getEvent)
router.put('/update', updateEvent)
router.delete('/delete/:slug', deleteEvent)
router.get('/getByOrganization/:id', getEventsByOrganization)
router.get('/getByUser/:id', getEventsByUser)
router.get('/getByCity/:city', getEventsByCity)
router.get('/getByState/:state', getEventsByState)
router.get('/getByType/:type', getEventByType)
router.get('/getByAttendanceMode/:mode', getEventsByAttendanceMode)
router.get('/getByAmount/:amount', getEventsByAmount)
router.get('/getByIsPaid/:isPaid', getEventsByIsPaid)

module.exports = router
