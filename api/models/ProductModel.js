//Init
var mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;
var Schema = mongoose.Schema;

//Schema
var productSchema = new Schema(
	{
		title: {type: String, required: true, index: true},
		description: {type: String, required: true},
		id: { type: String},
		image: {
			path: {type: String, unique: true},
			extension: {type: String}
		},
		price: {type: Currency, required: true, min: 0},
		reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]
	},
	{
		timestamps: true
	}
);

var Product = mongoose.model('Product', productSchema);

module.exports = Product;