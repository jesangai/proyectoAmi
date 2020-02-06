const express = require('express');
const router = express.Router();

const ley = require('../controllers/ley.controller');

router.get('/', ley.getLeyes);
router.post('/', ley.createLey);
router.get('/:id', ley.getLey);
router.get('/articulonom/:id', ley.getLeyArticulo);
router.get('/comentario/:id', ley.getComentArt);
router.get('/articulo/:id', ley.getLeyArticuloBuscar);
router.get('/estado/:id', ley.getLeyEstado);
router.get('/periodo/:id', ley.getLeyPeriodo);
router.get('/nombre/:id', ley.getLeyNombre);
router.put('/:id', ley.editLey);
router.delete('/:id', ley.deleteLey);

module.exports = router;