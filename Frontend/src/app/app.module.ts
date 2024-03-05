import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/navigation/header/header.component';
import { WowOverviewComponent } from './components/wow-overview/wow-overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { WowComponent } from './components/wow/wow.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { AccountComponent } from './components/account/account.component';
import { AboutComponent } from './components/about/about.component';
import { PaymentOptionsComponent } from './components/payment-options/payment-options.component';
import { WowRetailGoldComponent } from './components/wow/wow-retail-gold/wow-retail-gold.component';
import { WowClassicGoldComponent } from './components/wow/wow-classic-gold/wow-classic-gold.component';
import { WowGoldOfferComponent } from './components/wow/wow-gold-offer/wow-gold-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WowOverviewComponent,
    WowComponent,
    MainPageComponent,
    HelpPageComponent,
    AccountComponent,
    AboutComponent,
    PaymentOptionsComponent,
    WowRetailGoldComponent,
    WowClassicGoldComponent,
    WowGoldOfferComponent,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
