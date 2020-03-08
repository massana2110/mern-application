const notesController = {};

const Note = require('../models/Note');

notesController.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes)
}

notesController.createNotes = async (req, res) => {
    const { title, content, date, author } = req.body
    const newNote = new Note({
        title,
        content,
        date,
        author
    })
    await newNote.save();
    res.json({ message: 'Note Saved' })
}

notesController.getOneNote = async (req, res) => {
    const note = await Note.findById(req.params.id)
    res.json(note)
}
notesController.updateNote = async (req, res) => {
    const { title, content, author } = req.body
    await Note.findOneAndUpdate(req.params.id, {
        title,
        author,
        content
    })
    res.json({ message: 'Note Updated' })
}

notesController.deleteNote = async (req, res) => {
    await Note.findOneAndDelete(req.params.id)
    res.json({ message: 'Note Removed' })
}

module.exports = notesController;
