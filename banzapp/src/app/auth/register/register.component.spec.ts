import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

import { FormBuilder } from '@angular/forms'
import { DummyService } from '../../services/dummy.service';

describe('Formularios', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let componente: RegisterComponent;
  let servicio = new DummyService(null);

  beforeEach(() => {
    componente =  new RegisterComponent();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it('Debe crear el formulario de registro con 4 campos',()=>{
    expect(component.form.contains('nombre')).toBeTruthy();
    expect(component.form.contains('apellido')).toBeTruthy();
    expect(component.form.contains('carnet')).toBeTruthy();
    expect(component.form.contains('carrera')).toBeTruthy();
    
  })

  it('El nombre debe de ser obligatorio',() =>{
      const control = componente.form.get('nombre');
      control.setValue('Eliezer Isai');
      expect(control.valid).toBeTruthy();

  });

  it('El apellido debe de ser obligatorio',() =>{
    const control = componente.form.get('apellido');
    control.setValue('Coronado Morales');
    expect(control.valid).toBeTruthy();

});

it('El carnet debe de ser obligatorio',() =>{
  const control = componente.form.get('carnet');
  control.setValue('200924991');
  expect(control.valid).toBeTruthy();

});

it('La carrera debe de ser obligatorio',() =>{
  const control = componente.form.get('carrera');
  control.setValue('Ing. Ciencias y Sistemas');
  expect(control.valid).toBeTruthy();

});


it('Servicio de Registro',() =>{
  spyOn(servicio, 'registro').and.callFake(()=>{
    return true;
  })
  componente.ngOnInit();
  expect (componente.registro).toBeTrue();
});


it('Validar que las contrasenias sean iguales, true', () => {
  const registro = new RegisterComponent();
  const prueba = registro.secondPassword('1234','1234');
  expect( prueba ).toBeTruthy();
});


it('Validar que las contrasenias sean diferentes, false', () => {
  const registro = new RegisterComponent();
  const prueba = registro.secondPassword('1234','12345');
  expect( prueba ).toBeFalsy();
});


it('Fomulario invalido, debe de retornar un false', () => {
  const registro = new RegisterComponent();
  const fomulario = registro.registrarEstudiante();

  expect( formulario ).toBe(false);
});


});

