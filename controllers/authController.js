const router = require('express').Router();
const authServise = require('../services/authService');
const { TOKEN_COOKIE_NAME } = require('../constants');

router.get('/register', (req, res) => {
    res.render('auth/register');
})

router.post('/register', async (req, res) => {
    try {
        let { username, password, repeatPassword } = req.body;
        await authServise.register(username, password, repeatPassword);

        res.redirect('/login');
    }catch (err) {
        res.status(400).send(err);
    }
});

router.get('/login', (req, res) => {
    res.render('auth/login');
})

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    let user = await authServise.login(username, password);

    if(!user) {
        return res.redirect('/404');
    }
    let token = await authServise.createToken(user);

    res.cookie(TOKEN_COOKIE_NAME, token, {
        httpOnly: true,
    }); 
    res.redirect('/');
});

module.exports = router;