import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchTerm = '';

  languages = [
    {name: 'English', code: 'US'},
    {name: 'Deutsch', code: 'DE'}
  ];

  selectedLanguage: { name: string, code: string };

  constructor() {
    this.selectedLanguage = this.languages[0];
  }

  ngOnInit(): void {}

  onSelectLanguage(language: { name: string, code: string }) {
    this.selectedLanguage = language;
    // Hier kannst du die ausgewählte Sprache verwenden oder weitere Aktionen ausführen
  }

}
