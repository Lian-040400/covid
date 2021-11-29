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



@NgModule({
  declarations: [
    CustomerDashboardComponent,
    CovidDataTableComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CustomerDashboardRountingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule
  ]
})
export class CustomerDashboardModule { }
