import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config({
	path: '.env',
})

const conn = mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
	console.log('Database connection established.')
})

export default db
