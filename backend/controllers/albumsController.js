const Album = require('../models/albumsModel');

const getAlbums = async (req, res) => {
    try {
        const albums = await Album.find();
        res.status(200).json(albums);
    } catch (error) {
        res.status(500).json({ message: "Error al recuperar los álbumes: " + error.message });
    }
};

const getAlbumById = async (req, res) => {
    try {
        const album = await Album.findById(req.params.id);
        if (album) {
            res.status(200).json(album);
        } else {
            res.status(404).json({ message: 'Álbum no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al buscar el álbum: " + error.message });
    }
};

const createAlbum = async (req, res) => {
    const { nombre, artista, genero, duracion, descripcion, plataformas } = req.body;
    const newAlbum = new Album({ nombre, artista, genero, duracion, descripcion, plataformas });
    try {
        const savedAlbum = await newAlbum.save();
        res.status(201).json(savedAlbum);
    } catch (error) {
        res.status(400).json({ message: "Error al crear el álbum: " + error.message });
    }
};

const updateAlbum = async (req, res) => {
    try {
        const updatedAlbum = await Album.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAlbum) {
            return res.status(404).json({ message: 'Álbum no encontrado para actualizar' });
        }
        res.status(200).json(updatedAlbum);
    } catch (error) {
        res.status(400).json({ message: "Error al actualizar el álbum: " + error.message });
    }
};

const deleteAlbum = async (req, res) => {
    try {
        const album = await Album.findByIdAndDelete(req.params.id);
        if (album) {
            res.status(200).json({ message: 'Álbum eliminado' });
        } else {
            res.status(404).json({ message: 'Álbum no encontrado para eliminar' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAlbums,
    getAlbumById,
    createAlbum,
    updateAlbum,
    deleteAlbum
};