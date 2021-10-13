const router = require('express').Router();
const toyService = require('../services/toyService');
const { isAuth } = require('../middlewares/authmiddleware');
const { isOwnToy } = require('../middlewares/toyAuthMiddleware')


const getCreateToyView = (req, res) => {
    res.render('toy/create');
}

const createToy = async(req, res) => {
    let { name, description, imageUrl, age } = req.body;

    try {
        await toyService.create(name, description, imageUrl, age, req.user._id);
        res.redirect('/');
    } catch (err) {
        res.status(400).send(err.message).end();
    }
}
const toyDetails = async (req, res) => {
    let toy = await toyService.getOne(req.params.toyId);

    // try{
        let isOwn = toy.creator == req.user._id;
        res.render('toy/details', { ...toy, isOwn });
    // } catch (err) {
        // console.log(err.message);
        // res.redirect('/');
    // }
}

const renderEditToyView = async (req, res) => {
    // let toy = await toyService.getOne(req.params.toyId);
    // console.log(req);
    res.render('toy/edit', req.toy);
}

const postEditToyView = async (req, res) => {
    let { name, description, imageUrl, age } = req.body;

    await toyService.updateOne(req.params.toyId, {name, description, imageUrl, age});

    res.redirect(`/toy/${req.params.toyId}`);
};

const renderDeleteCubeView = async (req, res) => {
    res.render('toy/delete', req.toy);
};
 
router.get('/create', isAuth, getCreateToyView);
router.post('/create', isAuth, createToy);
router.get('/:toyId', toyDetails);
router.get('/:toyId/edit', isAuth, isOwnToy, renderEditToyView);
router.post('/:toyId/edit', isAuth, isOwnToy,  postEditToyView);
router.get('/:toyId/delete', isAuth, isOwnToy, renderDeleteCubeView);

module.exports = router;