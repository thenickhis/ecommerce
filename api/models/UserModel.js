var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
	{
		username: {type: String, required: true, unique: true, index: true},
		password: {type: String, required: true},
		email: {type: String, required: true, unique: true},
		cart: {type: Array}
	},
	{
		timestamps: true
	}
);

var User = mongoose.model('User', productSchema);

module.exports = User;