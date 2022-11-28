import Link from '../models/Link.js'
import mongoose from 'mongoose'
import { countVisitor } from '../middleware/CountVisitor.js'

/**
 * @description Get all links
 * @route GET /
 * @returns {Array} links
 * @throws {Error} 404 - Not found
 */
export const getAll = async (req, res) => {
	try {
		const links = await Link.find()
		res.status(200).json(links)
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

/**
 * @description Create a link
 * @route GET /
 * @returns {Object} link
 * @throws {Error} 404 - Not found
 */
export const create = async (req, res) => {
	const link = req.body
	const newLink = new Link(link)
	try {
		await newLink.save()
		res.status(201).json(newLink)
	} catch (error) {
		res.status(409).json({ message: error.message })
	}
}

/**
 * @description Get a link
 * @route GET /:id
 * @returns {Object} link
 * @throws {Error} 404 - Not found
 */
export const findOne = async (req, res) => {
	const { id } = req.params
	try {
		if (!mongoose.Types.ObjectId.isValid(id))
			return res.status(404).send(`No link with id: ${id}`)

		const link = await Link.findById(id)
		res.status(200).json(link)
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
}

/**
 * @description Update a link
 * @route PATCH /:id
 * @returns {Object} link
 * @throws {Error} 404 - Not found
 */
export const update = async (req, res) => {
	const { id } = req.params
	const link = req.body

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send(`No link with id: ${id}`)

	const updated = await Link.findByIdAndUpdate(id, link, {
		new: true,
	})
	res.json(updated)
}

/**
 * @description Delete a link
 * @route DELETE /:id
 * @returns {Object} link
 * @throws {Error} 404 - Not found
 */
export const destroy = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send(`No link with id: ${id}`)

	await Link.findByIdAndRemove(id)

	res.json({ message: 'Link deleted successfully.' })
}
