import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { DummyService } from 'src/app/services/dummy.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public formSubmitted = false;

  public loginForm = this.fb.group({
    usuario: ['' , [ Validators.required] ],
    password: ['', Validators.required ]
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: DummyService
  ) { }

  ngOnInit(): void {
  }

  login(){
    
  }
}
