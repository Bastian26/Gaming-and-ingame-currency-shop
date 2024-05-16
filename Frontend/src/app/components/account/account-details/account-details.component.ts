import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  icon: string;
  currenyName: string;
  gameName: string;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {icon: '../../../../assets/img/icons/wowClassicIcon.webp', currenyName: 'Gold', gameName: 'WoW Gold Retail', amount: 30000},
  {icon: '../../../../assets/img/icons/wowIcon.png', currenyName: 'Gold', gameName: 'WoW Gold Classic', amount: 120000},
  {icon: '../../../../assets/img/icons/newWorldIcon.png', currenyName: 'Taler', gameName: 'New World', amount: 1400000},
];

export interface CurrencyElement {
  icon: string; // Pfad zum Icon
  currenyName: string;
  gameName: string;
  amount: number;
}


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {
  displayedColumns: string[] = ['icon', 'currenyName', 'gameName', 'amount'];
  dataSource = ELEMENT_DATA;

  constructor() {
  }

  ngOnInit(): void {
    // this.http.get<any[]>('http://example.com/api/currency-data')
    //   .subscribe(data => {
    //     // Datenobjekte mit Icon-Pfaden aktualisieren
    //     this.dataSource = data.map(item => ({
    //       ...item,
    //       icon: this.getIconPath(item.currenyName) // Methode zur Ermittlung des Icon-Pfads
    //     }));
    //   });
  }


  incrementAmount(element: PeriodicElement) {
    element.amount += 1;
  }

  decrementAmount(element: PeriodicElement) {
    if (element.amount > 0) {
      element.amount -= 1;
    }
  }

  confirmDataChange() {
  }

  getIconPath(currencyName: string): string {
    // Logik zur Ermittlung des Icon-Pfads basierend auf dem Währungsnamen
    // Beispiel: Rückgabe des Pfads zum Icon basierend auf dem Währungsnamen
    return `../../../../assets/img/icons/${currencyName.toLowerCase()}Icon.png`;
  }
}
