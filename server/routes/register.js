const express = require('express');
const router = express.Router();

//-----controllers ----------------
const userController = require('../controllers/users');

//-----------routes------------------------
router.post('/saveUser', userController.saveUser);

//----------exports--------------------------------
module.exports = router;