import { Component } from '@angular/core';
import { Card } from './shared/models/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = [
    { title: 'Card 1' },
    { title: 'Card 2' },
    { title: 'Card 3' }
  ];
}
