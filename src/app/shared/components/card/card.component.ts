import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data;
  isExpanded = false;

  onClickToggle() {
    this.isExpanded = !this.isExpanded;
  }

  onClickTest() {
    alert('click event is captured in the card component class!');
  }
}
