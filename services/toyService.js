const Toy = require('../models/Toy');

const getAll = () => Toy.find({}).lean();

const getOne = (id) => Toy.findById(id);



const toyService = {
    getAll,
    getOne,
}

module.exports = toyService;