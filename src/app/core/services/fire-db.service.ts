import { Injectable } from '@angular/core';
import {AngularFirestore, QueryFn} from "@angular/fire/compat/firestore";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FireDbService {

  constructor(
    private afs: AngularFirestore
  ) { }

  getBatch<T>(collection: string, queryFn?: QueryFn) {
    return this.afs.collection<T>(collection, queryFn).valueChanges({
      idField: 'id'
    });
  }

  create<T>(collection: string, data: T) {
    const id = this.afs.createId();
    const createdDoc = this.afs.doc<T>(`${collection}/${id}`).set({
      id,
      ...data
    }, {
      merge: true
    });
    return from(createdDoc);
  }

  getById<T>(collection: string, id: string) {
    return this.afs.doc<T>(`${collection}/${id}`).valueChanges({
      idField: 'id'
    });
  }

  update<T>(collection: string, id: string, data: T): Observable<void> {
    return from(this.afs.doc<T>(`${collection}/${id}`).set(data, { merge: true }));
  }

  delete<T>(collection: string, id: string): Observable<void> {
    return from(this.afs.doc<T>(`${collection}/${id}`).delete());
  }
}
