import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wow-gold-offer',
  templateUrl: './wow-gold-offer.component.html',
  styleUrls: ['./wow-gold-offer.component.scss']
})
export class WowGoldOfferComponent implements OnInit {
  region: string[] = ["EU", "US"];
  fractions: string[] = ["Alliance", "Horde"]

  selectedServer: string;
  servers: { name: string, value: string } [] = [
    { name: 'Server', value: 'all' },
    { name: 'Aegwyn', value: 'aegwyn' },
    { name: 'Aggmaggan', value: 'aggmaggan' },
    { name: 'Blackhand', value: 'blackhand' },
    { name: 'Blackmoore', value: 'blackmoore' },
    { name: 'Norgannon', value: 'norgannon' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.selectedServer = 'all';
  }

  onServerChange(selectedValue: string) {
    console.log('Ausgewählter Server:', selectedValue);
  }


}
