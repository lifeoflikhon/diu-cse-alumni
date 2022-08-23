import { Injectable } from '@angular/core';
import {FireDbService} from "../../../core/services/fire-db.service";
import {User} from "../models/user";
import {AuthUser} from "../../auth/models/auth-user";
import {mergeMap, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private fireDB: FireDbService
  ) { }

  getAll() {
    return this.fireDB.getBatch<User>('users');
  }

  me() {
    const user: AuthUser = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      return of(null);
    }

    return this.fireDB.getById<User>('users', user.uid);
  }

  getById(id: string) {
    return this.fireDB.getById<User>('users', id);
  }

  approve(id: string) {
    return this.getById(id)
      .pipe(
        mergeMap(res => this.fireDB.update('users', id, {
          ...res,
          approved: true
        }))
      );
  }

  update(id: string, data: User) {
    return this.fireDB.update('users', id, data);
  }
}
