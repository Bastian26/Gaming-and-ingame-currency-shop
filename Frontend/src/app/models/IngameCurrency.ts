export class IngameCurrency {
  id?: number;
  currencyName?: string;
  gameName?: string;
  amount?: number;
  lastModified?: Date;

  constructor(
    id: number,
  currencyName: string,
  gameName: string,
  amount: number,
  lastModified: Date
  ) {
    this.id = id;
    this.currencyName = currencyName;
    this.gameName = gameName;
    this.amount = amount;
    this.lastModified = lastModified;
  }
 }
