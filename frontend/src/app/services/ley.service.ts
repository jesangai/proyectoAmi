import { Injectable } from '@angular/core';
import { Ley } from '../models/ley';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class LeyService {
  selectedLey:Ley;
  leyes:Ley[]
  readonly URL_API = 'http://68.66.207.7:3000/api/ley';
 //readonly URL_API = 'http://localhost:3000/api/ley';

  constructor(public http:HttpClient) {
this.selectedLey=new Ley();
   }
   postLey(ley: Ley) {
    return this.http.post(this.URL_API, ley);
  }
  getLeyes():Observable<Ley[]> {
    //return this.http.get(this.URL_API);
     return this.http.get<Ley[]>(`${this.URL_API}`);
  }

  
  getLey<T>(_id:string):Observable<T>{
    console.log('id ley:'+_id);
     return this.http.get<T>( `${this.URL_API}` + `/${_id}`);
  }

  putLey(ley: Ley) {
    return this.http.put(this.URL_API + `/${ley._id}`, ley);
  }

  deleteLey(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  getLeyArticulo(articulo: Articulo) {
    return this.http.get(this.URL_API + `/articulobuscar/${articulo._id}`);  }
    

  getLeyPorEstado(estado:string):Observable<Ley[]>{
      var pathMethodoEstado='/estado';
      return this.http.get<Ley[]>( `${this.URL_API}` + pathMethodoEstado + `/${estado}`);
     
  }

  getArticuloPorLey(idLey:string):Observable<Articulo[]>{
    var pathLeyPorArticulo='/articulo';
    console.log('path:'+`${this.URL_API}` + pathLeyPorArticulo + `/${idLey}`);
    return this.http.get<Articulo[]>( `${this.URL_API}` + pathLeyPorArticulo + `/${idLey}`);
  }

  getLeyPorNombre(nombre:string):Observable<Ley[]>{
    var pathMethodoNombre='/nombre';
    return this.http.get<Ley[]>( `${this.URL_API}` + pathMethodoNombre + `/${nombre}`);
  }
  
  getLeyPorPeriodo(periodo: string):Observable<Ley[]>{
    var pathLeyPorPeriodo = '/periodo';
    return this.http.get<Ley[]>( `${this.URL_API}` + pathLeyPorPeriodo + `/${periodo}`);
  }

}