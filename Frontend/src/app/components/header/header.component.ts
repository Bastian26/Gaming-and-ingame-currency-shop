import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchTerm = '';

  languages = [
    {name: 'DE', code: 'DE'},
    {name: 'EN', code: 'GB'},
  ];

  selectedLanguage: { name: string, code: string };
  isOpen: boolean = false;

  constructor() {
    this.selectedLanguage = this.languages[0];
  }

  ngOnInit(): void {}

  onSelectLanguage(language: { name: string, code: string }) {
    this.selectedLanguage = language;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  searchForTerm() {
    console.log(this.searchTerm);
  }

}
