const Toy = require('../models/Toy');

const getAll = () => Toy.find({}).lean();

const getOne = (id) => Toy.findById(id).lean();

const create = (name, description, imageUrl, age) => {
    let toy = new Toy ({
        name, 
        description, 
        imageUrl, 
        age
    });
    
    return toy.save();
}

const toyService = {
    getAll,
    getOne,
    create,
}

module.exports = toyService;