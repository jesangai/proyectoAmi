const express = require('express');
const router = express.Router();

const voto = require('../controllers/votos.controller');

router.get('/', voto.getVotos);
router.post('/', voto.createVoto);
router.get('/:id', voto.getVoto);
router.get('/contador/:id', voto.getContVotos);
router.get('/contaarticulo/:id', voto.getVotArt);
router.put('/:id', voto.editVoto);
router.delete('/:id', voto.deleteVoto);

module.exports = router;