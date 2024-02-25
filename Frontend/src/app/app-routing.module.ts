import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WowOverviewComponent } from './components/wow-overview/wow-overview.component';
import { WowRetailComponent } from './components/wow-retail/wow-retail.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutComponent } from './components/about/about.component';
import { AccountComponent } from './components/account/account.component';
import { PaymentOptionsComponent } from './components/payment-options/payment-options.component';
import { HelpPageComponent } from './components/help-page/help-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'wow', component: WowOverviewComponent },
  { path: 'wow-retail', component: WowRetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'account', component: AccountComponent },
  { path: 'payment-options', component: PaymentOptionsComponent },
  { path: 'help', component: HelpPageComponent },
  /* { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
