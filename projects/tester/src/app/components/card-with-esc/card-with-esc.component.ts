import { Component, Input, TemplateRef } from '@angular/core';
import { Card } from '../../shared/models/card.model';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-card-with-esc',
  templateUrl: './card-with-esc.component.html',
  styleUrls: ['./card-with-esc.component.scss']
})
export class CardWithEscComponent {
  @Input() card: Card;
  isExpanded = false;
  modalRef;

  constructor(public modalService: MatDialog) {}

  onClickToggle() {
    this.isExpanded = !this.isExpanded;
  }

  onClickTest() {
    alert('click event was captured in the card component class!');
  }

  openModal(templateRef: TemplateRef<any>) {
    this.modalRef = this.modalService.open(templateRef, { disableClose: false });
    this.modalRef.afterClosed().pipe(take(1)).subscribe(() => {
      if (this.isExpanded) this.onClickToggle();
    });
  }

  closeModal() {
    this.modalRef.close();
    this.modalRef = null;
  }
}
