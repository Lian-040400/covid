import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { today } from 'src/app/helpers/formatYesterdaydate';
import { CovidTableData, CountryData } from '../../models/covid.model';
import { CovidService, getCountrieAsCountryOption } from '../../services/covid.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  data!: any;
  country!: any;
  Linechart = [];
  multi: any[] = []
  // multi: any[]=[
  //   {
  //     "name": "France",
  //     "series": [
  //       {
  //         "name": "1990",
  //         "value": 58000000
  //       },
  //       {
  //         "name": "2010",
  //         "value": 20000000
  //       },
  //       {
  //         "name": "2011",
  //         "value": 58000000
  //       }
  //       , {
  //         "name": "2012",
  //         "value": 5000000
  //       }
  //     ]
  //   }
  // ];
  ;
  view: any = [900, 400];
  
  constructor(
    private activatedRouter: ActivatedRoute,
    private dataService: CovidService,
  ) 
  { 
  
  }

  


  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Cases';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnInit(): void {
    this.dataService.getCountryData({
      country: this.activatedRouter.snapshot.params.name,
      min_date: `2021-01-01T00:00:00.00Z`
    })
      .subscribe(data => {
        this.data = data[0];
        getCountrieAsCountryOption(this.data.country).then(country => {
          this.country = country;

          this.multi = [this.generateSeries(country.label, data)]

          console.log(this.multi);

        });
      });
  }

 generateSeries(country: string, list: any[]) {
    const series = [];
    for (const item of list) {
      const date = new Date(item.date)

      if (date.getDate() === 1) {
        series.push({name: date.toDateString(), value: item.deaths})
      }
    }
  
    return {
      name: country,
      series: series
    }
  }
}


