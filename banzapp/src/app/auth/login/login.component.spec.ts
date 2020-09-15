import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
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



});
