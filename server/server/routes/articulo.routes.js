const express = require('express');
const router = express.Router();

const articulo = require('../controllers/articulo.controller');

router.get('/', articulo.getArticulos);
router.post('/', articulo.createArticulo);
router.get('/:id', articulo.getArticulo);
router.put('/:id', articulo.editArticulo);
router.delete('/:id', articulo.deleteArticulo);
<<<<<<< HEAD
=======
router.get('/buscar/:id', articulo.getArticuloley);

>>>>>>> 455129988dfadd76e4e14dc4c283ff146448c87e

module.exports = router;