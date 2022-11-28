import express from 'express'
import {
	getAll,
	create,
	findOne,
	update,
	destroy,
} from '../controllers/LinkController.js'

// utils
import { countAllLinks } from '../utils/CountAllLinks.js'
import { countLinksClicks } from '../utils/CountLinksClicks.js'
import { getTopLinks } from '../utils/TopLinks.js'
import { getShortedUri } from '../utils/GetShortedUri.js'

const router = express.Router()

router
	.get('/', getAll)
	.post('/', create)
	.get('/:id', findOne)
	.patch('/:id', update)
	.delete('/:id', destroy)
	
	// utils
	.get('/url/:shorted_url', getShortedUri)
	.get('/utils/count', countAllLinks)
	.get('/utils/clicks', countLinksClicks)
	.get('/utils/top/:limit', getTopLinks)

export default router
