const express = require('express');
const router = express.Router();

const interaccion = require('../controllers/interaccion.controller');

router.get('/', interaccion.getInteraccions);
router.post('/', interaccion.createInteraccion);
router.get('/:id', interaccion.getInteraccion);
router.get('/articulo/:id', interaccion.getArticuloDatos);
router.get('/ciudadano/:id', interaccion.getCiudadanoDatos);
router.get('/comentario/:id', interaccion.getComent);
router.get('/comentarioart/:id', interaccion.getComentArt);
router.put('/:id', interaccion.editInteraccion);
router.delete('/:id', interaccion.deleteInteraccion);

module.exports = router;