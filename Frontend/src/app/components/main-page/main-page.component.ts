import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  images = [
    { id: 1, url: '../../../assets/img/HellDivers2Banner.jpg', title: 'Hell Divers 2', description: 'Venrnichte die Bugs' },
    { id: 2, url: '../../../assets/img/ManorLordsBanner.jpg', title: 'Manor Lords', description: 'Beherrsche das Mittelalter' },
    { id: 3, url: '../../../assets/img/LittleNightmares2Banner.jpg', title: 'Little Nightmares 2', description: 'Stelle dich dem Alptraum' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
