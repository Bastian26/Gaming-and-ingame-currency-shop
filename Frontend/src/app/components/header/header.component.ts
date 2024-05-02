import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchTerm = '';

  siteLanguage = 'English';
  languages = [
    {name: 'DE', code: 'de'},
    {name: 'EN', code: 'en'},
  ];

  selectedLanguage: { name: string, code: string };
  isOpen: boolean = false;

  constructor(private translate: TranslateService) {
    this.selectedLanguage = this.languages[0];
  }

  ngOnInit(): void {}

  onSelectLanguage(language: { name: string, code: string }) {
    this.selectedLanguage = language;
    this.translate.use(language.code);
    console.log("changed language to " + this.selectedLanguage.name);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  searchForTerm() {
    console.log(this.searchTerm);
  }

  // changeSiteLanguage(localeCode: string): void {
  //   const selectedLanguage = this.languages
  //     .find((language) => language.code === localeCode)
  //     ?.name.toString();
  //   if (selectedLanguage) {
  //     this.siteLanguage = selectedLanguage;
  //     this.translate.use(localeCode);
  //   }
  //   const currentLanguage = this.translate.currentLang;
  //   console.log('currentLanguage', currentLanguage);
  // }

}
