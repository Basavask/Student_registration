const RegisterUser = require('../models/regiter');

exports.saveUser = (req, res, next) => {
    const user = new RegisterUser(req.body.firstName, req.body.lastName, req.body.userName, req.body.password);
    user.saveUser().then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log('err...', err);
    });
};

exports.fetchAllUsers = (req, res, next) => {
    RegisterUser.fetchAllUsers().then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log('err...', err);
    });
};

exports.fetchSingleUser = (req, res, next) => {
    RegisterUser.fetchSingleUser(req.body.userName).then((result) => {
        if (result !== null) {
            res.status(200).json(result);
        } else {
            res.status(403).json(result);
        }
    }).catch((err) => {
        console.log('err...', err);
    });
};