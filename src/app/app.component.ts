import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseInfoFormComponent } from './base-info-form/base-info-form.component';
import { CharacteristicFormComponent } from './characteristic-form/characteristic-form.component';
import { FormDataService } from '../service/form-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BaseInfoFormComponent, CharacteristicFormComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private formDataService: FormDataService) {
  }

  // subscribe visible
  public getVisibility = () => {
    return this.formDataService.getVisibility();
  }
}
