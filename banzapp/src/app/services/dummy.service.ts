import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  private SERVER_URL = "http://jsonplaceholder.typicode.com";

  constructor(private httpClient: HttpClient) { }

  public getDummyInfo() {
    return this.httpClient.get(`${this.SERVER_URL}/users`);
  }

  public getDummyInfoById(id) {
    return this.httpClient.get(`${this.SERVER_URL}/todos/${id}`);
  }
}
