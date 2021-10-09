const express = require ('express');
const toyService = require ('../services/toyService')
const Toy = require ('../models/Toy');

const router = express.Router();

const home = async (req, res) => {
    let toys = await toyService.getAll();

    res.render('index', {toys});
}

const about = (req, res) => {
    res.render('about');
}


router.get('/', home);
router.get('/about', about)

module.exports = router;