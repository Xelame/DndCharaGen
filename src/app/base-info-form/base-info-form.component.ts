import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClassesSelectComponent } from '../classes-select/classes-select.component';
import { SpeciesSelectComponent } from '../species-select/species-select.component';
import { BackgroundSelectComponent } from '../background-select/background-select.component';
import { AlignmentSelectComponent } from '../alignment-select/alignment-select.component';
import { FormDataService } from '../../service/form-data.service';

@Component({
  selector: 'app-base-info-form',
  standalone: true,
  imports: [ReactiveFormsModule, ClassesSelectComponent, SpeciesSelectComponent, BackgroundSelectComponent, AlignmentSelectComponent],
  templateUrl: './base-info-form.component.html'
})
export class BaseInfoFormComponent {

  public applyForm: FormGroup;

  constructor(private formDataService: FormDataService) {
    this.applyForm = new FormGroup({
      charaterName: new FormControl('', [Validators.required]),
      class: new FormControl('', [Validators.required]),
      specie: new FormControl('', [Validators.required]),
      background: new FormControl('', Validators.required),
      alignment: new FormControl('', [Validators.required]),
      playerName: new FormControl('', [Validators.required])
    })
    
  }

  public submitForm = () => {
    JSON.stringify(this.applyForm.value)
    this.formDataService.updateFormData(this.applyForm.value)
  }


  onSelectionChange = (event: any) => {
    if (event.target.type === 'select-one') {
      this.applyForm.controls[event.target.id].setValue(event.target.value)
    }
  }
}
