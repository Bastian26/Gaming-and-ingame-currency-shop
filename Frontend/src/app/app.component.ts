import { Component } from '@angular/core';
import {select, Store} from "@ngrx/store";
import { AppState } from "./store/model/app-state-model";
import { selectLoading } from './store/selectors/loading.selectors'
import {Observable, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'wow-gold-trading';
  isLoading: boolean;
  ngUnsubscribe = new Subject<void>();

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    // with selector - does still not work
    /*this.store
      .select(selectLoading)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data: boolean) => {
        this.isLoading = data;
      });*/

    this.store.select(state => state)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.isLoading = data.isLoading.loading;
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
