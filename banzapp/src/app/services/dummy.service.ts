import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

   private SERVER_URL = "https://banzapp.azurewebsites.net/api/PensumSemestre/";

   constructor(
      private httpClient: HttpClient
    ) { }

  public getDummyInfo() {
    return this.httpClient.get(`${this.SERVER_URL}1/1`);
  }
}
