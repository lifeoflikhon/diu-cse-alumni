import { Injectable } from '@angular/core';
import {HotToastService} from "@ngneat/hot-toast";
import {catchError, map, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(
    private toaster: HotToastService
  ) { }

  load<T>(observer: Observable<T>, loadingMessage: string, successMessage: string) {
    this.toaster.loading(loadingMessage, {
      id: loadingMessage
    });

    return observer
      .pipe(
        map(res => {
          this.toaster.close(loadingMessage);
          this.toaster.success(successMessage);
          return res;
        }),
        catchError(err => {
          this.toaster.close(loadingMessage);
          this.toaster.error(err)
          return throwError(err);
        })
      )
  }
}
