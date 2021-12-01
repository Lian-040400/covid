import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './pages/customer-dashboard/components/country/country.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/customer-dashboard/customer-dashboard.module').then(m => m.CustomerDashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
