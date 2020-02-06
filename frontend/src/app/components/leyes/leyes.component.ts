import { Component, OnInit } from '@angular/core';
import { LeyService } from '../../services/ley.service';
import { Ley } from '../../models/ley';
import {Router} from "@angular/router"

@Component({
  selector: 'app-leyes',
  templateUrl: './leyes.component.html',
  styleUrls: ['./leyes.component.css']
})

export class LeyesComponent implements OnInit {
  leyes: Ley[];
  periodoFilter: string;
  nombreLeyFilter: string;
  selectedStatus : string;
  selectedPeriodo: string;
  leyEstados: any[] = 
                  [{id: 'Todos', name:'Todos'},
                   {id: 'Enviado', name:'Enviado'},
                   {id: 'Aprobado', name:'Aprobado'},
                   {id: 'EnProceso', name:'En proceso'},
                   {id: 'Rechazado', name:'Rechazado'}
                  ];


 constructor(private leyService:LeyService , private router: Router) { }

 ngOnInit() {
    this.getLeyes();   
 }

 getLeyes(){
   this.leyService.getLeyes().subscribe(obtenerLeyes => {
     this.leyes = obtenerLeyes;
  });

 }
 
 getLeyesPorEstado(){
   if (this.selectedStatus=='Todos'){
       this.getLeyes();
   }else
   {
    this.leyService.getLeyPorEstado(this.selectedStatus).subscribe(objLeyes =>{
     var obj = JSON.stringify(objLeyes);
     var objString=obj.substring(1,obj.length -1 );
     this.leyes = JSON.parse( objString);
    })    
   }

 }

 getLeyesPorNombre(){
  this.leyService.getLeyPorNombre(this.nombreLeyFilter).subscribe(objLeyes =>{
    var obj = JSON.stringify(objLeyes);
    var objString=obj.substring(1,obj.length -1 );
    this.leyes = JSON.parse( objString);
  })
}

getLeyesPorPeriodo(){
  console.log('getLeyesPorPeriod');
  if (this.selectedPeriodo=='Todos'){
      this.getLeyes();
  }else
  {
    this.leyService.getLeyPorPeriodo(this.selectedPeriodo).subscribe(objLeyes =>{
      this.leyes = objLeyes
    })

  }
}

selectOption(idOptionSelected:string){
  this.selectedStatus = idOptionSelected;
}

putSelectedPeriodo(periodo:string){
  this.selectedPeriodo = periodo
}

 buscar(){     
  if (this.selectedStatus){
    this.getLeyesPorEstado();
    this.selectedPeriodo=undefined
    this.nombreLeyFilter=''
  }

  if(this.selectedPeriodo){
    this.getLeyesPorPeriodo();
    this.selectedStatus=undefined
    this.nombreLeyFilter=''
  }

  if (this.nombreLeyFilter!=''){
    this.getLeyesPorNombre();
    this.selectedStatus=undefined
    this.selectedPeriodo=undefined
  }
}

}