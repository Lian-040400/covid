import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { today } from 'src/app/helpers/formatYesterdaydate';
import { CovidTableData, CountryData } from '../../models/covid.model';
import { CovidService, getCountrieAsCountryOption } from '../../services/covid.service';
import { getCountriesAsCountryOptions } from "../../services/covid.service";
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  data!: any;
country!: any;
  constructor(
    private activatedRouter: ActivatedRoute,
    private dataService: CovidService
  ) { }

  ngOnInit(): void {

    this.dataService.getCountryData({
      country: this.activatedRouter.snapshot.params.name,
      min_date: `2021-11-30T00:00:00.00Z`
    })
      .subscribe(data => {
        this.data = data[0];
        getCountrieAsCountryOption(this.data.country).then(country =>{
          this.country = country;
           console.log(this.country);
         });
      });
  }

}
