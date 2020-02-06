export class Votos {

    constructor(_id = '', iduser = '', idarticulo = '', fechavotacion = '', voto = '', ciudadano = '') {
        this._id = _id;
        this.iduser = iduser;   
        this.idarticulo = idarticulo;
        this.fechavotacion = fechavotacion;
        this.voto = voto;
        this.ciudadano = ciudadano;
    }

    _id: string;
    iduser : string;
    idarticulo : string;
    fechavotacion: string;
    voto: string;
    ciudadano: string;
    
}
