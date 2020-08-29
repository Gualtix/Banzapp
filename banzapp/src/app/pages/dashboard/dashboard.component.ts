import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  id = 0;

  cursos = ['1','2','3','4','5','6'];

  semestres = [{
                "Semestre":'1er Semestre',
                "Cursos":[{
                    'codigo':'017',
                    'curso':'Social Humanistica 1',
                    'creditos':'4'
                },{
                    'codigo':'101',
                    'curso': 'Matematica Basica 1',
                    'creditos':'7'  
                },{
                    'codigo':'069',
                    'curso':'Tecnica Complementaria',
                    'creditos':'3'
                },{
                   'codigo':'039',
                   'curso':'Deportes 1',
                   'creditos':'1'
                },{
                  'codigo':'348',
                  'curso':'Quimica General',
                  'creditos':'3'
                },{
                  'codigo':'0006',
                  'curso':'Idioma Tecnico 1',
                  'creditos':'2'
                }]
              },{
                
                "Semestre":'2do Semestre',
                "Cursos":[{
                    'codigo':'019',
                    'curso':'Social Humanistica 2',
                    'creditos':'4'
                },{
                    'codigo':'103',
                    'curso': 'Mate Basica 2',
                    'creditos':'7'  
                },{
                    'codigo':'005',
                    'curso':'Tecnicas de Estudio y de Investigacion',
                    'creditos':'3'
                },{
                    'codigo':'147',
                    'curso':'Fisica Basica',
                    'creditos':'5'
                },{
                    'codigo':'040',
                    'curso':'Deportes 2',
                    'creditos':'1'
                },{
                    'codigo':'0008',
                    'curso':'Idioma Tecnico 2',
                    'creditos':'2'
                }]
              },{
                
                "Semestre":'3er Semestre',
                "Cursos":[{
                    'codigo':'795',
                    'curso':'Logica De Sistemas',
                    'creditos':'2'
                },{
                    'codigo':'960',
                    'curso': 'Mate Computo 1',
                    'creditos':'5'  
                },{
                    'codigo':'770',
                    'curso':'Intr. a la Prog. y Computacion 1',
                    'creditos':'4'
                },{
                    'codigo':'107',
                    'curso':'Matematica Intermedia 1',
                    'creditos':'10'
                },{
                    'codigo':'150',
                    'curso':'Fisica 1',
                    'creditos':'6'
                },{
                    'codigo':'0009',
                    'curso':'Idioma Tecnico 3',
                    'creditos':'2'
                }]
              },{
                
                "Semestre":'3er Semestre',
                "Cursos":[{
                    'codigo':'795',
                    'curso':'Logica De Sistemas',
                    'creditos':'2'
                },{
                    'codigo':'960',
                    'curso': 'Mate Computo 1',
                    'creditos':'5'  
                },{
                    'codigo':'770',
                    'curso':'Intr. a la Prog. y Computacion 1',
                    'creditos':'4'
                },{
                    'codigo':'107',
                    'curso':'Matematica Intermedia 1',
                    'creditos':'10'
                },{
                    'codigo':'150',
                    'curso':'Fisica 1',
                    'creditos':'6'
                },{
                    'codigo':'0009',
                    'curso':'Idioma Tecnico 3',
                    'creditos':'2'
                }]
              },{
                
                "Semestre":'3er Semestre',
                "Cursos":[{
                    'codigo':'795',
                    'curso':'Logica De Sistemas',
                    'creditos':'2'
                },{
                    'codigo':'960',
                    'curso': 'Mate Computo 1',
                    'creditos':'5'  
                },{
                    'codigo':'770',
                    'curso':'Intr. a la Prog. y Computacion 1',
                    'creditos':'4'
                },{
                    'codigo':'107',
                    'curso':'Matematica Intermedia 1',
                    'creditos':'10'
                },{
                    'codigo':'150',
                    'curso':'Fisica 1',
                    'creditos':'6'
                },{
                    'codigo':'0009',
                    'curso':'Idioma Tecnico 3',
                    'creditos':'2'
                }]
              },{
                
                "Semestre":'3er Semestre',
                "Cursos":[{
                    'codigo':'795',
                    'curso':'Logica De Sistemas',
                    'creditos':'2'
                },{
                    'codigo':'960',
                    'curso': 'Mate Computo 1',
                    'creditos':'5'  
                },{
                    'codigo':'770',
                    'curso':'Intr. a la Prog. y Computacion 1',
                    'creditos':'4'
                },{
                    'codigo':'107',
                    'curso':'Matematica Intermedia 1',
                    'creditos':'10'
                },{
                    'codigo':'150',
                    'curso':'Fisica 1',
                    'creditos':'6'
                },{
                    'codigo':'0009',
                    'curso':'Idioma Tecnico 3',
                    'creditos':'2'
                }]
              }

              
              
]
  

  ngOnInit(): void {
  }

}
