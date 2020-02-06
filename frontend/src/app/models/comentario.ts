export class Comentario {

    constructor(_id = '', like = '',dislike = '',comentarios = '',idarticulo = '') {
        this._id = _id;
        this.like = like;
        this.dislike = dislike;
        this.comentarios = comentarios; 
        this.idarticulo = idarticulo;

    }

    _id: string;
    like: string;
    dislike: string;
    comentarios:string;
    idarticulo:string;

  }