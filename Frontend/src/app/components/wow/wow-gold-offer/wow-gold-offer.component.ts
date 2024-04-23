import { Component, OnInit } from '@angular/core';
import {server} from "../../../models/server";
import { euClassicServers, euRetailServers, usClassicServers, usRetailServers } from '../../../data/serverList'

@Component({
  selector: 'app-wow-gold-offer',
  templateUrl: './wow-gold-offer.component.html',
  styleUrls: ['./wow-gold-offer.component.scss']
})
export class WowGoldOfferComponent implements OnInit {
  region: string[] = ["EU", "US"];
  fractions: string[] = ["Alliance", "Horde"]

  selectedServer: string;
  servers = euRetailServers;

  constructor() { }

  ngOnInit(): void {
    this.selectedServer = 'all';
  }

  onServerChange(selectedValue: string) {
    console.log('Ausgewählter Server:', selectedValue);
  }


}
