import express from 'express'
import router from './router/index.js'
import db from './database/index.js'
import cors from 'cors'

const app = express()
const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200,
}

app.use(express.json())
	.use(router)
	.use(cors(corsOptions))
	.listen(process.env.PORT, () => {
		console.log(`Listening at http://localhost:${process.env.PORT}`)
	})
