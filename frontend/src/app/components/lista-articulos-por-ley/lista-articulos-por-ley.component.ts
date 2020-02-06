import { Component, OnInit, Input } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { LeyService } from 'src/app/services/ley.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-articulos-por-ley',
  templateUrl: './lista-articulos-por-ley.component.html',
  styleUrls: ['./lista-articulos-por-ley.component.css']
})
export class ListaArticulosPorLeyComponent implements OnInit {
  @Input() articulo : Articulo;
  
 
  constructor(private leyService: LeyService, private router: Router ) { }

  ngOnInit() {

  }
}
