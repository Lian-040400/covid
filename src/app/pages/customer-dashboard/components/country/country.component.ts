import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { today } from 'src/app/helpers/formatYesterdaydate';
import { CovidTableData, CountryData } from '../../models/covid.model';
import { CovidService, getCountrieAsCountryOption } from '../../services/covid.service';
import { generateSeries } from "../../../../helpers/generateChartsSeries";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  data!: any;
  country!: any;
  Linechart = [];
  multi: any[] = [];
  totalCases: any[] = [];
  view: any = [1100, 800];
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  timeline: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Cases';
  colorScheme = {
    domain: ['#5AA454', '#7aa3e5', '#E44D25', '#CFC0BB', '#a8385d',]
  };
  constructor(
    private activatedRouter: ActivatedRoute,
    private dataService: CovidService,
  ) { }
  ngOnInit(): void {
    this.dataService.getCountryData({
      country: this.activatedRouter.snapshot.params.name,
      min_date: `2021-01-01T00:00:00.00Z`
    })
      .subscribe(data => {
        this.data = data[0];
        getCountrieAsCountryOption(this.data.country).then(country => {
          this.country = country;
          this.multi = [generateSeries("total-deaths", data)];
          this.multi.push(generateSeries("deaths-daily", data),
            generateSeries("total-confirmed", data),
            generateSeries("confirmed-daily", data)
          );
        });
      });
  }
  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }
  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}


