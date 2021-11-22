import { Component, OnInit } from '@angular/core';
import { CovidData } from '../models/covid.model';
import { CovidService } from '../services/covid.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss'],
  providers: [CovidService]
})
export class CustomerDashboardComponent implements OnInit {
  data: CovidData[] = [];

  constructor(private dataService: CovidService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.data = data;
      console.log(data);
    });

  }
}