const userController = {};

userController.getUsers = (req, res) => res.json({ message: [] })

userController.createUsers = (req, res) => res.json({ message: 'User Saved' })

userController.deleteUser = (req, res) => res.json({ message: 'User Removed' })

module.exports = userController;
