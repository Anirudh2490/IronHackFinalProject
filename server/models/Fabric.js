const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const fabricSchema = new Schema({
	user_id: { type: Schema.Types.ObjectId, ref: 'User' },
	fabricType: { type: String, require:true },
	quantity: { type: String, require: true },
	unit_cost: { type: String, require: true },
	deadlinedate: { type: String, require: true },
	description: { type: String, require: true }
});

const Fabric = mongoose.model('Fabric', fabricSchema);

module.exports = Fabric;