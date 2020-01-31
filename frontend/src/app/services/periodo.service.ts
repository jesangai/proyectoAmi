import { Injectable } from '@angular/core';
import { Periodo } from '../models/periodo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {


  selectedPeriodo:Periodo;
  periodos:Periodo[]
 readonly URL_API = 'http://68.66.207.7:3000/api/periodo';
 // readonly URL_API = 'http://localhost:3000/api/periodo';

  constructor(public http:HttpClient) {
this.selectedPeriodo=new Periodo();
   }

  postPeriodo(periodo: Periodo) {
    return this.http.post(this.URL_API, periodo);
  }

  getPeriodos() {
    return this.http.get(this.URL_API);
  }

  putPeriodo(periodo: Periodo) {
    return this.http.put(this.URL_API + `/${periodo._id}`, periodo);
  }

  deletePeriodo(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }



}
