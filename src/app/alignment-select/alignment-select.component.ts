import { Component } from '@angular/core';
import { IAlignment } from '../../interface/IAlignment';
import { Open5eService } from '../../service/open5e.service';

@Component({
  selector: 'app-alignment-select',
  standalone: true,
  imports: [],
  templateUrl: './alignment-select.component.html'
})
export class AlignmentSelectComponent {

  public alignments : IAlignment[] = []

  constructor(private open5eService: Open5eService) { }

  ngOnInit() {
    this.load()
  }

  private load = () => {
    this.alignments = this.open5eService.getAllAlignments()
  }
}
