import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class DummyService {

   private SERVER_URL = "https://banzapp.azurewebsites.net/api/PensumSemestre/";
   private SERVER_PRE =  "https://banzapp.azurewebsites.net/api/Pensum/"

  public id: string;
  public carnet : string;
  public nombre: string;
  public token: string;
    
   constructor(
      private httpClient: HttpClient
    ) { 
      this.cargarStorage();
    }

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

  public login(Username: string, Password: string){
    const user ={
      usuario: Username,
      password: Password
    }

    const url = '';
    return this.httpClient.post(url,user).pipe(map((resp:any)=>{
      if(resp.ok === false){
        Swal.fire({
          icon:'error',
          title:'Error',
          text:'Error de credenciales'
        });
        return false;
      }else{
         this.saveStorage(
           resp.carnet,
           resp.token,
           resp.nombre,
           resp.id);

           return true;
      }
    })
    );
    
  }

  public saveStorage(carnet, token, nombre,id){
    localStorage.setItem('carnet',carnet);
    localStorage.setItem('token', token);
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('id',id);    
  }

  public cargarStorage(){
    if ( localStorage.getItem('token') ){
      this.token = localStorage.getItem('token');
      this.id = localStorage.getItem('id');
      this.nombre = localStorage.getItem('nombre');
      this.carnet = localStorage.getItem('carnet');
    }else{
      this.token = '';
      this.id = '';
      this.nombre = '';
      this.carnet = '';
    }
  }

  public estaLogueado(){
    this.cargarStorage();
    if (this.token.length > 10){
      return true;
    }else{
      return false;
    }
  }
}
