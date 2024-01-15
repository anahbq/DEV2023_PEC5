import { Component, Input } from '@angular/core';
import { character } from 'src/app/models/characters.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent {
  @Input()
  characters: character[] = [];
}
