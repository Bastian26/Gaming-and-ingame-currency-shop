import {Component, Input, OnInit} from '@angular/core';
import {server} from "../../../models/server";
import { euClassicServers, euRetailServers, usClassicServers, usRetailServers } from '../../../data/serverList'
import {User} from "../../../models/user";
import {Store} from "@ngrx/store";
import {AppState} from "../../../store/model/app-state-model";
import {Subject, takeUntil} from "rxjs";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-wow-gold-offer',
  templateUrl: './wow-gold-offer.component.html',
  styleUrls: ['./wow-gold-offer.component.scss']
})
export class WowGoldOfferComponent implements OnInit {
  user: User = null;
  modalGoldSellOpen = false;
  region: string[] = ["EU", "US"];
  fractions: string[] = ["wow.fraction.alliance", "wow.fraction.horde"]
  sellGoldForm = this.formBuilder.group({
    sellPrice: 0,
    maxQuantity: 0,
    sellFraction: '',
    sellServer: ''
  })

  selectedServer: string;
  servers = euRetailServers;
  ngUnsubscribe = new Subject<void>();


  constructor(
    private store: Store<AppState>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.selectedServer = euRetailServers[0].value;

    this.store.select(state => state)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => {
        this.user = data?.activeUser?.user;
      });
  }

  onServerChange(selectedValue: string) {
    console.log('Ausgewählter Server:', selectedValue);
    if(selectedValue === 'all') {
      // Behandle den Fall, wenn 'all' ausgewählt wurde
      // Hier könntest du alle Server behandeln, z.B.:
      // this.servers = [...euRetailServers, ...euClassicServers, ...usRetailServers, ...usClassicServers];
    } else {
      // Behandle den Fall, wenn ein bestimmter Server ausgewählt wurde
      // Hier könntest du entsprechende Logik implementieren, um nur die ausgewählten Server zu laden
    }
  }

  openGoldSellModal(): void {
    this.modalGoldSellOpen = true;
  }

  closeGoldSellModal(): void {
    this.modalGoldSellOpen = false;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  // protected readonly onsubmit = onsubmit;
  sellGold(): void {
    console.log('Your order has been submitted', this.sellGoldForm.value)
  }
}
