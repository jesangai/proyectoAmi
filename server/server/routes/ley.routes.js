const express = require('express');
const router = express.Router();

const ley = require('../controllers/ley.controller');

router.get('/', ley.getLeyes);
router.post('/', ley.createLey);
router.get('/:id', ley.getLey);
router.put('/:id', ley.editLey);
router.delete('/:id', ley.deleteLey);

module.exports = router;