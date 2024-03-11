import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClassesSelectComponent } from '../classes-select/classes-select.component';
import { SpeciesSelectComponent } from '../species-select/species-select.component';
import { BackgroundSelectComponent } from '../background-select/background-select.component';
import { AlignmentSelectComponent } from '../alignment-select/alignment-select.component';

@Component({
  selector: 'app-base-info-form',
  standalone: true,
  imports: [ReactiveFormsModule, ClassesSelectComponent, SpeciesSelectComponent, BackgroundSelectComponent, AlignmentSelectComponent],
  templateUrl: './base-info-form.component.html'
})
export class BaseInfoFormComponent {

  public applyForm: FormGroup;

  constructor() {
    this.applyForm = new FormGroup({
      charaterName: new FormControl('', [Validators.required]),
      class: new FormControl('', [Validators.required]),
      specie: new FormControl('', [Validators.required]), 
      backgrounds: new FormControl('', Validators.required),
      alignment: new FormControl('', [Validators.required]), 
      playerName: new FormControl('', [Validators.required])
    })
  }

  public submitForm = () => {
    alert(JSON.stringify(this.applyForm.value));
  }

}
