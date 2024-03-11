import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseInfoFormComponent } from './base-info-form/base-info-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BaseInfoFormComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
}
