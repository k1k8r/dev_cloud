const { Schema, model, ObjectId } = require('mongoose');

const PostChema = new Schema({
	user: {
		type: ObjectId,
		ref: 'users'
	},
	text: {
		type: String,
		required: true
	},
	name: {
		type: String
	},
	avatar: {
		type: String
	},
	likes: [
		{
			user: {
				type: ObjectId,
				ref: 'users'
			},

		}
	],
	comments: [
		{
			user: {
				type: ObjectId,
				ref: 'users'
			},
			text: {
				type: String,
				required: true
			},
			name: {
				type: String
			},
			avatar: {
				type: String
			},
		}
	],
	date: {
		type: Date,
		default: Date.now
	}
});


module.exports = model('post', PostChema);