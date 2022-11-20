import express from 'express'
import {
	getAll,
	create,
	findOne,
	getUrl,
	update,
	destroy,
} from '../controllers/LinkController.js'

const router = express.Router()

router
	.get('/links', getAll)
	.post('/links', create)
	.get('/links/:id', findOne)
	.get('/links/url/:shorted_url', getUrl)
	.patch('/links/:id', update)
	.delete('/links/:id', destroy)

export default router
