import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WowOverviewComponent } from './components/wow-overview/wow-overview.component';
import { WowComponent } from './components/wow/wow.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AboutComponent } from './components/about/about.component';
import { AccountComponent } from './components/account/account.component';
import { PaymentOptionsComponent } from './components/payment-options/payment-options.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { WowRetailGoldComponent } from './components/wow/wow-retail-gold/wow-retail-gold.component';
import { WowClassicGoldComponent } from './components/wow/wow-classic-gold/wow-classic-gold.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'wow-overview', component: WowOverviewComponent },
  {
    path: 'wow',
    component: WowComponent,
    children: [
      //{ path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'retail-gold', component: WowRetailGoldComponent },
      { path: 'classic-gold', component: WowClassicGoldComponent },
      //{ path: 'about', component: AboutComponent },
      //{ path: 'contact', component: ContactComponent },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: 'account', component: AccountComponent },
  { path: 'payment-options', component: PaymentOptionsComponent },
  { path: 'help', component: HelpPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
