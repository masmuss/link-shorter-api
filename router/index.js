import express from 'express'
import {
	getAll,
	create,
	findOne,
	getShortedUri,
	update,
	destroy,
} from '../controllers/LinkController.js'

const router = express.Router()

router
	.get('/', getAll)
	.post('/', create)
	.get('/:id', findOne)
	.get('/url/:shorted_url', getShortedUri)
	.patch('/:id', update)
	.delete('/:id', destroy)

export default router
