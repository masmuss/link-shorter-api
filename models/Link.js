
import mongoose from 'mongoose'

const link = mongoose.Schema(
	{
		shorted_url: {
			type: String,
			required: true,
			unique: true,
		},
		original_url: {
			type: String,
			required: true,
		},
		visitor_count: {
			type: Number,
			required: false,
			default: 0,
		},
	},
	{
		timestamps: true,
	},
)

export default mongoose.model('Link', link)
