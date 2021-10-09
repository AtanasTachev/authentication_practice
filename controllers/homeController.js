const express = require ('express');
const toyService = require ('../services/toyService')
const Toy = require ('../models/Toy');

const router = express.Router();

const home = async (req, res) => {
    let toys = await toyService.getAll();

    res.render('index', {toys});
}


router.get('/', home);

module.exports = router;