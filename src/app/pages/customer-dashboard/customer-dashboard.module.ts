import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './components/customer-dashboard.component';
import { DataTableDatasourceModule } from '../../ui-kits/data-table/data-table-datasource.module';
import { CustomerDashboardRountingModule } from './customer-dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CustomerDashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DataTableDatasourceModule,
    CustomerDashboardRountingModule
  ]
})
export class CustomerDashboardModule { }
