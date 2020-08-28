import { Component, OnInit } from '@angular/core';
import { DummyService } from '../../services/dummy.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: DummyService) { }

  ngOnInit() {
    this.apiService.getDummyInfo().subscribe((data: any[]) => {
      console.log(data);
    })

    this.apiService.getDummyInfoById(1).subscribe((data: any[]) => {
      console.log(data);
    })
  }

}
