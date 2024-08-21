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
  displayedColumns: string[] = ["icon", "currenyName", "gameName", "amount"];
  dataSource = ELEMENT_DATA;
  oldPassword: string = "";
  newPassword: string = "";
  newPasswordRepeat: string = "";
  minLengthOf8: boolean;
  containsUpperAndLowercaseLetter: boolean;
  containsNumber: boolean;
  containsSpecialCharacter: boolean;
  passwordStrengthText: string = "Weak";

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
    element.amount += 1000;
  }

  decrementAmount(element: PeriodicElement) {
    if (element.amount > 1000) {
      element.amount -= 1000;
    }
  }

  // TODO: Call to service to change Currencydata for particular user
  confirmDataChange() {
  }

  getIconPath(currencyName: string): string {
    // Logik zur Ermittlung des Icon-Pfads basierend auf dem Währungsnamen
    // Beispiel: Rückgabe des Pfads zum Icon basierend auf dem Währungsnamen
    return `../../../../assets/img/icons/${currencyName.toLowerCase()}Icon.png`;
  }

  passwordValidation(): void {
    // Has min length of 8
    this.newPassword.length >= 8 ? this.minLengthOf8 = true : this.minLengthOf8 = false;

    // Has upper and lower case letter
    (/[A-Z]/.test(this.newPassword) && /[a-z]/.test(this.newPassword)) ?
      this.containsUpperAndLowercaseLetter = true : this.containsUpperAndLowercaseLetter = false;

    // contains numbers (at least 1)
    (/[0-9]/.test(this.newPassword)) ? this.containsNumber = true : this.containsNumber = false;

    // contains special character (at least 1)
    (/[!@#$%^&*(),.?":{}|<>]/.test(this.newPassword)) ? this.containsSpecialCharacter = true
      : this.containsSpecialCharacter = false;
  }

    // Check password requirements for weak to strong display (in colors)
    checkNewPasswordRequirements(passwordStrength: string): boolean {
      switch(passwordStrength) {
        case 'weak': {
          if (this.minLengthOf8) {
            return true;
          }
          break;
        }
        case 'medium': {
          if (this.minLengthOf8 && this.containsUpperAndLowercaseLetter) {
            return true;
          }
          break;
        }
        case 'strong': {
          if (this.minLengthOf8 && this.containsUpperAndLowercaseLetter && this.containsNumber) {
            return true;
          }
          break;
        }
        case 'very-strong': {
          if (this.minLengthOf8 && this.containsUpperAndLowercaseLetter && this.containsNumber
            && this.containsSpecialCharacter) {
            return true;
          }
          break;
        }
      }
      return false;
  }


  allRequirementsAchieved(): boolean {
    if (this.minLengthOf8 && this.containsUpperAndLowercaseLetter && this.containsNumber
      && this.containsSpecialCharacter && this.oldPassword.length > 1
      && (this.newPassword === this.newPasswordRepeat)) {
      return true;
    }
    return false;
  }

  // TODO: post call to service and then backend
  changePassword() {

  }
}

