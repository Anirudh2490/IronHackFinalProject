const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');
const Manufacturer = require('./Manufacturer');

const fabricSchema = new Schema({
	user_id: { type: Schema.Types.ObjectId, ref: 'User' },
	fabricType: { type: String, require:false },
	quantity: { type: String, require: false },
	unit_cost: { type: String, require: false },
	deadlinedate: { type: String, require: false },
	description: { type: String, require: false },
	plans: { type: String, require: false },
	availableFrom: { type: Date, default: Date.now },
	availableTill: { type: Date, default: Date.now },
	// man_id: { type: Schema.Types.ObjectId, ref: "Manufacturer" }
});

const Fabric = mongoose.model('Fabric', fabricSchema);

module.exports = Fabric;