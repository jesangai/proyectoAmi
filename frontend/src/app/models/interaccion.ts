import { Comentario } from "./comentario";

export class Interaccion {

    constructor(_id = '', idciudadano = '', idarticulo = '', idcomentario = '', likes = '', dislikes = '', comentariostotales = '', compartidastotales = '') {
        this._id = _id;
        this.idciudadano = idciudadano;
        this.idarticulo = idarticulo;
        this.idcomentario = idcomentario
        this.likes = likes;
        this.dislikes = dislikes;
        this.comentariostotales = comentariostotales;
        this.compartidastotales = compartidastotales;
        
    }

    _id: string;
    idciudadano: string;
    idarticulo: string;
    idcomentario: string;
    likes: string;
    dislikes: string;
    comentariostotales: string;
    compartidastotales: string;
  
}
