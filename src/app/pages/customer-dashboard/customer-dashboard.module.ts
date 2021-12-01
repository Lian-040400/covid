import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './components/customer-dashboard.component';
import { CustomerDashboardRountingModule } from './customer-dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CovidDataTableComponent } from './components/covid-data-table/covid-data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { CountryComponent } from './components/country/country.component';
import { CovidService } from './services/covid.service';
import { SafeUrlPipeModule } from 'src/app/pipes/safe-url-pipe/safe-url-pipe.module';



@NgModule({
  declarations: [
    CustomerDashboardComponent,
    CovidDataTableComponent,
    CountryComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SafeUrlPipeModule,
    CustomerDashboardRountingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule
  ],
  providers: [
    CovidService
  ]
})
export class CustomerDashboardModule { }
