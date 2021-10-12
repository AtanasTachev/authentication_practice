const User = require('../models/User');
const { jwtSign } = require('../utils/jwtUtil');
const { SECRET } = require('../constants');

exports.register = function (username, password, repeatPassword) {
    return User.create({ username, password });
};

exports.login = function (username, password) {
    return User.findByUsername(username)
        .then(user => Promise.all([user.validatePassword(password), user]))
        .then(([isValid, user]) => {
            if(isValid) {
                return user;
            } else {
                throw {message: 'Username or Password are invalid'}
            }
        })
        .catch(() => null);

    }
    
    exports.createToken = function(user) {
        let payload = {
            _id: user._id,
            username: user.username
        }
        return jwtSign(payload, SECRET);     
    };