const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const manufacturerSchema = new Schema({
	user_id: { type: Schema.Types.ObjectId, ref: 'User' },
	name_of_business: { type: String, required: true },
	address: { type: String, required: true },
	city: { type: String, required: true },
	state: { type: String, required: true },
	country: { type: String, required: true },
	zip_code: { type: Number, required: true },
	logo_path: { type: String, required: true },
	service: { type: String, required: true }
});

const Manufacturer = mongoose.model('Manufacturer', manufacturerSchema);

module.exports = Manufacturer;