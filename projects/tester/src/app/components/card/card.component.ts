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
  readonly MODAL_OPTS = { disableClose: true };  // for material
  isExpanded = false;
  // readonly MODAL_OPTS = { class: 'modal-dialog-centered', backdrop: 'static', keyboard: false };  // for bootstrap
  modalRef;

  constructor(public modalService: MatDialog) {}

  onClickToggle() {
    this.isExpanded = !this.isExpanded;
  }

  onClickTest() {
    alert('click event was captured in the card component class!');
  }

  openModal(templateRef: TemplateRef<any>) {
    this.modalRef = this.modalService.open(templateRef, this.MODAL_OPTS);
  }

  closeModal() {
    this.modalRef.close();
    this.modalRef = null;
  }
}
