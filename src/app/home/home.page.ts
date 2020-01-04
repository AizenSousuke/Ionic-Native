import { Component } from '@angular/core';
import { IonicNativeService } from '../ionic-native.service';
import { FormServiceService } from '../form-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  photo = '';
  photoUploaded = false;
  storyForm: FormGroup;

  constructor(
    private _ionicNativeService: IonicNativeService,
    private _formService: FormServiceService,
    ) {
    this.storyForm = this._formService.createForm(this.storyForm);
  }

  get formArray() {
    return this.storyForm.get('formArray');
  }

  onAddPhoto() {
    console.log("Adding photos");
    this._ionicNativeService.onChooseImage().then(string => {
      // console.log(string);
      this.photo = string;
      if (string != "" && string != null) {
        this._formService.editForm(this.storyForm, 'formArray', [
          {
            image: string, // Crashes here if string
          }
        ]);
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
    this._formService.editForm(this.storyForm, 'formArray', [
      {
        image: "", // Crashes here if string
      }
    ]);
    this.photo = "";
    this.photoUploaded = false;
  }

  onSubmitStory() {
    console.log("Submit button has been clicked.");
    console.log(this.storyForm);
    console.log(this.storyForm.valid);
  }
}
