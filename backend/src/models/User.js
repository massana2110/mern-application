const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true //Limpia el string dado
    }
}, {
    timestamps: true
})

module.exports = model('User', userSchema)
