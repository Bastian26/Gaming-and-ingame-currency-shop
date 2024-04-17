import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wow-classic-gold',
  templateUrl: './wow-classic-gold.component.html',
  styleUrls: ['./wow-classic-gold.component.scss']
})
export class WowClassicGoldComponent implements OnInit {
  offers: number = 120;

  constructor() { }

  ngOnInit(): void {
  }

}
