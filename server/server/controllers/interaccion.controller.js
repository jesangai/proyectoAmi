const Interaccion = require('../models/interaccion.js');
const Ciudadano = require('../models/ciudadano');
const Articulo = require('../models/articulo')
const Comentario = require('../models/comentario')

const interaccionCtrl = {};

interaccionCtrl.getInteraccions = async (req, res, next) => {
    const interaccions = await Interaccion.find();
    res.json(interaccions);
};



interaccionCtrl.createInteraccion = async (req, res, next) => {
    const interaccion = new Interaccion({
        idciudadano: req.body.idciudadano,
        idarticulo: req.body.idarticulo,
        idcomentario: req.body.idcomentario,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        comentariostotales: req.body.comentariostotales,
        compartidastotales: req.body.compartidastotales

        
    });
    await interaccion.save();
    res.json({status: 'Interaccion creada'});
};

interaccionCtrl.getInteraccion = async (req, res, next) => {
    const { id } = req.params;
    const interaccion = await Interaccion.findById(id);
    res.json(interaccion);
};

interaccionCtrl.editInteraccion = async (req, res, next) => {
    const { id } = req.params;
    const interaccion = {
        idciudadano: req.body.idciudadano,
        idarticulo: req.body.idarticulo,
        idcomentario: req.body.idcomentario,
        likes: req.body.likes,
        dislikes: req.body.dislikes,
        comentariostotales: req.body.comentariostotales,
        compartidastotales: req.body.compartidastotales
    };
    await Interaccion.findByIdAndUpdate(id, {$set: interaccion}, {new: true});
    res.json({status: 'Interaccion Actualizada'});
};

interaccionCtrl.deleteInteraccion = async (req, res, next) => {
    await Interaccion.findByIdAndRemove(req.params.id);
    res.json({status: 'Interaccion Eliminada'});
};


interaccionCtrl.getCiudadanoDatos = async (req, res, next) => {
    const { id } = req.params;
    const ciudadano = await Ciudadano.find({'nombre': id}).select({nombre: 1, cedula: 1});
    const interaccion = await Interaccion.find({ 'idciudadano': id});
    const dataciu = [await ciudadano, await interaccion];
    res.json(dataciu);
 }

 interaccionCtrl.getArticuloDatos = async (req, res, next) => {
    const { id } = req.params;
    const art = await Interaccion.find({'idarticulo': id});
    const articulo = await Articulo.find({'name': id}).select();
    const dataart = [await art, await articulo];
    res.json(dataart);
}

interaccionCtrl.getComent =  async (req, res, next) => {
    const { id } = req.params;
    const coment = await Interaccion.find({'idcomentario': id}).select();
    const comentario = await Comentario.find({'comentarios': id});
    const datacom = [await coment, await comentario];
    res.json(datacom);
}

interaccionCtrl.getComentArt =  async (req, res, next) => {
    const { id } = req.params;
    const art = await Articulo.find({'_id': id});
    const comentariodata = await Comentario.find({'idarticulo': id}).select({comentarios: 1});
    res.json(comentariodata);
}




module.exports = interaccionCtrl;