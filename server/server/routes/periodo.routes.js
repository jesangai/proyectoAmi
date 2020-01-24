const express = require('express');
const router = express.Router();

const periodo = require('../controllers/periodo.controller');

router.get('/', periodo.getPeriodos);
router.post('/', periodo.createPeriodo);
router.get('/:id', periodo.getPeriodo);
router.put('/:id', periodo.editPeriodo);
router.delete('/:id', periodo.deletePeriodo);


module.exports = router;