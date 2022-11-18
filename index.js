import express from 'express'
import router from './router/index.js'
import db from './database/index.js'

const app = express()
const port = 3000

app
   .use(express.json())
   .use(router)
   .listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
