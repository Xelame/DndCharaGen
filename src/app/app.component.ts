import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectButtonComponent } from '../SelectButton/SelectButton.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
