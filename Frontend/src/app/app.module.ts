import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WowOverviewComponent } from './components/wow-overview/wow-overview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from "@ngrx/store";
import { reducers } from './store/rootReducer';
import { CommonModule } from "@angular/common";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { MatTableModule } from '@angular/material/table'
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {MatCell, MatHeaderCell, MatHeaderRow, MatRow, MatTable} from "@angular/material/table";
import {NgbInputDatepicker} from "@ng-bootstrap/ng-bootstrap";
import {CarouselModule} from "ngx-bootstrap/carousel";
import { NgxTranslateModule } from './translate/translate.module';

import { WowComponent } from './components/wow/wow.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { AccountComponent } from './components/account/account.component';
import { AboutComponent } from './components/about/about.component';
import { PaymentOptionsComponent } from './components/payment-options/payment-options.component';
import { WowRetailGoldComponent } from './components/wow/wow-retail-gold/wow-retail-gold.component';
import { WowClassicGoldComponent } from './components/wow/wow-classic-gold/wow-classic-gold.component';
import { WowGoldOfferComponent } from './components/wow/wow-gold-offer/wow-gold-offer.component';
import { LoginPageComponent } from './components/account/login-page/login-page.component';
import { AccountDetailsComponent } from './components/account/account-details/account-details.component';
import { WelcomeContentComponent } from './components/account/welcome-content/welcome-content.component';
import { LoginFormComponent } from './components/account/login-form/login-form.component';
import { ButtonsComponent } from './components/account/buttons/buttons.component';
import { SwitcherTabComponent } from './components/wow/switcher-tab/switcher-tab.component';
import { GoldOfferItemComponent } from './components/wow/wow-gold-offer/gold-offer-item/gold-offer-item.component';
import { BasketComponent } from './components/basket/basket.component';


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
    LoginPageComponent,
    AccountDetailsComponent,
    WelcomeContentComponent,
    LoginFormComponent,
    ButtonsComponent,
    SwitcherTabComponent,
    GoldOfferItemComponent,
    BasketComponent,

  ],
  imports: [
    AppRoutingModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    NgxTranslateModule,
    MatProgressSpinner,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    NgbInputDatepicker,
    CarouselModule,
    MatTabGroup,
    MatTab,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
