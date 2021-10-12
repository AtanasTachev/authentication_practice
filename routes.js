const express = require('express');

const toyController = require('./controllers/toyController');
const homeController = require('./controllers/homeController')
const authController = require('./controllers/authController')

const router = express.Router();

router.use(homeController)
router.use('/toy', toyController);
router.use(authController);

router.use('*', (req, res) => {
    res.status(404).render('404');
});


module.exports = router;