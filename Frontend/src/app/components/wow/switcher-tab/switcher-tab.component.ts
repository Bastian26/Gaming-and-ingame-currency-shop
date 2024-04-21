import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-switcher-tab',
  templateUrl: './switcher-tab.component.html',
  styleUrls: ['./switcher-tab.component.scss']
})
export class SwitcherTabComponent implements OnInit {
  @Input() providedContentElements: string[];
  activeElement: string;

  constructor() { }

  ngOnInit(): void {
    this.activeElement = this.providedContentElements
    && this.providedContentElements.length > 0 ? this.providedContentElements[0] : '';
  }

  setActiveElement(element: string) {
    this.activeElement = element;
  }
}
