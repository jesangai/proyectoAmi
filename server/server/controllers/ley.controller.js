const Ley = require('../models/ley');
const Articulo = require('../models/articulo');
const Periodo = require('../models/periodo');
const Comentario = require('../models/comentario');

const leyCtrl = {};

leyCtrl.getLeyes = async (req, res, next) => {
    const leyes = await Ley.find();
    res.json(leyes);
};

leyCtrl.createLey = async (req, res, next) => {
    const ley = new Ley({

        estado: req.body.estado,
        idperiodo: req.body.idperiodo,
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
        idperiodo: req.body.idperiodo,
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

leyCtrl.getLeyEstado = async (req, res, next) => {
    const { id } = req.params;
    const estado = await Ley.find({ 'estado': id}).select();

    const datafinal = [await estado];
    res.json(datafinal);
}

leyCtrl.getLeyNombre = async (req, res, next) => {
    const { id } = req.params;
    const nombre = await Ley.find({ 'nombre': {$regex: ".*" + id + ".*"}}).select();
    const dataname = [await nombre];
    res.json(dataname);
}

leyCtrl.getLeyArticulo = async (req, res, next) => {
    const { id } = req.params;
    const ley = await Ley.find({'_id': id});
    const articulo = await Articulo.find({ 'idley': id}).select({name: 1});
    const dataart = [await ley, await articulo];
    res.json(dataart);
}

leyCtrl.getLeyArticuloBuscar = async (req, res, next) => {
    const { id } = req.params;
    const ley = await Ley.find({'_id': id});
    const articulo = await Articulo.find({ 'idley': id});
    const dataart = [await ley, await articulo];
    res.json(dataart);
}

leyCtrl.getLeyPeriodo = async (req, res, next) => {
    const { id } = req.params;
    const periodo = await Periodo.find({'periodo': id}).select({periodo: 1});
    const ley = await Ley.find({ 'idperiodo': periodo[0].id});
    const dataper = [await periodo, await ley];
    res.json(dataper[1]);
}


leyCtrl.getComentArt = async (req, res, next)=> {
    const { id } = req.params;
    const articulo = await Articulo.find({ '_id' : id});
    const comentario = await Comentario.find({'idarticulo': id}).select({comentarios: 1});
    const datacoment = await [await articulo, await comentario];
    res.json(datacoment);

}



module.exports = leyCtrl;