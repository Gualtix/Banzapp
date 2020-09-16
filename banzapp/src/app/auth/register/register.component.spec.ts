import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

import { FormBuilder } from '@angular/forms'
import { DummyService } from '../../services/dummy.service';
import { observable, Observable } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';


describe('Formularios', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let componente: RegisterComponent;
  let servicio = new DummyService(null);


  beforeEach(() => {
    componente =  new RegisterComponent(servicio);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it('Debe crear el formulario de registro con 5 campos, nombre, apellido, carnet, carrera, password',()=>{
    expect(componente.form.contains('nombre')).toBeTruthy();
    expect(componente.form.contains('apellido')).toBeTruthy();
    expect(componente.form.contains('carnet')).toBeTruthy();
    expect(componente.form.contains('carrera')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
    
  })

  it('EL nombre no contiene nada, retorna falso',() =>{
    const control = componente.form.get('nombre');
    control.setValue('');
    expect(control.valid).toBeFalsy();
});

  it('El nombre debe de ser obligatorio',() =>{
      const control = componente.form.get('nombre');
      control.setValue('Eliezer Isai');
      expect(control.valid).toBeTruthy();
  });

  it('El apellido no contiene nada, retorna falso',() =>{
    const control = componente.form.get('apellido');
    control.setValue('');
    expect(control.valid).toBeFalsy();

});

  it('El apellido debe de ser obligatorio',() =>{
    const control = componente.form.get('apellido');
    control.setValue('Coronado Morales');
    expect(control.valid).toBeTruthy();

});

it('El carnet no contiene nada, retorna falso',() =>{
  const control = componente.form.get('carnet');
  control.setValue('');
  expect(control.valid).toBeFalsy();

});

it('El carnet debe de ser obligatorio',() =>{
  const control = componente.form.get('carnet');
  control.setValue('200924991');
  expect(control.valid).toBeTruthy();

});

it('La carrera no contiene nada, retorna falso',() =>{
  const control = componente.form.get('carrera');
  control.setValue('');
  expect(control.valid).toBeFalsy();

});


it('La carrera debe de ser obligatorio',() =>{
  const control = componente.form.get('carrera');
  control.setValue('Ing. Ciencias y Sistemas');
  expect(control.valid).toBeTruthy();

});

it('EL password no contiene nada, retorna falso',() =>{
  const control = componente.form.get('password');
  control.setValue('1234');
  expect(control.valid).toBeFalsy();

});

it('EL password debe ser obligatorio',() =>{
  const control = componente.form.get('password');
  control.setValue('1234');
  expect(control.valid).toBeTruthy();

});


it('Servicio de Registro',() =>{
  const respuesta:any;
  spyOn(servicio, 'registro').and.callFake(()=>{
    return Observable.from( respuesta );
  })

  expect (componente.respuesta.length).toBeGreaterThan(0);
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



it('Debe llamar al servicio para agregar un estudiante',()=>{
  const espia = spyOn(servicio, 'registro').and.callFake(
    resp=>{
      return observable.empty();
    }
     );
     componente.registrarAlumno()

     expect(espia).toHaveBeenCalled();
})



});

