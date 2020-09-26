import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DummyService } from 'src/app/services/dummy.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public formulario: FormGroup;

  
  constructor(
    private router: Router,
    private usuarioService: DummyService
  ) { }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login(){
    if(this.formulario.invalid){
      Swal.fire({
        icon:'error',
        title:'Error',
        text: 'Error'
      });
      return false;
    }

    this.usuarioService.login(this.formulario.value.userName,this.formulario.value.password).subscribe(
      (data: boolean)=>{  
        if(data === true){
          this.router.navigate(['/dashboard']);
          return true;
        }
      },
      err=>{
        Swal.fire({
          icon: 'error',
          title:'Error de credenciales',
          text:'Error'
        });
        return false;
      }
    );
  }
}
