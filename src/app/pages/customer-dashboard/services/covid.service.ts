import { Injectable } from '@angular/core';
import { map, tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { CovidTableData } from '../models/covid.model';
import { environment } from 'src/environments/environment';
import { today } from '../../../helpers/formatYesterdaydate';
import * as COUNTRIES from '../../../../assets/countryes.json';

interface CountryOptionI {
  flagSrc: string,
  label: string,
};
export const getCountries = async () => {
  return processUserInput(greeting);
};
export async function getCountriesAsCountryOptions(): Promise<CountryOptionI[]> {
  const countries = (await getCountries() as any).default;
  return countries.map((entity: any) => ({
    flagSrc: entity.flagBase64,
    label: entity.country,
  }));
}
export async function getCountrieAsCountryOption(country: string): Promise<CountryOptionI> {
  country = country.toLowerCase();
  const countries = (await getCountries() as any).default;
  const result = countries.find((entity: any) => entity.country.toLowerCase() == country);
  return {
    flagSrc: result.flagBase64,
    label: result.country,
  }
}

function greeting<T>(country: T): T {
  return country;
}

function processUserInput<T>(callback: any): T {
  return callback(COUNTRIES);
}

@Injectable()
export class CovidService {
  constructor(private http: HttpClient) { }

  getData(queryParams: object): Observable<CovidTableData[]> {
    return this.http.get<CovidTableData[]>(`${environment.baseUrl}/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/countries_summary?`, {params: this.getCountryDefaultParams(queryParams)})
      .pipe(  
        map((data: any) => data.map((user: any) => new CovidTableData(user)))
      );
  }
  
  private getCountryDefaultParams(restParams = {}) {
    return {
      // hide_fields: `uids,country_iso3s,country_codes,combined_names`,
      ...restParams
    }
  }

  getCountryData(queryParams: object): Observable<any> {
    return this.http.get<CovidTableData[]>(
      `${environment.baseUrl}/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/global_and_us`,
      
      {params: this.getCountryDefaultParams(queryParams)}
      )
      .pipe(
        tap(console.log),
        map((data: any) => data.map((item: any) => new CovidTableData(item))),
      )
  }

}




