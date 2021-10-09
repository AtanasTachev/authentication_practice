const express = require('express');

const homeController = require('./controllers/homeController')
const toyController = require('./controllers/toyController');
const router = express.Router();

router.use(homeController)
router.use('/toy', toyController);

router.use('*', (req, res) => {
    res.status(404).render('404');
})


module.exports = router;