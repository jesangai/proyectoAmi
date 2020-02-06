import { Comentario } from "./comentario";

export class Interaccion {

    constructor(_id = '', idciudadano = '', idarticulo = '', idcomentario = '', dislikes = '', likes = '', comentariostotales = '', compartidastotales = '') {
        this._id = _id;
        this.idciudadano = idciudadano;
        this.idarticulo = idarticulo;
        this.idcomentario = idcomentario
        this.dislikes = dislikes;
        this.likes = likes;
        this.comentariostotales = comentariostotales;
        this.compartidastotales = compartidastotales;
        
    }

    _id: string;
    idciudadano: string;
    idarticulo: string;
    idcomentario: string;
    dislikes: string;
    likes: string;
    comentariostotales: string;
    compartidastotales: string;
  
}
