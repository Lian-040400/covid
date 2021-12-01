import { Component, OnInit } from '@angular/core';
import { today } from 'src/app/helpers/formatYesterdaydate';
import { CovidTableData } from '../models/covid.model';
import { CovidService } from '../services/covid.service';


@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss'],
})
export class CustomerDashboardComponent implements OnInit {
  public data: CovidTableData[] = [];
  constructor(private dataService: CovidService) { }
  ngOnInit(): void {
    this.dataService.getData({
      min_date: `${today}`
    }).subscribe((data) => {
      this.data = data;
    });

    
  }

}
