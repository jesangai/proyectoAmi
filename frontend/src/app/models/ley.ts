export class Ley {

    constructor(_id = '', idarticulo= '', estado = '', nombre = '', cod_decreto = '', fecha_publicacion = '', descripcion = '', proponente = '') {
        this._id = _id;
        this.idarticulo = idarticulo;
        this.estado = estado;
        this.nombre = nombre;
        this.cod_decreto = cod_decreto;
        this.fecha_publicacion = fecha_publicacion;
        this.descripcion = descripcion;
        this.proponente = proponente;
    }

    _id: string;
    idarticulo : string;
    estado: string;
    nombre: string;
    cod_decreto: string;
    fecha_publicacion: string;
    descripcion: string;
    proponente: string;
}
