const mongoose = require('mongoose');
const { Schema } = mongoose;

const leySchema = new Schema({
<<<<<<< HEAD
    idarticulo: { type: String, required: false},
=======
>>>>>>> 455129988dfadd76e4e14dc4c283ff146448c87e
    estado: { type: String, required: false},
    periodo: { type: String, required: false},
    nombre: { type: String, required: false},
    cod_decreto: { type: String, required: false},
    fecha_publicacion: { type: String, required: false},
    descripcion: { type: String, required: false},
    proponente: { type: String, required: false}
});

module.exports = mongoose.model('Ley', leySchema);