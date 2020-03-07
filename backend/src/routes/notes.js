const { Router } = require('express');

const {
    getNotes,
    createNotes,
    getOneNote,
    updateNote,
    deleteNote
} = require('../controllers/notes.controller');

const router = Router();

router.get('/', getNotes)

router.post('/', createNotes)

router.get('/:id', getOneNote)

router.put('/:id', updateNote)

router.delete('/:id', deleteNote)


module.exports = router;