const Ley = require('../models/ley');

const leyCtrl = {};

leyCtrl.getLeyes = async (req, res, next) => {
    const leyes = await Ley.find();
    res.json(leyes);
};

leyCtrl.createLey = async (req, res, next) => {
    const ley = new Ley({
        estado: req.body.estado,
        nombre: req.body.nombre,
        cod_decreto: req.body.cod_decreto,
        fecha_publicacion: req.body.fecha_publicacion,
        descripcion: req.body.descripcion,
        proponente: req.body.proponente
    });
    await ley.save();
    res.json({status: 'Ley creada'});
};

leyCtrl.getLey = async (req, res, next) => {
    const { id } = req.params;
    const ley = await Ley.findById(id);
    res.json(ley);
};

leyCtrl.editLey = async (req, res, next) => {
    const { id } = req.params;
    const ley = {
        estado: req.body.estado,
        nombre: req.body.nombre,
        cod_decreto: req.body.cod_decreto,
        fecha_publicacion: req.body.fecha_publicacion,
        descripcion: req.body.descripcion,
        proponente: req.body.proponente
    };
    await Ley.findByIdAndUpdate(id, {$set: ley}, {new: true});
    res.json({status: 'Ley Actualizada'});
};

leyCtrl.deleteLey = async (req, res, next) => {
    await Ley.findByIdAndRemove(req.params.id);
    res.json({status: 'Ley Eliminada'});
};



module.exports = leyCtrl;