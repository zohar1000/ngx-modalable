import { Component, Input, TemplateRef } from '@angular/core';
import { Card } from '../../shared/models/card.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
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
    this.modalRef = this.modalService.open(templateRef, { disableClose: true });
  }

  closeModal() {
    this.modalRef.close();
    this.modalRef = null;
  }
}
