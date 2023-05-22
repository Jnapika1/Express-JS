

const express = require('express');

const successComtroller = require('../controllers/contactus');

const router = express.Router();

router.post('/success', successComtroller.postSuccess);

module.exports=router;