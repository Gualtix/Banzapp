import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms' 
import { DummyService } from '../../services/dummy.service';

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
  formNota: FormGroup;
  formavalida=false;
  prerequisitos=[{"nombre":"No tiene","codigo": null,"descripcion":"","fk_curso":19,"fk_pensum":1}];

  constructor(private apiService: DummyService) { }

  ngOnInit(): void {
    this.formNota = new FormGroup({
      Nota: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]*$")])
    })
  }

  ocultar(){
    return this.modalHidden=false;
  }
  mostrar(IdSemestre:number, IdCurso:number){
    console.log(IdSemestre);
    console.log(IdCurso);

  
    this.apiService.Prerequisitos(1,IdCurso).subscribe(
      (data:any)=>{
        if (data){
         this.prerequisitos= JSON.parse(data);
        }
      },
      err =>{
        console.log(err);
      }
    )
    return this.modalHidden=true;
  }

   color(id:string){
    let elemento:HTMLElement = document.getElementById(id);
    elemento.setAttribute('class','cursoGanado');
    return elemento;    
  }

  actualizarNota(id){
    let strid:string ='modal'+id;
    console.log(id);
    
    if (this.formNota.value.Nota !== undefined && (isNaN(this.formNota.value.Nota) ||
        this.formNota.value.Nota < 61 || this.formNota.value.Nota > 100)) {
          this.formavalida=true;
      return this.formNota.invalid==true;
    }
    
    if(this.formNota.invalid){
      console.log('invalido')
      return;
    }


    document.getElementById(strid).click();
    this.formavalida = false;
    this.color(id);

  }




}
