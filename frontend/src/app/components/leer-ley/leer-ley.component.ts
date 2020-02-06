import { Component, OnInit, Input } from '@angular/core';
import { LeyService } from '../../services/ley.service';
import { Ley } from '../../models/ley';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../../models/articulo';

@Component({
  selector: 'app-leer-ley',
  templateUrl: './leer-ley.component.html',
  styleUrls: ['./leer-ley.component.css']
})
export class LeerLeyComponent implements OnInit {
  articulos :  Articulo[];
  
  constructor(public leyService: LeyService, public activeRoute: ActivatedRoute) { }


  ngOnInit() {
    console.log(this.activeRoute.snapshot.paramMap.get('id'));
    var _id : string = this.activeRoute.snapshot.paramMap.get('id');

    this.leyService.getLey(_id).subscribe(ley => {
      this.leyService.selectedLey = <Ley> ley;
      
    });
    this.getArticuloPorLey();
  }

  getArticuloPorLey(){
    console.log('id ley:'+ this.leyService.selectedLey._id);
    this.leyService.getArticuloPorLey(this.leyService.selectedLey._id).subscribe(articulos =>{
      console.log(articulos[1]);
      var objArticulos = JSON.stringify(articulos[1]);
      console.log('objArticulos');
      console.log(objArticulos);
      this.articulos = JSON.parse(objArticulos);   
    })
  }
}
