import express from 'express'
import router from './router/index.js'
import db from './database/index.js'

const app = express()

app.use(express.json())
	.use(router)
	.listen(process.env.PORT, () => {
		console.log(`Listening at http://localhost:${process.env.PORT}`)
	})
