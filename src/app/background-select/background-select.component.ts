import { Component } from '@angular/core';
import { IBackground } from '../../interface/IBackground';
import { Open5eService } from '../../service/open5e.service';

@Component({
  selector: 'app-background-select',
  standalone: true,
  imports: [],
  templateUrl: './background-select.component.html'
})
export class BackgroundSelectComponent {

  public backgrounds : IBackground[] = []

  constructor(private open5eService: Open5eService) { }

  ngOnInit() {
    this.load()
  }

  private load = () => {
    this.open5eService.getAllBackgrounds().subscribe((data) => this.backgrounds = data)
  }

}
