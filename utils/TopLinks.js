import Link from '../models/Link.js'

/**
 * @description Get top links
 * @route GET /stats/top/:limit
 * @returns {Array} links
 */
export const getTopLinks = async (req, res) => {
	try {
		const { limit } = req.params
		const links = await Link.find().sort({ visitor_count: -1 }).limit(limit)

		res.status(200).json({ links })
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}
