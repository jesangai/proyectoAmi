const express = require('express');
const router = express.Router();

const articulo = require('../controllers/articulo.controller');

router.get('/', articulo.getArticulos);
router.post('/', articulo.createArticulo);
router.get('/:id', articulo.getArticulo);
router.put('/:id', articulo.editArticulo);
router.put('/updateestado/:id', articulo.updateEstado);
router.delete('/:id', articulo.deleteArticulo);
router.get('/buscar/:id', articulo.getArticuloley);
router.get('/estado/:id', articulo.getArticuloEstado);

module.exports = router;