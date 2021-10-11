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

router.get('/create', isAuth, getCreateToyView);
router.post('/create', createToy)

module.exports = router;