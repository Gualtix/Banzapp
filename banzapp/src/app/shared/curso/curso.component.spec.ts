import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoComponent } from './curso.component';
import { DummyService } from '../../services/dummy.service';
import { HttpClient } from '@angular/common/http';



describe('Pruebas de CursoComponent', () => {
  let component: CursoComponent;
  let fixture: ComponentFixture<CursoComponent>;
  let apiService:DummyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('Debe de regresar un false', () => {
    const ocultar = new CursoComponent(apiService);
    const prueba = ocultar.ocultar(); 
    expect( prueba ).toBe(false);
  });

  it('Debe de regresar un true', () => {
    const mostrar = new CursoComponent(apiService);
    const prueba = mostrar.mostrar(1,17); 
    expect( prueba ).toBe(true);
  });

  it('Debe de regresar un elemento td', () => {
    const curso = new CursoComponent(apiService);
    const elemento = curso.color('017'); 
    // elementotd = ComponentFixture.debugElment.query(Bu.css('.addItem'));
    expect(elemento).toBeFalsy();
  });




});
