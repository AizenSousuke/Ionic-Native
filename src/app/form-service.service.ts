import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  createForm(form: FormGroup) {
    form = this.formBuilder.group({
      formArray: this.formBuilder.array([
        this.formBuilder.group({
          image: ['', Validators.required]
        }),
        this.formBuilder.group({
          story: ['', Validators.required]
        })
      ]),
    });

    // console.log(form);
    // console.log(form.get("formArray") as FormArray);
    // console.log(form.get(['formArray']).value[0].image);
    return form;
  }

  editForm(form: FormGroup, formArray: string, value: any) {
    form.get(formArray).patchValue(value);
  }
}
