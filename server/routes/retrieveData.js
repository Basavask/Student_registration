
const express = require('express');
const router = express.Router();

//-----controllers ----------------
const userController = require('../controllers/users');
const studentInfoController = require('../controllers/studentInfo');

//-----------routes------------------------
router.get('/fetchAllUsers', userController.fetchAllUsers);
router.post('/fetchSingleUser', userController.fetchSingleUser);
router.post('/saveStudentInfo', studentInfoController.saveStudentInfo);
router.get('/fetchAllStudents', studentInfoController.fetchAllStudents);

//----------exports--------------------------------
module.exports = router;