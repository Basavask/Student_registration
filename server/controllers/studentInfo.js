const StudentInfo = require('../models/studentInfo');

exports.saveStudentInfo = (req, res, next) => {
    const user = new StudentInfo(req.body.username, req.body.dob, req.body.email, req.body.nationality, req.body.gender);
    user.saveStudentInfo().then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log('err...', err);
    });
};

exports.fetchAllStudents = (req, res, next) => {
    StudentInfo.fetchAllStudents().then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log('err...', err);
    });
};