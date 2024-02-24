import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WowOverviewComponent } from './components/wow-overview/wow-overview.component';
import { WowRetailComponent } from './components/wow-retail/wow-retail.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'wow', component: WowOverviewComponent },
  { path: 'wow-retail', component: WowRetailComponent },
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
