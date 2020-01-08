export class Articulo {

    constructor(_id = '', name = '', detalle = '', resumen = '', exp_articulo = '') {
        this._id = _id;
        this.name = name;
        this.detalle = detalle;
        this.resumen = resumen;
        this.exp_articulo = exp_articulo;
    }

    _id: string;
    name: string;
    detalle: string;
    resumen: string;
    exp_articulo: string;
}