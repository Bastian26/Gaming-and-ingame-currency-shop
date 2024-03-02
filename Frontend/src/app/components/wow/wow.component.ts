import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wow',
  templateUrl: './wow.component.html',
  styleUrls: ['./wow.component.scss'],
})
export class WowComponent implements OnInit {
  navbarLinks = [
    { label: 'Retail Gold', url: '/wow/retail-gold', active: true },
    { label: 'Classic Gold', url: '/wow/classic-gold', active: false },
    { label: 'Raids', url: '#', active: false },
    { label: 'Mythic+', url: '#', active: false },
    { label: 'PvP', url: '#', active: false },
    { label: 'Leveling', url: '#', active: false },
    { label: 'Coaching', url: '#', active: false },
  ];

  constructor() {}

  ngOnInit(): void {}

  setActive(link: any) {
    // Setze alle Links auf inaktiv
    this.navbarLinks.forEach((link) => (link.active = false));
    // Setze den ausgewählten Link auf aktiv
    link.active = true;
  }
}
