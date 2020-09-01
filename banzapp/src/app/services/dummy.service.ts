import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  private SERVER_URL = "https://banzapp.azurewebsites.net/api/PensumSemestre/1/1";

  constructor(private httpClient: HttpClient) { }

  public getDummyInfo() {
    return this.httpClient.get(`${this.SERVER_URL}`);
  }

  public getDummyInfoById(id) {
    return this.httpClient.get(`${this.SERVER_URL}/todos/${id}`);
  }
}
