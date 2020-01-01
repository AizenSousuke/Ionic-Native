import { Component } from '@angular/core';
import { IonicNativeService } from '../ionic-native.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  photo = '';
  photoUploaded = false;

  constructor(private _ionicNativeService: IonicNativeService) {}

  onAddPhoto() {
    console.log("Adding photos");
    this._ionicNativeService.onChooseImage().then(string => {
      // console.log(string);
      this.photo = string;
      if (string != "") {
        this.photoUploaded = true;
        console.log("Photo has been uploaded");
      } else {
        console.log("Photo has not been uploaded");
        this.photoUploaded = false;
      }
    });
    // console.log(this.photo);
  }

  onRemovePhoto() {
    console.log("Removing added photo");
    this.photo = '';
    this.photoUploaded = false;
  }

}
