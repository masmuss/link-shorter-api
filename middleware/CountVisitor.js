import Link from '../models/Link.js'
import mongoose from 'mongoose'

/**
 * @description count visitor of a link
 * @route GET /url/:shorted_url
 * @returns {Object} link
 * @throws {Error} 404 - Not found
 */
export const countVisitor = async (req, res) => {
	const { _id } = req
	// return console.log(req, shorted_url)
	if (!mongoose.Types.ObjectId.isValid(_id))
		return res.send(`No link with shorted uri: ${_id}`)

	const link = await Link.findOneAndUpdate(
		{ _id },
		{ $inc: { visitor_count: 1 } },
		{ new: false },
	)
}
