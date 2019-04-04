const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Manufacturer = require('../models/Manufacturer');
const multer = require('multer');
const storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, './uploads/')
	},
	filename: function(req, file, cb) {
		cb(null, new Date().toISOString() + file.originalname);
	}
});

const fileFilter = (req, file, cb) => {
	// reject a file
	if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true);
	}else{
		cb(null, false);
	}
};

const upload = multer({
		storage: storage, 
		limits: {
			fileSize: 1024 * 1024 * 5
		},
		fileFilter: fileFilter
	});


router.get('/list-manufacturer', (req, res, next) => {
	Manufacturer.find().select("name_of_business address city state country zip_code logo service ").exec()
		.then(docs => {
				res.json(docs);
		})
		.catch(error => {
			res.json(error);
		});
});

router.post('/create-manufacturer', upload.single('logo'), (req, res, next) => {
	Manufacturer.create({
		user_id: req.user._id,
		name_of_business: req.body.name_of_business,
		address: req.body.address,
		city: req.body.city,
		state: req.body.state,
		country: req.body.country,
		zip_code: req.body.zip_code,
		logo_path: req.file.path,
		service: req.body.service
	})
		.then(response => { res.json(response) })
		.catch(error => { res.json(error) });
});

module.exports = router;
