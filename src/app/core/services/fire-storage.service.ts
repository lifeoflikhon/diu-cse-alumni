import {Injectable} from '@angular/core';
import {AngularFireStorage, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {forkJoin, from, map, mergeMap, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FireStorageService {

  constructor(
    private fireStorage: AngularFireStorage
  ) { }

  upload(file: File): AngularFireUploadTask {
    return this.fireStorage.upload('files', file);
  }

  resume(task: AngularFireUploadTask) {
    return task.resume();
  }

  pause(task: AngularFireUploadTask) {
    return task.pause();
  }

  cancel(task: AngularFireUploadTask) {
    return task.cancel();
  }

  delete(url: string) {
    this.fireStorage.refFromURL(url).delete();
  }

  getUrl(task: AngularFireUploadTask): Observable<string> {
    return task.snapshotChanges()
      .pipe(
        mergeMap(res => res.ref.getDownloadURL())
      );
  }

  uploadAndGetUrl(file: File) {
    return this.getUrl(this.upload(file));
  }

  uploadFilesAndGetUrls(files: File[]): Observable<string[]> {
    return forkJoin(files.map(file => this.uploadAndGetUrl(file)));
  }
}
