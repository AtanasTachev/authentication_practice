const router = require('express').Router();

const toyService = require('../services/toyService');

const getCreateToyView = (req, res) => {
    res.render('toy/create');
}

router.get('/create', getCreateToyView);

module.exports = router;