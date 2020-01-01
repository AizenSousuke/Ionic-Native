import { Injectable } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

@Injectable({
  providedIn: 'root'
})
export class IonicNativeService {

  constructor(private fileChooser: FileChooser) { }

  async onChooseFile() {
    try {
      return await this.fileChooser.open()
        .then(uri => {
          console.log(uri);
          return uri;
        }).catch(err => {
          console.log(err);
        });
    } catch (error) {
      console.log("Error:" + error);
    }
  }
}
