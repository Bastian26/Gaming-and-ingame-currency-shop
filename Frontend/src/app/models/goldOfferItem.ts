import {User} from "./user";

export interface goldOfferItem {
  id?: number;
  creationDate: Date;
  seller: User;
  price: number;
  amount: number;
}
