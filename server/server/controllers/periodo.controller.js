const Periodo = require('../models/periodo');

const periodoCtrl = {};

periodoCtrl.getPeriodos = async (req, res, next) => {
    const periodos = await  Periodo.find();
    res.json(periodos
        );
};

periodoCtrl.createPeriodo = async (req, res, next) => {
    const periodo = new Periodo({
        periodo: req.body.periodo
    });
    await periodo.save();
    res.json({status: 'Periodo creada'});
};

periodoCtrl.getPeriodo = async (req, res, next) => {
    const { id } = req.params;
    const periodo = await Periodo.findById(id);
    res.json(periodo);
};

periodoCtrl.editPeriodo = async (req, res, next) => {
    const { id } = req.params;
    const periodo = {
        periodo: req.body.periodo
    };
    await Periodo.findByIdAndUpdate(id, {$set: periodo}, {new: true});
    res.json({status: 'Periodo Actualizada'});
};

periodoCtrl.deletePeriodo = async (req, res, next) => {
    await Periodo.findByIdAndRemove(req.params.id);
    res.json({status: 'Periodo Eliminada'});
};

module.exports = periodoCtrl;