import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

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
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.setActiveLink();
      }
    });
  }

  setActiveLink() {
    const currentUrl = this.router.url;
    this.navbarLinks.forEach((link) => {
      link.active = currentUrl.includes(link.url);
    });
  }

  setActive(link: any) {
    this.navbarLinks.forEach((link) => (link.active = false));
    link.active = true;
  }
}
