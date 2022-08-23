import {Injectable, NgZone} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import * as auth from 'firebase/auth';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Router} from "@angular/router";
import {from, map, Observable, tap} from "rxjs";
import {AuthUser} from "../models/auth-user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  forgotPassword(passwordResetEmail: string): Observable<void> {
    return from(this.afAuth.sendPasswordResetEmail(passwordResetEmail));
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false;
  }

  registerOrLogin(): Observable<any> {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider: any) {
    return from(this.afAuth
      .signInWithPopup(provider)).pipe(
      map(res => {
        this.setUserData(res.user);
        return res;
      })
    );
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );

    const userData: AuthUser = {
      id: user.uid,
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };

    return userRef.set(userData, {
      merge: true,
    });
  }

  signOut(): Observable<void> {
    return from(this.afAuth.signOut()).pipe(
      tap(res => {
        localStorage.removeItem('user');
      })
    );
  }
}
