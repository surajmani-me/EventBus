const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        if (conn.connection.readyState === 1) {
            console.log(`🌳 Connected to MongoDB \n`)
        } else {
            throw new Error('MongoDB connection failed')
        }
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB
