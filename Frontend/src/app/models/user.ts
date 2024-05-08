import {Address} from "./Address";

export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  telNr?: string;
  address?: Address;
  token?: string;
}

