import { Component, OnInit, Input } from '@angular/core';
import { LeyService } from '../../services/ley.service';
import { Ley } from '../../models/ley';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leer-ley',
  templateUrl: './leer-ley.component.html',
  styleUrls: ['./leer-ley.component.css']
})
export class LeerLeyComponent implements OnInit {
  
  constructor(public leyService: LeyService, public activeRoute: ActivatedRoute) { }


  ngOnInit() {
    console.log(this.activeRoute.snapshot.paramMap.get('id'));
    var _id : string = this.activeRoute.snapshot.paramMap.get('id');

    this.leyService.getLey(_id).subscribe(ley => {
      this.leyService.selectedLey = <Ley> ley;
      
    });
  }
}
