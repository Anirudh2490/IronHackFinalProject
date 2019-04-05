const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductGallery = require('./product-gallery');
const User = require('./User');
const validate = require('mongoose-validator');

const designerSchema = new Schema({
	user_id: { type: Schema.Types.ObjectId, ref: 'User' },
	brand_name: 	{ type: String, require: true },	
	address: { type: String, require: true },
	city: { type: String, require: true },
	state: { type: String, require: true },
	zip_code: { type: Number, require: true },
	country: { type: String, require: true },
	design_inspiration: { type: String, require: true },
	product_types: { type: String, required: true },
	images: { type: Array, required: true },
	logo_path: { type: String, required: true },
	category_types: { type: Array, required: false },
	fabric_types: { type: Array, required: false },
	collections:{ type: Schema.Types.ObjectId, ref: 'Collections' }
}, { timestamps: true });

const Designer = mongoose.model('Designer', designerSchema);

module.exports = Designer;