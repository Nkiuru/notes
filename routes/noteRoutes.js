'use strict';
const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note');

router.get('/my', noteController.getMyNotes);

router.get('/all', noteController.getAllNotes);

router.post('/', noteController.addNote)


module.exports = router;