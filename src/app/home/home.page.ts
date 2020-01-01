import { Component } from '@angular/core';
import { IonicNativeService } from '../ionic-native.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  photo;

  constructor(private _ionicNativeService: IonicNativeService) {}

  onAddPhoto() {
    console.log("Adding photos");
    this._ionicNativeService.onChooseFile().then(string => {
      console.log(string);
      this.photo = string;
    });
    console.log(this.photo);
  }

}
