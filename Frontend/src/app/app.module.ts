import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { FlagLanguagePickerComponent } from './components/flag-language-picker/flag-language-picker/flag-language-picker.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LandingPageComponent, FlagLanguagePickerComponent],
  imports: [
    BrowserModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
