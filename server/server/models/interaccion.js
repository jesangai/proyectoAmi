const mongoose = require('mongoose');
const { Schema } = mongoose;

const interaccionSchema = new Schema({

    idciudadano: { type: String, required: false},
    idarticulo: { type: String, required: false},
    idcomentario: { type: String, required: false},
    likes: { type: Boolean, required: false},
    dislikes: { type: Boolean, required: false},
    comentariostotales: { type: String, required: false},
    compartidastotales: { type: String, required: false},



});

module.exports = mongoose.model('Interaccion', interaccionSchema);