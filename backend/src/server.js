require('dotenv').config()

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')

const routes = require('./routes')
const connectDB = require('./config/db')

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.status(200).send({
        msg: 'Welcome to the prototype server of GDSC LPU Event Bus',
    })
})

app.get('/health', (req, res) => {
    res.status(200).send({
        msg: 'Server is up and running',
        uptime: process.uptime(),
        timestamp: Date.now(),
    })
})

app.use('/api', routes)
app.use('*', (req, res) => {
    res.status(404).send({ msg: 'Route not found' })
})

const PORT = process.env.PORT || 4000

app.listen(PORT, '0.0.0.0', () => {
    connectDB()
    console.log(`API is listening on http://localhost:${PORT}.`)
})
