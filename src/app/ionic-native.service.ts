import { Injectable } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { throwError } from 'rxjs';

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

    // Works on android only
    try {
      return await this.imagePicker.getPictures({
        // Limit the number of images
        maximumImagesCount: 1,
        // 0 is File URI, use 1 for BASE64_STRING
        outputType: 1,
      }).then(results => {
        // console.log(results);
        if (results.length > 0) {
          return "data:image/png;base64," + results;
        } else {
          console.log("No picture selected");
          return "";
        }
      }).catch(error => {
        throw error.message;
      });
    } catch (error) {
      console.log("Error:" + error);
      throw "Error";
    }
  }
}
