const Ciudadano = require('../models/ciudadano');

const ciudadanoCtrl = {};

ciudadanoCtrl.getCiudadanos = async (req, res, next) => {
    const ciudadanos = await Ciudadano.find();
    res.json(ciudadanos);
};

ciudadanoCtrl.createCiudadano = async (req, res, next) => {
    const ciudadano = new Ciudadano({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cedula: req.body.cedula,
        contrasena: req.body.contrasena
    });
    await ciudadano.save();
    res.json({status: 'Ciudadano creada'});
};

ciudadanoCtrl.getCiudadano = async (req, res, next) => {
    const { id } = req.params;
    const ciudadano = await Ciudadano.findById(id);
    res.json(ciudadano);
};

ciudadanoCtrl.editCiudadano = async (req, res, next) => {
    const { id } = req.params;
    const ciudadano = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        cedula: req.body.cedula,
        contrasena: req.body.contrasena
    };
    await Ciudadano.findByIdAndUpdate(id, {$set: ciudadano}, {new: true});
    res.json({status: 'Ciudadano Actualizada'});
};

ciudadanoCtrl.deleteCiudadano = async (req, res, next) => {
    await Ciudadano.findByIdAndRemove(req.params.id);
    res.json({status: 'Ciudadano Eliminada'});
};

ciudadanoCtrl.getCiudadanoApp = async (req, res, next) => {
    const { id } = req.params;
    const data = await Ciudadano.find({ 'cedula': id}).select({cedula: 1, contrasena: 1});

    const dataapp = [await data];
    res.json(dataapp);
};

module.exports = ciudadanoCtrl;