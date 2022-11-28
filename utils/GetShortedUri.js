import Link from '../models/Link.js'
import { countVisitor } from '../middleware/CountVisitor.js'

/**
 * @description Get a shorted uri
 * @route GET /url/:shorted_url
 * @returns {Object} link
 * @throws {Error} 404 - Not found
 */
export const getShortedUri = async (req, res, next) => {
	const { shorted_url } = req.params
	try {
		const link = await Link.findOne({
			shorted_url,
		})

		if (!link) return res.status(404).json({ message: 'Link not found' })

		countVisitor(link)
		res.status(200).json(link)
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}
