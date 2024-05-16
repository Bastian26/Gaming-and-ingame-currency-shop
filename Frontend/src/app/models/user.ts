import {Address} from "./Address";
import {UserRole} from "./UserRole";

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  userName: string;
  email?: string;
  telNr?: string;
  address?: Address;
  userRole?: UserRole;
  token?: string;
}

