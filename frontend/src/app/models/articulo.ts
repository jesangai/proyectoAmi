export class Articulo {

    constructor(_id = '', name = '', detalle = '', resumen = '', estado = '', exp_articulo = '',  idley= '') {
        this._id = _id;
        this.name = name;
        this.detalle = detalle;
        this.resumen = resumen;
        this.estado = estado;
        this.exp_articulo = exp_articulo;
        this.idley = idley;
    }

    _id: string;
    name: string;
    detalle: string;
    resumen: string;
    estado: string;
    exp_articulo: string;
    idley : string;

}