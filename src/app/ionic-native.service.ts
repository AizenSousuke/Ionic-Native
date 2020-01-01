import { Injectable } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

@Injectable({
  providedIn: 'root'
})
export class IonicNativeService {

  constructor(
    private imagePicker: ImagePicker,
    private fileChooser: FileChooser
    ) { }

  async onChooseImage() {
    // try {
    //   return await this.fileChooser.open()
    //     .then(uri => {
    //       console.log(uri);
    //       return uri;
    //     }).catch(err => {
    //       console.log(err);
    //     });
    // } catch (error) {
    //   console.log("Error:" + error);
    // }

    try {
      return await this.imagePicker.getPictures({
        //maximumImagesCount: 1,
        outputType: 1,  // 0 is File URI, use 1 for BASE64_STRING
      }).then(results => {
        // console.log(results);
        return "data:image/png;base64," + results;
      });
    } catch (error) {
      console.log("Error:" + error);
    }
  }
}
