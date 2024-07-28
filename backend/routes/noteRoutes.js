const express = require('express');
const { getAllNotes, getNote, createNote, updateNote, deleteNote } = require('../controllers/notesController');
const authMiddleware = require('../middlewares/authMiddleware');
const { validateNote, validate } = require('../utils/validators');

const router = express.Router();

router.get('/', authMiddleware, getAllNotes);
router.get('/:id', authMiddleware, getNote);
router.post('/', authMiddleware, validateNote, validate, createNote);
router.put('/:id', authMiddleware, validateNote, validate, updateNote);
router.delete('/:id', authMiddleware, deleteNote);

module.exports = router;
