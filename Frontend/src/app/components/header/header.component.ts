import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Subject, takeUntil} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/model/app-state-model";
import {User} from "../../models/user";
import * as UserActions from "../../store/actions/user.actions";
import {AxiosService} from "../../services/axios.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchTerm = '';
  user: User = null;

  siteLanguage = 'English';
  languages = [
    {name: 'DE', code: 'de'},
    {name: 'EN', code: 'gb'},
  ];

  selectedLanguage: { name: string, code: string };
  isOpen: boolean = false;
  ngUnsubscribe = new Subject<void>();

  constructor(private axiosService: AxiosService, private translate: TranslateService,
              private store: Store<AppState>, private router: Router,
              private _activatedRoute:ActivatedRoute) {
    this.selectedLanguage = this.languages[0];
  }

  ngOnInit(): void {
    this.store.select(state => state)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.user = data?.activeUser?.user;
      });
  }

  onSelectLanguage(language: { name: string, code: string }) {
    this.selectedLanguage = language;
    this.translate.use(language.code === 'gb' ? 'en' : language.code);
    console.log("changed language to " + this.selectedLanguage.name);
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  searchForTerm() {
    console.log(this.searchTerm);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  logout() {
    this.axiosService.setAuthToken(null);
    this.store.dispatch(UserActions.logout());
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }
}
