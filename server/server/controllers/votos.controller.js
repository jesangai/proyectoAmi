const Voto = require('../models/votos');
const Articulo = require('../models/articulo');

const votoCtrl = {};

votoCtrl.getVotos = async (req, res, next) => {
    const votos = await Voto.find();
    res.json(votos);
};

votoCtrl.createVoto = async (req, res, next) => {
    const voto = new Voto({
        iduser: req.body.iduser,
        idarticulo: req.body.idarticulo,
        fechavotacion: req.body.fechavotacion,
        voto: req.body.voto,
        ciudadano: req.body.ciudadano
    });
    await voto.save();
    res.json({status: 'Voto creado'});
};

votoCtrl.getVoto = async (req, res, next) => {
    const { id } = req.params;
    const voto = await Voto.findById(id);
    res.json(voto);
};

votoCtrl.editVoto = async (req, res, next) => {
    const { id } = req.params;
    const voto = {
        iduser: req.body.iduser,
        idarticulo: req.body.idarticulo,
        fechavotacion: req.body.fechavotacion,
        voto: req.body.voto,
        ciudadano: req.body.ciudadano
    };
    await Voto.findByIdAndUpdate(id, {$set: voto}, {new: true});
    res.json({status: 'Voto Actualizada'});
};

votoCtrl.deleteVoto = async (req, res, next) => {
    await Voto.findByIdAndRemove(req.params.id);
    res.json({status: 'Voto Eliminada'});
};

votoCtrl.getContVotos = async (req, res, next)=> {
    const { id } = req.params;
    const votos = await Voto.find({ 'voto': id}).select({voto: 1});
    res.json(votos);
}

votoCtrl.getVotArt = async (req, res, next)=> {
    const { id } = req.params;
    const articulo = await Articulo.find({ '_id': id});
    const votos = await Voto.find({ 'idarticulo': id}).select({voto: 1});
    const datavot = await [await articulo, await votos];
    res.json(datavot);
}

module.exports = votoCtrl;