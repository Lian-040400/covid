import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpClient} from "@angular/common/http";
import { CovidData } from '../models/covid.model';

@Injectable()
export class CovidService {
  constructor(private http: HttpClient) { }
  getData(): Observable<CovidData[]> {
    return this.http.get<CovidData[]>(`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/countries_summary?min_date=2021-11-21T00:00:00.000Z&hide_fields=uids,country_iso2s,country_iso3s,country_codes,combined_names`)
    .pipe(
      map((data: any) => data.map((user: any) => new CovidData(user))),
    )
  }
  
}



