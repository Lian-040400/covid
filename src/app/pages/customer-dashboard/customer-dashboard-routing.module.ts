import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './components/country/country.component';
import { CustomerDashboardComponent } from './components/customer-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerDashboardComponent
  },
  {
    path: "country/:name",
    component: CountryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDashboardRountingModule { }
