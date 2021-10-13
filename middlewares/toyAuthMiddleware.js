const toyService = require('../services/toyService');

exports.isOwnToy = function(req, res, next) {
    let toy = toyService.getOne(req.params.toyId);

    if(toy.creator == req.user._id) {
        req.toy = toy;
        next();
    } else {
        next('You are not authorised to edit or delete this toy!')
    }
}