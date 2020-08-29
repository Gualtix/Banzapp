import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  
  @Input() NombreCurso:string = 'Social Humanistica 1'
  @Input() IdSemestre = 0;
  @Input() IdCurso = 0;
  @Input() Creditos = 0;
  
  IdRef:string='id'+this.IdSemestre+this.IdCurso;
  
  modalHidden:boolean=true;
  modalCurso:string = 'id'+this.NombreCurso;
  colapseCurso:string = 'colapse'+this.NombreCurso;

  constructor() { }

  ngOnInit(): void {
  }

  ocultar(){
    this.modalHidden=false;
  }
  mostrar(){
    this.modalHidden=true;
  }

  color(id){
    let elementTD=document.getElementById(id).setAttribute("class","what");
  }
}
