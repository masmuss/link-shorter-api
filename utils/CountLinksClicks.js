import Link from '../models/Link.js'

/**
 * @description Count all visitor of all links
 * @route GET /stats/visitors
 * @returns {Object} links
 */
export const countLinksClicks = async (req, res) => {
	try {
		const links = await Link.find()
		let total = 0
		links.forEach((link) => {
			total += link.visitor_count
		})
		res.status(200).json({ total })
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}
