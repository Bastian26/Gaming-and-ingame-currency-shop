import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setActiveLink();
  }

  setActiveLink() {
    const currentUrl = this.router.url;
    this.navbarLinks.forEach((link) => {
      link.active = currentUrl.includes(link.url);
    });
  }
}
