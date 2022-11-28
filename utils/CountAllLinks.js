import Link from '../models/Link.js'

/**
 * @description Count all links
 * @route GET /stats/links
 * @returns {Object} links
 */
export const countAllLinks = async (req, res) => {
	try {
		const links = await Link.find()
		res.status(200).json({ links: links.length })
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}
