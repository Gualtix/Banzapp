import { Component, OnInit } from '@angular/core';
import { DummyService } from '../../services/dummy.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: DummyService) {

    this.apiService.getPensum("1", "1").subscribe((data: any) => {
      JSON.parse(data).forEach(element => {
        this.pensum.push(element);
      });

    }, (error => {
      console.log(error);
    }));

    this.apiService.getPensum("1", "2").subscribe((data: any) => {

      JSON.parse(data).forEach(element => {
        this.pensum.push(element);
      });


    }, (error => {
      console.log(error);
    }));

    this.apiService.getPensum("1", "3").subscribe((data: any) => {
      JSON.parse(data).forEach(element => {
        this.pensum.push(element);
      });


    }, (error => {
      console.log(error);
    }));

  }

  id = 0;

  Semestres = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  pensum = [];


  ngOnInit(): void {


  }


}