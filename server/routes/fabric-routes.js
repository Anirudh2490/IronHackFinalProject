const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Fabric = require('../models/Fabric');

router.get('/list-fabrics', (req, res, next) => {
	Fabric.find().populate('fabrics')
		.then(allFabrics => {
			res.json(allFabrics);
		})
		.catch(err => {
			res.json(err);
		})
});

router.post('/create-fabric', (req, res, next) => {
    Fabric.create({
    		user_id: req.user._id,
        fabricType: req.body.fabricType,
        quantity: req.body.quantity,
        unit_cost: req.body.unit_cost,
        deadlinedate: req.body.deadlinedate,
        description: req.body.description
		})
		.then(response => {res.json(response)})
    .catch(err => {err.json(err)});
});

module.exports = router;
