const mongoose = require('mongoose');
const { Schema } = mongoose;

const articuloSchema = new Schema({

    name: { type: String, required: false},
    detalle: { type: String, required: false},
    resumen: { type: String, required: false},
    exp_articulo: { type: String, required: false},
<<<<<<< HEAD
=======
    idley: { type: String, required: false}

>>>>>>> 455129988dfadd76e4e14dc4c283ff146448c87e
    
});

module.exports = mongoose.model('Articulo', articuloSchema);