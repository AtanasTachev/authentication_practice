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

const search = async (req, res) => {
    let { search, from, to } = req.query;

    let toys = await toyService.search(search, form, to);

    res.render('index', {
        title: 'SEARCH',
        search,
        from,
        to,
        toys
    })
}


router.get('/', home);
router.get('/about', about)
router.get('/search', search)

module.exports = router;