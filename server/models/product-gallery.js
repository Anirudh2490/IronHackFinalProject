const mongoose = required('mongoose');
const Schema = mongoose.Schema;

const productGallery = new Schema({
	file_name: String,
	contentType: String,
	upload_date: Timestamp,
	meta_data: String
});

const ProductGallery =  mongoose.model('ProductGallery', productGallery);

module.exports = ProductGallery;