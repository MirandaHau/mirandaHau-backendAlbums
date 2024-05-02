const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const comentarioSchema = new mongoose.Schema({
    texto: {
        type: String,
        required: true
    },
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Album',
        required: true
    },
    creadoEn: {
        type: Date,
        default: Date.now
    }
});

const usuarioSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    comentarios: [comentarioSchema]
});

// HASH
usuarioSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;