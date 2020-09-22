import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { DummyService } from '../../services/dummy.service';

import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


describe('Formularios', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let servico: DummyService;

  let route: Router;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations:[RegisterComponent],
      providers:[DummyService]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it('Debe crear el formulario de registro con 5 campos, nombre, apellido, carnet, carrera, password',()=>{
    expect(component.forma.contains('firstName')).toBeTruthy();
    expect(component.forma.contains('lastName')).toBeTruthy();
    expect(component.forma.contains('carnet')).toBeTruthy();
    expect(component.forma.contains('carrera')).toBeTruthy();
    expect(component.forma.contains('password')).toBeTruthy();
    
  })

  it('EL nombre no contiene nada, retorna falso',() =>{
    const control = component.forma.get('firstName');
    control.setValue('');
    console.log(control.status);
    expect(control.status).toBe('INVALID')
});

  it('El nombre debe de ser obligatorio',() =>{
      const control = component.forma.get('firstName');
      control.setValue('Eliezer Isai');
      expect(control.status).toBe('VALID');
  });

  it('El apellido no contiene nada, retorna falso',() =>{
    const control = component.forma.get('lastName');
    control.setValue('');
    expect(control.status).toBe('INVALID')

});

  it('El apellido debe de ser obligatorio',() =>{
    const control = component.forma.get('lastName');
    control.setValue('Coronado Morales');
    expect(control.status).toBe('VALID');
    
});

  it('El carnet no contiene nada, retorna falso',() =>{
  const control = component.forma.get('carnet');
  control.setValue('');
  expect(control.valid).toBeFalsy();

});

  it('El carnet debe de ser obligatorio',() =>{
  const control = component.forma.get('carnet');
  control.setValue('200924991');
  expect(control.valid).toBeTruthy();

});

  it('La carrera no contiene nada, retorna falso',() =>{
  const control = component.forma.get('carrera');
  control.setValue('');
  expect(control.valid).toBeFalsy();

});


  it('La carrera debe de ser obligatorio',() =>{
  const control = component.forma.get('carrera');
  control.setValue('Ing. Ciencias y Sistemas');
  expect(control.valid).toBeTruthy();

});

  it('EL password  contiene algo , retorna true',() =>{
  const control = component.forma.get('password');
  control.setValue('1234');
  expect(control.value).toBeGreaterThan(0);

});

  it('EL password debe ser obligatorio',() =>{
  const control = component.forma.get('password');
  control.setValue('1234');
  expect(control.value).toBeGreaterThan(0);

});


  xit('Servicio de Registro',() =>{
    /*
  let respuesta:any;
  respuesta = spyOn(, 'Registro').and.callFake(()=>{
    return true;
  })

  expect (respuesta).toBeTrue;
  */
});


  it('Validar que las contrasenias sean iguales, true', () => {

  let prueba = component.secondPassword('1234','1234');
  expect( prueba ).toBeTruthy();
});


  it('Validar que las contrasenias sean diferentes, false', () => {
  let prueba = component.secondPassword('1234','12345');
  expect( prueba ).toBeFalsy();
});


  it('Fomulario invalido, debe de retornar un false', () => {
  let formulario = component.registrarEstudiante();
  expect( formulario ).toBe(false);
});



  it('Debe llamar al servicio para agregar un estudiante',()=>{
    /*
  let espia = spyOn(this.servicio, 'Registro').and.callFake(
    ()=>{
      return true;
    }
    );
  expect(espia).toHaveBeenCalled();
  */
  });
     


});



