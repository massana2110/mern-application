const notesController = {};

notesController.getNotes = (req, res) => res.json({ message: [] })

notesController.createNotes = (req, res) => res.json({ message: 'Note Saved' })

notesController.getOneNote = (req, res) => res.json({ title: 'absabsab' })

notesController.updateNote = (req, res) => res.json({ message: 'Note Updated' })

notesController.deleteNote = (req, res) => res.json({ message: 'Note Removed' })

module.exports = notesController;
