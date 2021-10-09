const mongoose = require('mongoose');

const toySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type:String,
        maxlength: 150,
        required: true
    },
    imageUrl: {
        type:String,
        required: true,
        validate: [/^https?:\/\//i, 'invalid image url']
    },
    age: {
        type: String,
        required: true
    }
})

toySchema.statics.findByName = function(name) {
    return this.find({name});
};

const Toy = mongoose.model('Toy', toySchema);
module.exports = Toy;