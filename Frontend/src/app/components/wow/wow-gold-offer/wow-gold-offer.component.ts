import { Component, OnInit } from '@angular/core';
import {server} from "../../../models/server";
import { euClassicServers, euRetailServers, usClassicServers, usRetailServers } from '../../../data/serverList'

@Component({
  selector: 'app-wow-gold-offer',
  templateUrl: './wow-gold-offer.component.html',
  styleUrls: ['./wow-gold-offer.component.scss']
})
export class WowGoldOfferComponent implements OnInit {
  modalGoldSellOpen = false;
  region: string[] = ["EU", "US"];
  fractions: string[] = ["wow.fraction.alliance", "wow.fraction.horde"]

  selectedServer: string;
  servers = euRetailServers;

  constructor() { }

  ngOnInit(): void {
    this.selectedServer = euRetailServers[0].value;
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
}
