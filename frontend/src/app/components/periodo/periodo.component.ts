import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PeriodoService } from '../../services/periodo.service';
import { Periodo } from '../../models/periodo';

declare var M: any;

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrls: ['./periodo.component.css'],
  providers: [PeriodoService]
})
export class PeriodoComponent implements OnInit {

  constructor(public periodoService: PeriodoService) { }

  ngOnInit() {
    this.getPeriodos();
  }

  addPeriodo(form?: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.periodoService.putPeriodo(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getPeriodos();
          M.toast({ html: 'periodo actualizada' });
        });
    } else {
      this.periodoService.postPeriodo(form.value)
        .subscribe(res => {
          this.getPeriodos();
          this.resetForm(form);
          M.toast({ html: 'periodo Guardado' });
        });
    }

  }

  getPeriodos() {
    this.periodoService.getPeriodos()
      .subscribe(res => {
        this.periodoService.periodos = res as Periodo[];
      });
  }

  editPeriodo(periodo: Periodo) {
    this.periodoService.selectedPeriodo = periodo;
  }

  deletePeriodo(_id: string, form: NgForm) {
    if (confirm('¿Esta seguro de eliminar?')) {
      this.periodoService.deletePeriodo(_id)
        .subscribe(res => {
          this.getPeriodos();
          this.resetForm(form);
          M.toast({ html: 'Eiminado' });
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.periodoService.selectedPeriodo = new Periodo();
    }
  }



}
