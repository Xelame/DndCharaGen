import { Component, OnInit } from '@angular/core';
import { Open5eService } from '../service/open5e.service';
import { Subscription } from 'rxjs';
import { IClasse } from '../interface/IClasse';

@Component({
  selector: 'app-SelectButton',
  standalone: true,
  templateUrl: './SelectButton.component.html',
  styleUrls: ['./SelectButton.component.css']
})

export class SelectButtonComponent implements OnInit {

  protected subs: { [key: string]: Subscription } = {}

  constructor(private open5eService: Open5eService) { }

  ngOnInit() {
//    this.loadRaces()
    this.loadClasses()
  }

  // loadRaces = () => this.open5eService.getAllRaces().subscribe((data) => console.log('Races : ', data.results))
  

  loadClasses = () => {
    this.open5eService.getAllClasses().subscribe((data) => console.log('Classes : ', data))
  }
}