const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Designer = require('../models/Designer');
const Collection = require('../models/Collections');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname)
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

router.get('/list-designers', (req, res, next) => {
    Designer.find({"user_id": req.user._id}).populate('designers')
        .then(allDesigners => {
            res.json(allDesigners);
        })
        .catch(err => {
            res.json(err);
        })
});

router.post('/create-designer', upload.fields([{name: 'logo', maxCount: 1}, { name: 'image_gallery', maxCount: 10}]), (req, res, next) => {
    const images = [];
    if(req.files.image_gallery) {
        req.files.image_gallery.forEach(function(item) {
            images.push(item.path);
        })        
    }

    Designer.create({
        user_id: req.user._id,
        brand_name: req.body.brand_name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip_code: req.body.zip_code,
        country: req.body.country,
        design_inspiration: req.body.design_inspiration,
        product_types: req.body.product_types,
        images: images,
        fabric_types: req.body.fabric_types,
        category_types: req.body.category_types,
        logo_path: req.files.logo[0].path
    }).then(response => { res.json(response) }).catch(err => { err.json(err) });
});

router.post('/create-collection', (req, res, next) => {
    Collection.create({
        user_id: req.user._id,
        name: req.body.collectionName,
        about: req.body.aboutCollection,
        launchDate: req.body.launchdate,
        fabrics: req.body.fabrics
    }).then(response => { res.json(response)}).catch(err => { err.json(err) });
});

router.get('/single-designer', (req, res, next) => {
    Designer.findOne({ user_id:  req.user._id })
    .then((o) => {res.json(o)}).catch((e) => { res.json(e) })
})

router.get('/collections', (req, res, next) => {
    Collection.find({ user_id: req.user._id })
    .then((o) => {res.json(o)}).catch((e) => { res.json(e) })
})
module.exports = router;