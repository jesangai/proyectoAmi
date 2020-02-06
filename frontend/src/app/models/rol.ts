export class Rol {

    constructor(_id = '', idpersona = '',descripcion = '') {
        this._id = _id;
        this.idpersona = idpersona;
        this.descripcion = descripcion;
        
    }

    _id: string;
    idpersona: string;
    descripcion: string;
    
}
