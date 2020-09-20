import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EMPTY } from 'rxjs';
import { DummyService } from 'src/app/services/dummy.service';

import { LoginComponent } from './login.component';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let servicio: DummyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
    servicio = new DummyService(null);
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Debe crear un formulario con dos inputs y un boton',()=>{
    const username = fixture.debugElement.nativeElement.querySelector('#user');
    const password = fixture.debugElement.nativeElement.querySelector('#password');
    const loginBtn = fixture.debugElement.nativeElement.querySelector('#boton_login');
    expect(username).toBeDefined();
    expect(password).toBeDefined();
    expect(loginBtn).toBeDefined();
  });

  it('Debe llamar al servidor para iniciar sesión',()=>{
    const espia = spyOn (servicio, 'login').and.callFake(()=>{});
    component.login();
    expect(espia).toHaveBeenCalled();
  });
});
