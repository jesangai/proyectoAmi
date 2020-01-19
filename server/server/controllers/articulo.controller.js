const Articulo = require('../models/articulo');

const articuloCtrl = {};

articuloCtrl.getArticulos = async (req, res, next) => {
    const articulos = await Articulo.find();
    res.json(articulos);
};

articuloCtrl.createArticulo = async (req, res, next) => {
    const articulo = new Articulo({
        name: req.body.name,
        detalle: req.body.detalle,
        resumen: req.body.resumen,
<<<<<<< HEAD
        exp_articulo: req.body.exp_articulo
=======
        exp_articulo: req.body.exp_articulo,
        idley: req.body.idley
>>>>>>> 455129988dfadd76e4e14dc4c283ff146448c87e
        
    });
    await articulo.save();
    res.json({status: 'Articulo creada'});
};

articuloCtrl.getArticulo = async (req, res, next) => {
    const { id } = req.params;
    const articulo = await Articulo.findById(id);
    res.json(articulo);
};

articuloCtrl.editArticulo = async (req, res, next) => {
    const { id } = req.params;
    const articulo = {
        name: req.body.name,
        detalle: req.body.detalle,
        resumen: req.body.resumen,
<<<<<<< HEAD
        exp_articulo: req.body.exp_articulo
=======
        exp_articulo: req.body.exp_articulo,
        idley: req.body.idley
>>>>>>> 455129988dfadd76e4e14dc4c283ff146448c87e
    };
    await Articulo.findByIdAndUpdate(id, {$set: articulo}, {new: true});
    res.json({status: 'Articulo Actualizada'});
};

articuloCtrl.deleteArticulo = async (req, res, next) => {
    await Articulo.findByIdAndRemove(req.params.id);
    res.json({status: 'Articulo Eliminada'});
};

<<<<<<< HEAD
=======
articuloCtrl.getArticuloley = async (req, res) => {
    const { id } = req.params;
    const articulo = await Articulo.find({ 'ley': id});
    res.json(articulo);
}

>>>>>>> 455129988dfadd76e4e14dc4c283ff146448c87e
module.exports = articuloCtrl;