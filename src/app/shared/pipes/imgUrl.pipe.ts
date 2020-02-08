import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';

@Pipe({
  name: 'imgUrl'
})
export class ImgUrlPipe implements PipeTransform {

  constructor(public domSanitar: DomSanitizer) {
  }

  transform(shortImgUrl: string, size?: string): SafeUrl {
    let img = shortImgUrl;
    if (size) {
      if (size === 'small') {
        img = 'sm_' + shortImgUrl;
      }
    }
    return this.domSanitar.bypassSecurityTrustUrl('./assets/images/' + img);
  }

}
