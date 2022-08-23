import {AuthUser} from "../../auth/models/auth-user";

export class User extends AuthUser {
  superAdmin: boolean; // president, who has every permission
  admin: boolean; // can see everything
  treasurer: boolean; // can see everything and process accounting related actions

  approved: boolean;
}
