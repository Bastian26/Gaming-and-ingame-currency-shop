import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wow-retail',
  templateUrl: './wow-retail.component.html',
  styleUrls: ['./wow-retail.component.scss'],
})
export class WowRetailComponent implements OnInit {
  navbarLinks = [
    { label: 'Home', url: '/home' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
