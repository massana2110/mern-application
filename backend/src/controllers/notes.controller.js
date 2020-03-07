const notesController = {};

const Note = require('../models/Note');

notesController.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes)
}

notesController.createNotes = (req, res) => {
    const { title, content, date, author } = req.body
    const newNote = new Note({
        title: title,
        content: content,
        date: date,
        author: author
    })
    console.log(newNote);
    res.json({ message: 'Note Saved' })
}

notesController.getOneNote = (req, res) => res.json({ title: 'absabsab' })

notesController.updateNote = (req, res) => res.json({ message: 'Note Updated' })

notesController.deleteNote = (req, res) => res.json({ message: 'Note Removed' })

module.exports = notesController;
