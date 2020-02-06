const Articulo = require('../models/articulo');
const Ley = require('../models/ley');
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
        estado: req.body.estado,
        exp_articulo: req.body.exp_articulo,
        idley: req.body.idley

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
        estado: req.body.estado,
        exp_articulo: req.body.exp_articulo,
        idley: req.body.idley

    };
    await Articulo.findByIdAndUpdate(id, {$set: articulo}, {new: true});
    res.json({status: 'Articulo Actualizada'});
};

articuloCtrl.deleteArticulo = async (req, res, next) => {
    await Articulo.findByIdAndRemove(req.params.id);
    res.json({status: 'Articulo Eliminada'});
};


articuloCtrl.getArticuloley = async (req, res, next) => {
    const { id } = req.params;
    const ley = await Ley.find({ 'nombre': id});
    const articulo = await Articulo.findById(ley.idley);

    const data = [await ley, await articulo]; 

    res.json(data);
}

articuloCtrl.getArticuloEstado = async (req, res, next) => {
    const { id } = req.params;
    const estado = await Articulo.find({ 'estado': id}).select();
    res.json(estado);
}

articuloCtrl.updateEstado = async (req, res, next) => {
    const { id } = req.params;
    const articulo = {
        estado: req.body.estado      
    };
    await Articulo.findByIdAndUpdate(id, {$set :
          {			
              "estado" : articulo.estado,			
          }}, {new: true});
    res.json({status: 'Estado Actualizado'});
  };

module.exports = articuloCtrl;