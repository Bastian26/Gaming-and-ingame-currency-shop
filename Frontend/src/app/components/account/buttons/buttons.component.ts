import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/model/app-state-model";
import {Subject, takeUntil} from "rxjs";
import {User} from "../../../models/user";

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  @Output() loginEvent = new EventEmitter();
  @Output() logoutEvent = new EventEmitter();
  isLoggedIn: boolean = false;
  ngUnsubscribe = new Subject<void>();

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
      this.store.select(state => state)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(data => {
          this.isLoggedIn = data?.activeUser?.loggedIn;
        });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
