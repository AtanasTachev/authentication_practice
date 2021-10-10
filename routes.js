const express = require('express');

const homeController = require('./controllers/homeController')
const toyController = require('./controllers/toyController');
const router = express.Router();
const authController = require('./controllers/authController')

router.use(homeController)
router.use('/toy', toyController);
router.use(authController);

router.use('*', (req, res) => {
    res.status(404).render('404');
})


module.exports = router;