import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

   private SERVER_URL = "https://banzapp.azurewebsites.net/api/PensumSemestre/";
   private SERVER_PRE =  "https://banzapp.azurewebsites.net/api/Pensum/"

    
   constructor(
      private httpClient: HttpClient
    ) { }

  public getPensum(pensum:string, semestre:string) {

    const url = this.SERVER_URL+pensum+"/"+semestre
    return this.httpClient.get(url).pipe(
      map((resp:any) => {
        return resp;
      })
    )
  }

  public Prerequisitos(idPensum: number, idCurso: number){
  
    const url = this.SERVER_PRE+idPensum+"/Curso/"+idCurso;

    return this.httpClient.get(url).pipe(
      map((resp:any)=>{
        console.log(resp);
        return resp;
      })
    )

  }

  public Registro(){
    
  }
}
