import { Component, OnInit } from '@angular/core';
import { CovidTableData } from '../models/covid.model';
import { CovidService } from '../services/covid.service';
@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss'],
  providers: [CovidService]
})
export class CustomerDashboardComponent implements OnInit {
  public data: CovidTableData[] = [];
  constructor(private dataService: CovidService) { }
  ngOnInit(): void {
    this.dataService.getCountryData().subscribe((data) => {
     console.log(data);
     
    });
  }
}