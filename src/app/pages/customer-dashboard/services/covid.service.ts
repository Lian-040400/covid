import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CovidTableData } from '../models/covid.model';
import { environment } from 'src/environments/environment';
import { today } from '../../../helpers/formatYesterdaydate';
@Injectable()
export class CovidService {
  constructor(private http: HttpClient) { }
  getData(): Observable<CovidTableData[]> {
    return this.http.get<CovidTableData[]>(`${environment.baseUrl}`)
      .pipe(
        map((data: any) => data.map((user: any) => new CovidTableData(user))),
      )
  }
  getCountryData(): Observable<any> {
    return this.http.get<CovidTableData[]>(`https://webhooks.mongodb-stitch.com/api/client/v2.0/app/covid-19-qppza/service/REST-API/incoming_webhook/global?uid=250&min_date=2021-10-22T00:00:00.000Z&hide_fields=_id,%20country,%20country_iso2,%20country_iso3,%20loc,%20state`)
      .pipe(
        map((data: any) => data.map((item: any) => new CovidTableData(item))),
      )
  }

}



