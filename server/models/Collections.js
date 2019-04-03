const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Fabric = require('./Fabric');

const collectionsSchema = new Schema({
	user_id: { type: Schema.Types.ObjectId, ref: 'Fabric' },
	name: String,
    about: String,
    launchDate: String
});

const Collection = mongoose.model('Collection', collectionsSchema);

module.exports = Collection;