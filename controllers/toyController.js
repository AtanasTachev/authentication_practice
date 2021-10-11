const router = require('express').Router();
const { isAuth } = require('../middlewares/authmiddleware')
const toyService = require('../services/toyService');

const getCreateToyView = (req, res) => {
    res.render('toy/create');
}

const createToy = async(req, res) => {
    let { name, description, imageUrl, age } = req.body;

    try {
        await toyService.create(name, description, imageUrl, age);
        res.redirect('/');
    } catch (err) {
        res.status(400).send(err.message).end();
    }
}
const toyDetails = async (req, res) => {
    let toy = await toyService.getOne(req.params.toyId);
    res.render('toy/details', { ...toy } );
}

router.get('/create', isAuth, getCreateToyView);
router.post('/create', isAuth, createToy);
router.get('/:toyId', toyDetails);

module.exports = router;