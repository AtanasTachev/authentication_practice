const Toy = require('../models/Toy');

const getAll = () => Toy.find({}).lean();

const getOne = (id) => Toy.findById(id);

const getCreateView = (req, res) => {
    res.render('toy/create');
};

const create = async (req, res) => {
    let {name, description, imageUrl, age} = req.body;

}

const toyService = {
    getAll,
    getOne,
    getCreateView,
    create,
}

module.exports = toyService;