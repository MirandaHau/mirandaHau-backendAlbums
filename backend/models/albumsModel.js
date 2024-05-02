const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    nombre: { type: String,
        required: true },

    artista: { type: String,
        required: true },

    genero: { type: String,
        required: true },

    duracion: { type: String,
        required: true },

    descripcion: { type: String },

    plataformas: {
        spotify: String,
        appleMusic: String,
        genius: String
    }
});

const Album = mongoose.model('Album', albumSchema);

module.exports = Album;