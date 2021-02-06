import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-using-app-modalable',
  templateUrl: './card-using-app-modalable.component.html',
  styleUrls: ['./card-using-app-modalable.component.scss']
})
export class CardUsingAppModalableComponent {
  @Input() isExpanded = false;

  onClickToggle() {
    this.isExpanded = !this.isExpanded;
  }

  onClickTest() {
    alert('click event was captured in the card component class!');
  }
}
