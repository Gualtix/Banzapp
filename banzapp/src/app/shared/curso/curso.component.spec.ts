import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoComponent } from './curso.component';


describe('Pruebas de CursoComponent', () => {
  let component: CursoComponent;
  let fixture: ComponentFixture<CursoComponent>;

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
    const ocultar = new CursoComponent;
    const prueba = ocultar.ocultar(); 
    expect( prueba ).toBe(false);
  });

  it('Debe de regresar un true', () => {
    const mostrar = new CursoComponent;
    const prueba = mostrar.mostrar(); 
    expect( prueba ).toBe(true);
  });

  it('Debe de regresar un elemento td', () => {
    const curso = new CursoComponent;
    const elemento = curso.color('017'); 
    // elementotd = ComponentFixture.debugElment.query(Bu.css('.addItem'));
    expect(elemento).toBeFalsy();
  });



});
