const router = require('express').Router();
const authServixe = require('../services/authService');
const { TOKEN_COOKIE_NAME } = require('../constants');

router.get('/register', (req, res) => {
    res.render('auth/register');
})

router.get('/login', (req, res) => {
    res.render('auth/login');
})

module.exports = router;