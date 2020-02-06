import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArticulosPorLeyComponent } from './lista-articulos-por-ley.component';

describe('ListaArticulosPorLeyComponent', () => {
  let component: ListaArticulosPorLeyComponent;
  let fixture: ComponentFixture<ListaArticulosPorLeyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaArticulosPorLeyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaArticulosPorLeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
