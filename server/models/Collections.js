const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const collectionsSchema = new Schema({
	user_id: { type: Schema.Types.ObjectId, ref: 'User' },
	name: { type: String, require: true },
  about: { type: String, require: true }, 
  launchDate: { type: String, require: true },
  fabrics: { type: Array, require: true }
});

const Collection = mongoose.model('Collection', collectionsSchema);

module.exports = Collection;