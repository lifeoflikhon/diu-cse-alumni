import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {
  constructor(
    private dom: DomSanitizer
  ) {
  }

  transform(url: string): SafeUrl {
    return this.dom.bypassSecurityTrustUrl(url);
  }

}
