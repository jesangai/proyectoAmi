export class Ley {

    constructor(_id = '', estado = '', idperiodo = '', nombre = '', cod_decreto = '', fecha_publicacion = '', descripcion = '', proponente = '') {
        this._id = _id;
        this.estado = estado;
        this.idperiodo = idperiodo;
        this.nombre = nombre;
        this.cod_decreto = cod_decreto;
        this.fecha_publicacion = fecha_publicacion;
        this.descripcion = descripcion;
        this.proponente = proponente;
    }

    _id: string;
    estado: string;
    idperiodo: string;
    nombre: string;
    cod_decreto: string;
    fecha_publicacion: string;
    descripcion: string;
    proponente: string;
}
