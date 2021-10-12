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

const deleteOne = (toyId) => Toy.findOneAndDelete(toyId);

const updateOne = (toyId, toy) => Toy.findOneAndUpdate(toyId, toy, { runValidators: true });

const toyService = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
}

module.exports = toyService;