import { Component } from '@angular/core';
import { IClasse } from '../../interface/IClasse';
import { Open5eService } from '../../service/open5e.service';

@Component({
  selector: 'app-classes-select',
  standalone: true,
  imports: [],
  templateUrl: './classes-select.component.html'
})
export class ClassesSelectComponent {
  public classes: IClasse[] = []

  constructor(private open5eService: Open5eService) { }

  ngOnInit() {
    this.load()
  }  

  private load = () => {
    this.open5eService.getAllClasses().subscribe((data) => this.classes = data)
  }
}
