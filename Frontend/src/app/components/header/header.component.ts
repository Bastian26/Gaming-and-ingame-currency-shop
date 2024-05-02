import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/model/app-state-model";
import {User} from "../../models/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchTerm = '';
  welcomeName = 'Name'
  user: User = null;

  siteLanguage = 'English';
  languages = [
    {name: 'DE', code: 'de'},
    {name: 'EN', code: 'en'},
  ];

  selectedLanguage: { name: string, code: string };
  isOpen: boolean = false;
  ngUnsubscribe = new Subject<void>();

  constructor(private translate: TranslateService, private store: Store<AppState>) {
    this.selectedLanguage = this.languages[0];
  }

  ngOnInit(): void {
    this.store.select(state => state)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.user = data?.activeUser?.user;
        this.welcomeName = this.user?.firstName;
      });
  }

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

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
