import { Component } from '@angular/core';
import { Open5eService } from '../../service/open5e.service';
import { ISpecie } from '../../interface/ISpecie';

@Component({
  selector: 'app-species-select',
  standalone: true,
  imports: [],
  templateUrl: './species-select.component.html'
})
export class SpeciesSelectComponent {
  public species: ISpecie[] = []

  constructor(private open5eService: Open5eService) { }

  ngOnInit() {
    this.load()
  }

  private load = () => {
    this.open5eService.getAllSpecies().subscribe((data) => this.species = data)
  }

}
