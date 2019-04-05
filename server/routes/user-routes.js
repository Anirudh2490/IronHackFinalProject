const express = require('express');
const mongoose = require('mongoose');
const userRoutes = express.Router();
const User = require('../models/User');

const Manufacturer = require('../models/Manufacturer');
const Designer = require('../models/Designer');

userRoutes.get('/users', (req, res, next) => {
	User.find().populate('users')
		.then(allUsers => {
			res.json(allUsers);
		})
		.catch(err => {
			res.json(err);
		});
});

userRoutes.get("/profile", (req, res) => {
	if (req.user.type == "manufacturer") {
		Manufacturer.findOne({ user: req.user._id }).populate("user").then((m) => {
			res.json(m)
		})
	} else {
		Designer.findOne({ user: req.user._id }).populate("user").then((d) => {
			res.json(d)
		})
	}
})

userRoutes.get('/user', (req, res, next) => {
	User.findOne({ _id:  req.user._id }).select("full_name email").exec()
	.then((o) => { res.json(o) })
	.catch((e) => { res.json(e) })
})

module.exports = userRoutes;

