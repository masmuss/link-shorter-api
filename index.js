import express from 'express'
import router from './router/index.js'
import db from './database/index.js'
import cors from 'cors'

const app = express()
const corsOptions = {
	origin: '*',
	credentials: true,
	optionsSuccessStatus: 200,
	methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
}

app.use(express.json())
	.use(express.urlencoded({ extended: true }))
	.use(router)
	.use(cors(corsOptions))
	.listen(process.env.PORT, () => {
		console.log(`Listening at http://localhost:${process.env.PORT}`)
	})
