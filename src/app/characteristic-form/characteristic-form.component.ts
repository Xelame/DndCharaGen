import { Component } from '@angular/core';
import { FormDataService } from '../../service/form-data.service';

@Component({
  selector: 'app-characteristic-form',
  standalone: true,
  imports: [],
  templateUrl: './characteristic-form.component.html'
})
export class CharacteristicFormComponent {

  public strength = 0;
  public dexterity = 0;
  public constitution = 0;
  public intelligence = 0;
  public wisdom = 0;
  public charisma = 0;
  public charaterName = '';

  constructor(private formDataService: FormDataService) {
    this.rollCharacteristics();
  }

  ngOnInit(): void {
    this.formDataService.formData$.subscribe(formData => {
      this.charaterName = formData["charaterName"];
    });
  }

  public characteristicToModifier = (characteristic: number) => {
    return Math.floor((characteristic - 10) / 2);
  }

  private diceRoller = () => {
    return Math.floor(Math.random() * 6) + 1;
  }

  public rollCharacteristics = () => {
    this.strength = this.diceRoller() + this.diceRoller() + this.diceRoller();
    this.dexterity = this.diceRoller() + this.diceRoller() + this.diceRoller();
    this.constitution = this.diceRoller() + this.diceRoller() + this.diceRoller();
    this.intelligence = this.diceRoller() + this.diceRoller() + this.diceRoller();
    this.wisdom = this.diceRoller() + this.diceRoller() + this.diceRoller();
    this.charisma = this.diceRoller() + this.diceRoller() + this.diceRoller();
  }
  
}
