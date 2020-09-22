import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  forma:FormGroup;

  constructor(public route: Router) { }

  ngOnInit(): void {

    this.forma = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      carnet: new FormControl('', Validators.required),
      carrera: new FormControl('', Validators.required),
      password: new FormControl('',Validators.required),
      password2: new FormControl('',Validators.required)

    });

  }

  secondPassword(pass, pass2){
    if(pass===pass2){
      return true;
    }else{
      return false;
    } 
  }


  registrarEstudiante(){
   
    if (this.forma.invalid){
      return false;
    }
     
    console.log(this.forma.value.password.value);
    console.log(this.forma.value.password2.value);
    let pass1= this.forma.value.password;
    let pass2= this.forma.value.password2
    

    if(this.secondPassword(pass1,pass2) == true ){
      Swal.fire({
        icon:'success',
        title:'Success',
        text:'Estudiante Registrado',
      });
      console.log(this.forma);
      this.route.navigate(['/login']);
      return true;
    }else{
      console.log('Las contrase;as no son iguales');
      return false;
    }



      
  }

}
